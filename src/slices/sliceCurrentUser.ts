import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { User } from "next-auth";

// Define a type for the slice state
interface CurrentUserState {
    user: User | null;
}

// Define the initial state using that type
const initialState: CurrentUserState = {
    user: null,
};

export const CurrentUserSlice = createSlice({
    name: "currentUser",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
    },
});

export const { setCurrentUser } = CurrentUserSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
export const selectCurrentUser = (state: RootState) => state.currentUser.user;

export default CurrentUserSlice.reducer;
