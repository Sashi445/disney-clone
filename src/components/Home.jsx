import React, { useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import { useSelector, useDispatch } from "react-redux";
import { selectUserName } from "../features/user/userSlice";
import MovieTiles from "./Common";
import {
  selectRecommend,
  selectTrending,
  selectOriginals,
  selectNewDisney,
  setMovies,
} from "../features/movies/movieSlice";
import readFromDb from "./helper";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const recommends = useSelector(selectRecommend);
  const newDisney = useSelector(selectNewDisney);
  const trending = useSelector(selectTrending);
  const originals = useSelector(selectOriginals);

  useEffect(() => {
    async function readData() {
      const movies = await readFromDb();
      dispatch(setMovies(movies));
    }
    readData();
  }, [userName]);

  return (
    <Container>
      <ImageSlider></ImageSlider>
      <Viewers></Viewers>
      <MovieTiles category="Recommended for you" movies={recommends} />
      <MovieTiles category="New in Disney+" movies={newDisney} />
      <MovieTiles category="Trending" movies={trending} />
      <MovieTiles category="Originals" movies={originals} />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
