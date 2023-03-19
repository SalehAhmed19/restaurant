import React from "react";
import About from "../Components/Isolated/About";
import Banner from "../Components/Isolated/Banner";
import Categories from "../Components/Isolated/Categories";
import DownloadApp from "../Components/Isolated/DownloadApp";
import PopularDishes from "../Components/Isolated/PopularDishes";
import Teams from "../Components/Isolated/Teams";

const Home = () => {
  return (
    <div id="/">
      <Banner />
      <About />
      <Categories />
      <PopularDishes />
      <Teams />
      <DownloadApp />
    </div>
  );
};

export default Home;
