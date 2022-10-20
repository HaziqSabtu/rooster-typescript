import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Post } from "@prisma/client";

// Define a type for the slice state
interface SettingState {
    setting: {
        userName: string | null;
        image: string[];
    };
}

// Define the initial state using that type
const initialState: SettingState = {
    setting: { userName: null, image: [] },
};

export const SettingSlice = createSlice({
    name: "settingModal",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.setting.userName = action.payload;
        },

        setImage: (state, action: PayloadAction<string>) => {
            state.setting.image = [action.payload];
        },
    },
});

export const { setUserName, setImage } = SettingSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
export const selectCurrentSetting = (state: RootState) =>
    state.settingModal.setting;

export default SettingSlice.reducer;
