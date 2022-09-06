import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface PostIDState {
    id: string;
}

// Define the initial state using that type
const initialState: PostIDState = {
    id: "",
};

export const DeletePostSlice = createSlice({
    name: "deletePost",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setPostId: (state, action: PayloadAction<string>) => {
            state.id = action.payload;
        },
    },
});

export const { setPostId } = DeletePostSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
export const selectPostId = (state: RootState) => state.deletePost.id;

export default DeletePostSlice.reducer;
