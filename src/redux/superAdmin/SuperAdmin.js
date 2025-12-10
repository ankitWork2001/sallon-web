import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getdata = createAsyncThunk('homesalon/getapidata', async ({ url, key,token }) => {
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

const superAdminSlice = createSlice({
    name: 'superadmin',
    initialState: {
        data: {},
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getdata.pending, (state) => {
                state.loading = true;
            })
            .addCase(getdata.fulfilled, (state, action) => {
                state.loading = false;
                state.data[action.payload.key] = action.payload.data
            })
            .addCase(getdata.rejected, (state) => {
                state.loading = false;
                state.error = "api failed";
            })

    }
})

export default superAdminSlice.reducer