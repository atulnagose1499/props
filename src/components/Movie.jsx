import React from "react";

const Movie = ({ title, year, img }) => {
  return (
    <div className="movieCards">
      <img src={img} alt="" style={{ width: "150px" }} />
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
  );
};

export default Movie;
