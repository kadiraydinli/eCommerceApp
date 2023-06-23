import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { API_URL } from '@/api';

import { HotDealsState } from './types';

export const fetchHotDeals = createAsyncThunk('hotdeals/fetchHotDeals', async () => {
    const response = await axios.get(`${API_URL}/hotdeals`);
    return response.data;
});

const slice = createSlice({
    name: 'HotDealsSlice',
    initialState: { status: "idle", productIds: [], error: null } as HotDealsState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchHotDeals.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchHotDeals.fulfilled, (state, action) => {
                state.status = 'idle';
                state.productIds = action.payload;
            })
            .addCase(fetchHotDeals.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || '';
            });
    },
});

export default slice.reducer;