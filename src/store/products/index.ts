import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { API_URL } from '@/api';

import { ProductState } from './types';
import { isObjectString } from './helper';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get(`${API_URL}/products`)
        .then(response => {
            let data = response.data;

            // Tests if JSON data is corrupt
            try {
                JSON.parse(data);
            } catch {
                // JSON data is corrupt; Extract the broken part from the JSON data
                const newData = data.map((item: Record<string, any>) => {
                    let oneObject = {};
                    Object.keys(item).map((key, keyIndex) => {
                        if (!isObjectString(key)) {
                            oneObject = {
                                ...oneObject,
                                [key]: Object.values(item)[keyIndex],
                            }
                        }
                    });

                    return oneObject;
                });

                data = newData;
            }

            return data;
        });

    return response;
});

const slice = createSlice({
    name: 'ProductsSlice',
    initialState: { status: "idle", products: [], error: null } as ProductState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'idle';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || '';
            });
    },
});

export default slice.reducer;