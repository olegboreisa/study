import React from 'react';
import {configureStore} from "@reduxjs/toolkit";
import user from './Slices/UserSlice'
import {logger} from "redux-logger";

export const createStore = (initialState) => {

    const store = configureStore({
        reducer: {
            user
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    })

    return store
}

const store = createStore()
export default store