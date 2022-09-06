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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
