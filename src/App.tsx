import React from "react";
import axios from "axios";
import Movie from "./movies";

interface Movietypes {
  id: number;
  year: number;
  title: string;
  summary: string;
  poster: string;
}

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  //laoding some files from other websites can be retarded in some conditions
  //to ensure that I hope to call getMovies first, I set "async"
  // and "await" allows me to target what order I want to make javascript wait for
  //inside axios.get("https://yts-proxy.now.sh/list_movies.json) , there are a lot of properties but What I want to focus more on is movies
  //the path of this is {data:{data:{movies}}}
  //inside movies = [{...},{...},{...}.........]
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false }); // put "movies" array into the default state object
    console.log(this.state.movies);
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    function putting(everyMovie: Movietypes) {
      console.log(everyMovie);
      return (
        <Movie
          key={everyMovie.id}
          id={everyMovie.id}
          year={everyMovie.year}
          title={everyMovie.title}
          summary={everyMovie.summary}
          poster={everyMovie.poster}
        />
      );
    }
    return <div>{isLoading ? "Loading" : movies.map(putting)}</div>;
  }
}

export default App;
