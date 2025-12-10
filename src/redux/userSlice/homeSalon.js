import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getSalondata = createAsyncThunk('salon/getapidata', async ({ url, key, token }) => {
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
const homeSalonSlice = createSlice({
    name: 'salon',
    initialState: {
        data: {},
        loading: false,
        error: null
    },
    reducers: {
        setHomeSalonData: (state, action) => {
            state.homeSalonData = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSalondata.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSalondata.fulfilled, (state, action) => {
                state.loading = false;
                state.data[action.payload.key] = action.payload.data
            })
            .addCase(getSalondata.rejected, (state) => {
                state.loading = false;
                state.error = "something went wrong";
            })

    }
})

export const { setHomeSalonData, setLoading, setError } = homeSalonSlice.actions;

export default homeSalonSlice.reducer;