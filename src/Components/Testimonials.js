import React from "react";
import ProfilePic from "../Assets/testimonial-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading" >Testimonials</p>
            <h1 className="primary-heading" >What Our Users Are Saying</h1>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p> I am a passionate chef who loves to cook Italian food, and now with
                KitchenConnect, I can view and share my favorite Italian recipes! Mamma Mia!
            </p>
            <div className="testimonials-stars-container" >
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>Brandon Robertiello</h2>
        </div>
    </div>
  )
}

export default Testimonials
