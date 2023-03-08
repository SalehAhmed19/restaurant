import React from "react";
import About from "../Components/Isolated/About";
import Banner from "../Components/Isolated/Banner";
import Categories from "../Components/Isolated/Categories";
import Teams from "../Components/Isolated/Teams";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Categories />
      <Teams />
    </div>
  );
};

export default Home;
