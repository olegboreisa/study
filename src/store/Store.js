import React from 'react';
import {configureStore} from "@reduxjs/toolkit";
import user from './Slices/UserSlice'

export const createStore = (initialState) => {

    const store = configureStore({
        reducer: {
            user
        },
    })
    return store
}

const store = createStore()
export default store