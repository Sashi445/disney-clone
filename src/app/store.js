import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./../features/movies/movieSlice";
import userReducer from './../features/user/userSlice';

export default configureStore({
    reducer : {
        user : userReducer,
        movie : movieReducer
    }
});