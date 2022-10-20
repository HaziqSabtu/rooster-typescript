// src/server/router/context.ts
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { unstable_getServerSession as getServerSession } from "next-auth";

import { authOptions as nextAuthOptions } from "../../pages/api/auth/[...nextauth]";
import { prisma } from "../db/client";
import { cloudinaryUpload as cu } from "../services/cloudinary";
import { upload as multer } from "../services/multer";

export const createContext = async (
    opts?: trpcNext.CreateNextContextOptions
) => {
    const req = opts?.req;
    const res = opts?.res;

    const session =
        req && res && (await getServerSession(req, res, nextAuthOptions));

    return {
        req,
        res,
        session,
        prisma,
        cu,
        multer,
    };
};

type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createRouter = () => trpc.router<Context>();
