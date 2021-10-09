import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommend : null,
    newDisney : null,
    original : null,
    trending : null
}

const movieSlice = createSlice({
    name : "movie",
    initialState : initialState,
    reducers : {
        setMovies : (state, action) => {
            state.recommend = action.payload.recommends;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.originals;
            state.trending = action.payload.trending;
        }
    }
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginals = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;