import { configureStore } from "@reduxjs/toolkit";
import { DeleteCommentSlice } from "./slices/sliceDeleteComment";
import { DeletePostSlice } from "./slices/sliceDeletePost";
import { DeleteModalSlice } from "./slices/sliceModalDelete";

// ...

export const store = configureStore({
    reducer: {
        deleteModal: DeleteModalSlice.reducer,
        deletePost: DeletePostSlice.reducer,
        deleteComment: DeleteCommentSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
