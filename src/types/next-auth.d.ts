import { Post } from "@prisma/client";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user?: {
            id: string;
            followedByIDs: Post["followedByIDs"];
            followingIDs: Post["followingIDs"];
        } & DefaultSession["user"];
    }

    interface User {
        id: string;
        email?: string | undefined | null;
        image?: string | undefined | null;
        name?: string | undefined | null;
        followedByIDs: Post["followedByIDs"];
        followingIDs: Post["followingIDs"];
    }
}

declare module "prisma-types" {
    interface Post {
        user: User & Post;
    }
}
