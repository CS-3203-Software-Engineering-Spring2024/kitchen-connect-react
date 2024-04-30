import React from 'react';
import AboutBackground from '../../assets/about-background.png';
import AboutBackgroundImage from '../../assets/about-background-image.png';

const About = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading">
                    Dishes are the recipe to a healthy life
                </h1>
                <p className="primary-text">
                    At KitchenConnect, we believe that making meals is one of
                    the most important parts of life
                </p>
                <p className="primary-text">
                    KitchenConnect strives to provide a simple and intuitive way
                    for people around the world to store and view recipes
                </p>
            </div>
        </div>
    );
};

export default About;
