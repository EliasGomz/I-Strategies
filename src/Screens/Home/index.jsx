import React from "react";
import MovieList from "../../Components/MovieList";
import useGetData from "../../CustomHooks/useGetData";

const Home = () => {
  const { data } = useGetData();

  return (
    <div
      className="container-fluid"
      style={{
        background: "#566573",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="p-2 m-2 mt-2">
        <MovieList movies={data} />
      </div>
    </div>
  );
};

export default Home;
