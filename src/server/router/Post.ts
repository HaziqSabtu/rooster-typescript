import { createProtectedRouter } from "./protected-router";
import { z } from "zod";
import * as trpc from "@trpc/server";
// Example router with queries that can only be hit if the user requesting is signed in
export const PostRouter = createProtectedRouter()
    .query("findAll", {
        resolve: async ({ ctx }) => {
            return await ctx.prisma.post.findMany({
                include: { user: true, comments: { include: { user: true } } },
                orderBy: { createdAt: "desc" },
            });
        },
    })
    .query("findPostById", {
        input: z.object({
            postId: z.string(),
        }),
        resolve: async ({ ctx, input }) => {
            // query for post
            const post = await ctx.prisma.post.findFirstOrThrow({
                // where: { id: "630de39f3bf0cd0387f5569d" },
                where: { id: input.postId },
                include: { user: true, comments: { include: { user: true } } },
            });

            //  if post is not available, throw error 404
            if (!post) {
                throw new trpc.TRPCError({ code: "NOT_FOUND" });
            }

            // return post
            return post;
        },
    })
    .mutation("create", {
        input: z.object({
            content: z.string().nullish(),
            image: z.string().nullish(),
            userIDs: z.string(),
        }),
        resolve: async ({ ctx, input }) => {
            if (input.userIDs !== ctx.session.user.id)
                throw new trpc.TRPCError({ code: "UNAUTHORIZED" });

            return await ctx.prisma.post.create({ data: input });
        },
    })
    .mutation("delete", {
        input: z.object({
            postIDs: z.string(),
        }),
        resolve: async ({ ctx, input }) => {
            // get post return post or null
            const post = await ctx.prisma.post.findFirst({
                where: { id: input.postIDs },
            });

            // if post is not found return 404
            if (!post) {
                throw new trpc.TRPCError({ code: "NOT_FOUND" });
            }

            // if request user is not the post owner return 403
            if (ctx.session.user.id !== post.userIDs) {
                throw new trpc.TRPCError({ code: "UNAUTHORIZED" });
            }

            // delete post
            return await ctx.prisma.post.delete({
                where: { id: input.postIDs },
            });
        },
    });

export type PostRouter = typeof PostRouter;
