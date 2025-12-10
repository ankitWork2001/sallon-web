import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDataAdmin = createAsyncThunk('admin/getapidata', async ({ url, key,token }) => {
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",   
        },
    });
    const data = await res.json()
    return { key, data }
})

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        data: {},
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDataAdmin.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDataAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.data[action.payload.key] = action.payload.data
            })
            .addCase(getDataAdmin.rejected, (state) => {
                state.loading = false;
                state.error = "api failed";
            })

    }
})

export default adminSlice.reducer