import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import userReducer from'./slices/UserSlice'
import postReducer from'./slices/PostSlice'

import  thunk from 'redux-thunk'
export default configureStore({reducer:{userReducer,postReducer}},applyMiddleware(thunk))