import React from "react";

interface Movietype {
  id: number;
  year: number;
  title: string;
  summary: string;
  poster: string;
}

function Movie(props: Movietype) {
  return <h3>{props.title}</h3>;
}

export default Movie;
