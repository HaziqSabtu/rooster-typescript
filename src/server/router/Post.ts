import { createProtectedRouter } from "./protected-router";
import { z } from "zod";
// Example router with queries that can only be hit if the user requesting is signed in
export const PostRouter = createProtectedRouter()
    .query("findAll", {
        resolve: async ({ ctx }) => {
            return await ctx.prisma.post.findMany({ include: { user: true } });
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
    });

export type PostRouter = typeof PostRouter;
