import React from 'react';

// Below we are importing icons from assets/index.tsx
import {
    homeIcon,
    exploreIcon,
    menuBurger,
    messagesIcon,
    notificationIcon,
    postIcon,
    profileIcon,
    searchIcon,
    bookmarkIcon,
} from '../../assets/index';
import './navbar.css';

interface NavbarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}
const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
    return (
        <div className="navbar">
            <div className="navbar-items">
                <div className="navbar-logo-container">
                    <h1 className="navbar-logo">KitchenConnect</h1>
                </div>
                <div
                    className={`navbar-item ${
                        activeTab === 'Home' ? 'active' : ''
                    }`}
                    onClick={() => setActiveTab('Home')}
                >
                    <img
                        className="navbar-item-logo"
                        src={homeIcon}
                        alt="Home"
                    />
                    Home
                </div>
                <div
                    className={`navbar-item ${
                        activeTab === 'Explore' ? 'active' : ''
                    }`}
                    onClick={() => setActiveTab('Explore')}
                >
                    <img
                        className="navbar-item-logo"
                        src={exploreIcon}
                        alt="Home"
                    />
                    Explore
                </div>
                <div
                    className={`navbar-item ${
                        activeTab === 'Search' ? 'active' : ''
                    }`}
                    onClick={() => setActiveTab('Search')}
                >
                    <img
                        className="navbar-item-logo"
                        src={searchIcon}
                        alt="Home"
                    />
                    Search
                </div>
                <div
                    className={`navbar-item ${
                        activeTab === 'Post' ? 'active' : ''
                    }`}
                    onClick={() => setActiveTab('Post')}
                >
                    <img
                        className="navbar-item-logo"
                        src={postIcon}
                        alt="Home"
                    />
                    Post
                </div>
                <div
                    className={`navbar-item ${
                        activeTab === 'Messages' ? 'active' : ''
                    }`}
                    onClick={() => setActiveTab('Notifications')}
                >
                    <img
                        className="navbar-item-logo"
                        src={notificationIcon}
                        alt="Home"
                    />
                    Notifications
                </div>
                <div
                    className={`navbar-item ${
                        activeTab === 'Notifications' ? 'active' : ''
                    }`}
                    onClick={() => setActiveTab('Messages')}
                >
                    <img
                        className="navbar-item-logo"
                        src={messagesIcon}
                        alt="Home"
                    />
                    Messages
                </div>
                <div
                    className={`navbar-item ${
                        activeTab === 'Notifications' ? 'active' : ''
                    }`}
                    onClick={() => setActiveTab('Recipes')}
                >
                    <img
                        className="navbar-item-logo"
                        src={bookmarkIcon}
                        alt="Home"
                    />
                    Recipes
                </div>
                <div
                    className={`navbar-item ${
                        activeTab === 'Profile' ? 'active' : ''
                    }`}
                    onClick={() => setActiveTab('Profile')}
                >
                    <img
                        className="navbar-item-logo profile-icon"
                        src={profileIcon}
                        alt="Home"
                    />
                    Profile
                </div>
            </div>

            <div className="navbar-bottom">
                <div
                    className={`navbar-item ${
                        activeTab === 'Settings' ? 'active' : ''
                    } settings`}
                    onClick={() => setActiveTab('Settings')}
                >
                    <img
                        className="navbar-item-logo"
                        src={menuBurger}
                        alt="Home"
                    />
                    Settings
                </div>
            </div>
        </div>
    );
};

export default Navbar;
