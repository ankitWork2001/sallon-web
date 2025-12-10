import { configureStore } from "@reduxjs/toolkit";
import homeSalonReducer from "../userSlice/homeSalon";
import supperadmin from '../superAdmin/SuperAdmin'
import adminSlice from "../adminSlice/adminSlice"

export const store = configureStore({
    reducer:{
        homeSalon:homeSalonReducer,
        salons:supperadmin,
        admin:adminSlice
    }
})