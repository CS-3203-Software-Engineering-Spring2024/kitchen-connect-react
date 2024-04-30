import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png"
import{FiArrowRight} from "react-icons/fi";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Recipes, All In One Place
          </h1>
          <p className="primary-text">
            With KitchenConnect, your favorite recipe is one click away
          </p>
          <button className="secondary-button">
            <a href="http://localhost:5173/">
            Sign Up <FiArrowRight />{" "}
            </a>
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};


export default Home;
