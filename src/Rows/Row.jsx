import React, {useState} from "react";

function Row({ title }) {
    const [movies,setMovies]=useState([]);
  return (
    <div>
      {/*title*/}
      <h2>{title}</h2>
      {/*container with posters*/}
      {/*posters*/}
    </div>
  );
}

export default Row;