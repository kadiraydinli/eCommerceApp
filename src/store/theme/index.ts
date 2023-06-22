import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ThemeState, ThemeType } from './types';

const slice = createSlice({
    name: 'theme',
    initialState: { theme: undefined } as ThemeState,
    reducers: {
        changeTheme: (state, action: PayloadAction<ThemeType>) => {
            state.theme = action.payload;
        },
    },
});

export const { changeTheme } = slice.actions;

export default slice.reducer;
