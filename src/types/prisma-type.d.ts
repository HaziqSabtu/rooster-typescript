import { Post } from "./prisma-client";
import { User } from "./prisma-client";

declare module prisma_types {
    export interface Post {
        user: User & Post;
    }
}
