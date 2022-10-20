import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Post } from "@prisma/client";

// Define a type for the slice state
interface NewPostState {
    Post: {
        content: string | null;
        image: string[];
        video: string | null;
        userIDs: string | null;
    };
}

// Define the initial state using that type
const initialState: NewPostState = {
    Post: { content: null, image: [], video: null, userIDs: null },
};

export const NewPostSlice = createSlice({
    name: "newPostModal",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setContent: (state, action: PayloadAction<string>) => {
            state.Post.content = action.payload;
        },
        setImage: (state, action: PayloadAction<string>) => {
            state.Post.image = !state.Post.video
                ? [...state.Post.image, action.payload]
                : [];
        },
        removeOneImage: (state, action: PayloadAction<string>) => {
            state.Post.image = state.Post.image.filter(
                (value) => value !== action.payload
            );
        },
        setVideo: (state, action: PayloadAction<string | null>) => {
            state.Post.video =
                state.Post.image.length === 0 ? action.payload : null;
        },
        setUserIDs: (state, action: PayloadAction<string>) => {
            state.Post.userIDs = action.payload;
        },
        setPostInitialState: (state) => {
            state.Post = {
                content: null,
                image: [],
                video: null,
                userIDs: null,
            };
        },
    },
});

export const {
    setContent,
    setImage,
    removeOneImage,
    setVideo,
    setUserIDs,
    setPostInitialState,
} = NewPostSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
export const selectCurrentPost = (state: RootState) => state.newPostModal.Post;

export default NewPostSlice.reducer;
