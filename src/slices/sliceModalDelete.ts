import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface DeleteModalState {
    value: boolean;
}

// Define the initial state using that type
const initialState: DeleteModalState = {
    value: false,
};

export const DeleteModalSlice = createSlice({
    name: "deleteModal",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        toggleOn: (state) => {
            state.value = true;
        },
        toggleOff: (state) => {
            state.value = false;
        },
    },
});

export const { toggleOn, toggleOff } = DeleteModalSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
export const selectDeleteModal = (state: RootState) => state.deleteModal.value;

export default DeleteModalSlice.reducer;
