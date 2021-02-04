import React from 'react';
import {configureStore} from "@reduxjs/toolkit";
import user from './Slices/UserSlice'
import {logger} from "redux-logger";

export default (initialState) => {

    const store = configureStore({
        reducer: {
            user
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    })

    return store
}