import { db } from "../firebase";
import { collection, getDocs } from "@firebase/firestore";

function classifyMovie(id, movie, movies) {
  switch (movie.type) {
    case "recommend":
      movies.recommends = [...movies.recommends, { id: id, ...movie }];
      break;

    case "new":
      movies.newDisney = [...movies.newDisney, { id:id, ...movie }];
      break;

    case "trending":
      movies.trending = [...movies.trending, { id: id, ...movie }];
      break;

    case "original":
      movies.originals = [...movies.originals, { id: id, ...movie }];
      break;

    default:
      console.log("Default method");
      break;
  }
}

export default async function readFromDb() {
  let movies = {
    recommends: [],
    newDisney: [],
    trending: [],
    originals: [],
  };

  try {
    const querySnapshot = await getDocs(collection(db, "movies"));

    querySnapshot.forEach((doc) => {
      const movieData = doc.data();
      classifyMovie(doc.id, movieData, movies);
    });

    return movies;
  } catch (err) {
    alert(err.message);
    return new Error(err.message);
  }
}
