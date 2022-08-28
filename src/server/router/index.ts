// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { protectedExampleRouter } from "./protected-example-router";
import { PostRouter } from "./Post";
import { CommentRouter } from "./Comment";
import { UserRouter } from "./User";

export const appRouter = createRouter()
    .transformer(superjson)
    .merge("example.", exampleRouter)
    .merge("question.", protectedExampleRouter)
    .merge("post.", PostRouter)
    .merge("comment.", CommentRouter)
    .merge("user.", UserRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
