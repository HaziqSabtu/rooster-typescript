import { createProtectedRouter } from "./protected-router";
import { z } from "zod";
// Example router with queries that can only be hit if the user requesting is signed in
export const CommentRouter = createProtectedRouter().mutation("create", {
    input: z.object({
        content: z.string(),
        postIDs: z.string(),
        userIDs: z.string(),
    }),
    resolve: async ({ ctx, input }) => {
        return await ctx.prisma.comment.create({ data: input });
    },
});

export type PostRouter = typeof CommentRouter;
