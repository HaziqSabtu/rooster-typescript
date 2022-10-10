import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface ImageModalState {
    isOpen: boolean;
    imageArray: string[];
    index: number;
}

// Define the initial state using that type
const initialState: ImageModalState = {
    isOpen: false,
    imageArray: [],
    index: 0,
};

export const ImageModalSlice = createSlice({
    name: "imageModal",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setOpenModal: (state) => {
            state.isOpen = true;
        },
        setCloseModal: (state) => {
            state.isOpen = false;
        },
        setImageArray: (state, action: PayloadAction<string[]>) => {
            state.imageArray = action.payload;
        },
        setImageIndex: (state, action: PayloadAction<number>) => {
            state.index = action.payload;
        },
        incrementImageIndex: (state) => {
            state.index =
                state.index === state.imageArray.length - 1
                    ? 0
                    : state.index + 1;
        },
        decrementImageIndex: (state) => {
            state.index =
                state.index === 0
                    ? state.imageArray.length - 1
                    : state.index - 1;
        },
    },
});

export const {
    setOpenModal,
    setCloseModal,
    setImageArray,
    setImageIndex,
    incrementImageIndex,
    decrementImageIndex,
} = ImageModalSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
export const selectCurrentImageIndex = (state: RootState) =>
    state.imageModal.index;

export const selectCurrentImageModalState = (state: RootState) =>
    state.imageModal.isOpen;

export const selectCurrentImageArray = (state: RootState) =>
    state.imageModal.imageArray;

export default ImageModalSlice.reducer;
