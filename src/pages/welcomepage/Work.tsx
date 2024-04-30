import React from 'react';
import NoDining from '../../assets/pick-meals-image.png';
import ViewNShare from '../../assets/choose-image.png';
import SocialMedia from '../../assets/social-media.png';

const Work = () => {
    const workInfoData = [
        {
            image: NoDining,
            title: 'No more dining out',
            text: "With KitchenConnect, getting recipes has never been easier. Thanks to our simplistic design, you'll be cooking in no time!",
        },

        {
            image: ViewNShare,
            title: 'View and share recipes',
            text: 'Need inspiration for a meal or just want to save recipes? KitchenConnect is just for you!',
        },

        {
            image: SocialMedia,
            title: 'Become famous',
            text: 'KitchenConnect provides users with a social media-like platform to showcase their delectable creations',
        },
    ];
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading"> Work</p>
                <h1 className="primary-heading">How It Works</h1>
            </div>
            <div className="work-section-bottom">
                {workInfoData.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
