import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface CommentIDState {
    id: string;
}

// Define the initial state using that type
const initialState: CommentIDState = {
    id: "",
};

export const DeleteCommentSlice = createSlice({
    name: "deleteComment",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setCommentId: (state, action: PayloadAction<string>) => {
            state.id = action.payload;
        },
    },
});

export const { setCommentId } = DeleteCommentSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCommentId = (state: RootState) => state.deleteComment.id;

export default DeleteCommentSlice.reducer;
