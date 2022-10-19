import { configureStore } from "@reduxjs/toolkit";
import { CurrentUserSlice } from "./slices/sliceCurrentUser";
import { DeleteCommentSlice } from "./slices/sliceDeleteComment";
import { DeletePostSlice } from "./slices/sliceDeletePost";
import { DeleteModalSlice } from "./slices/sliceModalDelete";
import { ImageModalSlice } from "./slices/sliceModalImage";
import { NewPostSlice } from "./slices/sliceNewPost";

// ...

export const store = configureStore({
    reducer: {
        currentUser: CurrentUserSlice.reducer,
        deleteModal: DeleteModalSlice.reducer,
        deletePost: DeletePostSlice.reducer,
        deleteComment: DeleteCommentSlice.reducer,
        imageModal: ImageModalSlice.reducer,
        newPostModal: NewPostSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
