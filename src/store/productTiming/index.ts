import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { API_URL } from '@/api';

import { ProductTimingState } from './types';

export const fetchProductTimings = createAsyncThunk('productTimings/fetchProductTimings', async () => {
    const response = await axios.get(`${API_URL}/productTimings`);
    return response.data;
});

const slice = createSlice({
    name: 'ProductTimingsSlice',
    initialState: { status: "idle", productTiming: [], error: null } as ProductTimingState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProductTimings.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductTimings.fulfilled, (state, action) => {
                state.status = 'idle';
                state.productTiming = action.payload;
            })
            .addCase(fetchProductTimings.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || '';
            });
    },
});

export default slice.reducer;