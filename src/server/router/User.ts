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
    .mutation("addFollower", {
        input: z.object({
            followerIDs: z.string(),
            userIDs: z.string(),
        }),
        resolve: async ({ ctx, input }) => {
            // if user trying to follow itself return error
            if (input.followerIDs === ctx.session.user.id) {
                throw new trpc.TRPCError({ code: "FORBIDDEN" });
            }
            const user = await ctx.prisma.user.findUniqueOrThrow({
                where: {
                    id: ctx.session.user.id,
                },
                select: {
                    followedByIDs: true,
                },
            });

            // if user already following return error
            if (user.followedByIDs.includes(input.followerIDs)) {
                throw new trpc.TRPCError({ code: "BAD_REQUEST" });
            }
            return await ctx.prisma.user.update({
                where: { id: input.userIDs },
                data: {
                    followedByIDs: {
                        set: [...user.followedByIDs, input.followerIDs],
                    },
                },
            });
        },
    })
    .mutation("removeFollower", {
        input: z.object({
            followerIDs: z.string(),
            userIDs: z.string(),
        }),
        resolve: async ({ ctx, input }) => {
            // if user trying to unfollow itself return error
            if (input.followerIDs === ctx.session.user.id) {
                throw new trpc.TRPCError({ code: "FORBIDDEN" });
            }
            const user = await ctx.prisma.user.findUniqueOrThrow({
                where: {
                    id: ctx.session.user.id,
                },
            });

            // if user already NOT following return error
            if (!user.followedByIDs.includes(input.followerIDs)) {
                throw new trpc.TRPCError({ code: "BAD_REQUEST" });
            }
            return await ctx.prisma.user.update({
                where: { id: ctx.session.user.id },
                data: {
                    followedByIDs: {
                        set: user.followedByIDs.filter(
                            (id: string) => id !== input.followerIDs
                        ),
                    },
                },
            });
        },
    });
export type PostRouter = typeof UserRouter;
