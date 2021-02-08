import React from 'react';
import {configureStore} from "@reduxjs/toolkit";
import user, {loadUserFromStorage} from './Slices/UserSlice'

export const createStore = (initialState) => {

    const store = configureStore({
        reducer: {
            user
        },
        preloadedState: {user: loadUserFromStorage(), ...initialState}
    })
    return store
}

const store = createStore()
export default store