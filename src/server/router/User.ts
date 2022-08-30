import { createProtectedRouter } from "./protected-router";
import { z } from "zod";
import { trpc } from "../../utils/trpc";
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
            const user = await ctx.prisma.user
                .findFirst({
                    where: {
                        id: ctx.session.user.id,
                        followedByIDs: { has: input.followerIDs },
                    },
                })
                .then((res) => {
                    console.log(res);
                });

            return await ctx.prisma.user.update({
                where: { id: input.userIDs },
                data: { followedByIDs: { set: input.followerIDs } },
            });
        },
    })
    .mutation("removeFollower", {
        input: z.object({
            followerIDs: z.string(),
            userIDs: z.string(),
        }),
        resolve: async ({ ctx, input }) => {
            const { followedByIDs } =
                (await ctx.prisma.user.findFirst({
                    where: {
                        id: ctx.session.user.id,
                        followedByIDs: { has: input.followerIDs },
                    },
                })) || {};

            return followedByIDs
                ? await ctx.prisma.user.update({
                      where: { id: ctx.session.user.id },
                      data: {
                          followedByIDs: {
                              set: followedByIDs.filter(
                                  (id) => id !== input.followerIDs
                              ),
                          },
                      },
                  })
                : null;
        },
    });
export type PostRouter = typeof UserRouter;
