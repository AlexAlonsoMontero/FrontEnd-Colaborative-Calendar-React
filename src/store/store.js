import { configureStore } from "@reduxjs/toolkit";
import { uiSlice, calendarSlice, authSlice } from "./";

export const store = configureStore({
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    reducer: {
        auth: authSlice.reducer,
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer,
    }
})