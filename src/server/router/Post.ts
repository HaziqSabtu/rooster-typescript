import { createProtectedRouter } from "./protected-router";
import { z } from "zod";
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
            console.log("input", input);
            return await ctx.prisma.post.findFirstOrThrow({
                where: { id: input.postId },
                include: { user: true, comments: { include: { user: true } } },
            });
        },
    })
    .mutation("create", {
        input: z.object({
            content: z.string().nullish(),
            image: z.string().nullish(),
            userIDs: z.string(),
        }),
        resolve: async ({ ctx, input }) => {
            return await ctx.prisma.post.create({ data: input });
        },

        // return {'httpStatus': 201,
        //     'message': 'Post created',
        // }
    })
    .mutation("delete", {
        input: z.object({
            postIDs: z.string(),
        }),

        resolve: async ({ ctx, input }) => {
            return await ctx.prisma.post.delete({
                where: { id: input.postIDs },
            });
        },
    });

export type PostRouter = typeof PostRouter;
