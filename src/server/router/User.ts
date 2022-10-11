import { createProtectedRouter } from "./protected-router";
import { z } from "zod";
import * as trpc from "@trpc/server";
import { User } from "@prisma/client";
// Example router with queries that can only be hit if the user requesting is signed in
export const UserRouter = createProtectedRouter()
    .query("getUser", {
        input: z.object({
            id: z.string(),
        }),
        resolve: async ({ ctx, input }) => {
            const user = await ctx.prisma.user.findUnique({
                where: { id: input.id },
                include: {
                    posts: true,
                    comments: true,
                    followedBy: true,
                    following: true,
                },
            });
            return user;
        },
    })
    // update user name
    .mutation("updateUserName", {
        input: z.object({
            name: z.string(),
        }),
        resolve: async ({ ctx, input }) => {
            return await ctx.prisma.user.update({
                where: { id: ctx.session.user.id },
                data: {
                    name: input.name,
                },
            });
        },
    })
    // update user Image
    .mutation("updateUserImage", {
        input: z.object({
            image: z.string(),
        }),
        resolve: async ({ ctx, input }) => {
            return await ctx.prisma.user.update({
                where: { id: ctx.session.user.id },
                data: {
                    image: input.image,
                },
            });
        },
    })
    // Add Follower and Following
    .mutation("addFollower", {
        input: z.object({
            followingIDs: z.string(),
            userIDs: z.string(),
        }),
        resolve: async ({ ctx, input }) => {
            // if user trying to follow itself return error
            if (input.followingIDs === ctx.session.user.id) {
                throw new trpc.TRPCError({
                    code: "FORBIDDEN",
                    cause: "You cannot follow yourself",
                });
            }

            // fetch CURRENT USER data
            const user = await ctx.prisma.user.findUniqueOrThrow({
                where: {
                    id: ctx.session.user.id,
                },
                select: {
                    followingIDs: true,
                },
            });

            // fetch FOLLOWING USER data
            const following = await ctx.prisma.user.findUnique({
                where: {
                    id: input.followingIDs,
                },
                select: {
                    followedByIDs: true,
                },
            });
            // if follower user not found return error
            if (!following) {
                throw new trpc.TRPCError({
                    code: "NOT_FOUND",
                    cause: "Follower not found",
                });
            }

            // if user already following return error
            if (user.followingIDs.includes(input.followingIDs)) {
                throw new trpc.TRPCError({
                    code: "BAD_REQUEST",
                    cause: "User already following",
                });
            }

            // if FOLLOWER already following return error
            if (following.followedByIDs.includes(ctx.session.user.id)) {
                throw new trpc.TRPCError({
                    code: "BAD_REQUEST",
                    cause: "Follower Already following",
                });
            }

            // add user id to following id
            const addUserToFollowing = await ctx.prisma.user.update({
                where: { id: input.followingIDs },
                data: {
                    followedByIDs: {
                        set: [...following.followedByIDs, ctx.session.user.id],
                    },
                },
            });

            // if unseccessful return error
            if (!addUserToFollowing)
                throw new trpc.TRPCError({ code: "INTERNAL_SERVER_ERROR" });

            return await ctx.prisma.user.update({
                where: { id: ctx.session.user.id },
                data: {
                    followingIDs: {
                        set: [...user.followingIDs, input.followingIDs],
                    },
                },
            });
        },
    })
    .mutation("removeFollower", {
        input: z.object({
            followingIDs: z.string(),
            userIDs: z.string(),
        }),
        resolve: async ({ ctx, input }) => {
            // if user trying to unfollow itself return error
            if (input.followingIDs === ctx.session.user.id) {
                throw new trpc.TRPCError({
                    code: "FORBIDDEN",
                    cause: "You cannot unfollow yourself",
                });
            }

            // fetch CURRENT USER data
            const user = await ctx.prisma.user.findUniqueOrThrow({
                where: {
                    id: ctx.session.user.id,
                },
                select: {
                    followingIDs: true,
                },
            });

            // fetch FOLLOWING USER data
            const following = await ctx.prisma.user.findUnique({
                where: {
                    id: input.followingIDs,
                },
                select: {
                    followedByIDs: true,
                },
            });

            // if follower user not found return error
            if (!following) {
                throw new trpc.TRPCError({
                    code: "NOT_FOUND",
                    cause: "Follower not found",
                });
            }

            // if user already NOT following return error
            if (!user.followingIDs.includes(input.followingIDs)) {
                throw new trpc.TRPCError({ code: "BAD_REQUEST" });
            }

            // if FOLLOWER already NOT following return error
            if (!following.followedByIDs.includes(ctx.session.user.id)) {
                throw new trpc.TRPCError({
                    code: "BAD_REQUEST",
                    cause: "Follower Already following",
                });
            }

            // REMOVE user id from following id
            const removeUserFromFollowing = await ctx.prisma.user.update({
                where: { id: input.followingIDs },
                data: {
                    followedByIDs: {
                        set: following.followedByIDs.filter(
                            (id: string) => id !== ctx.session.user.id
                        ),
                    },
                },
            });

            // if unseccessful return error
            if (!removeUserFromFollowing)
                throw new trpc.TRPCError({ code: "INTERNAL_SERVER_ERROR" });

            return await ctx.prisma.user.update({
                where: { id: ctx.session.user.id },
                data: {
                    followingIDs: {
                        set: user.followingIDs.filter(
                            (id: string) => id !== input.followingIDs
                        ),
                    },
                },
            });
        },
    });
export type PostRouter = typeof UserRouter;
