import React from 'react';
import './navbar.css';

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
    signouticon
} from '../../assets/index';

interface NavbarItem {
    name: string;
    icon: string;
}

interface NavbarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const navbarItems: NavbarItem[] = [
    { name: 'Home', icon: homeIcon },
    { name: 'Explore', icon: exploreIcon },
    { name: 'Search', icon: searchIcon },
    { name: 'Post', icon: postIcon },
    { name: 'Notifications', icon: notificationIcon },
    { name: 'Messages', icon: messagesIcon },
    { name: 'Recipes', icon: bookmarkIcon },
    { name: 'Profile', icon: profileIcon },
    { name: 'Sign Out', icon: signouticon},
];

const Navbar: React.FC <NavbarProps> = ({ activeTab, setActiveTab }) => {
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="navbar">
            <div className="navbar-items">
                <div className="navbar-logo-container">
                    <h1 className="navbar-logo">KitchenConnect</h1>
                </div>
                {navbarItems.map((item, index) => (
                    <div
                        key={index}
                        className={`navbar-item ${
                            activeTab === item.name ? 'active' : ''
                        }`}
                        onClick={() => handleTabClick(item.name)}
                    >
                        <img
                            className="navbar-item-logo"
                            src={item.icon}
                            alt={item.name}
                        />
                        {item.name}
                    </div>
                ))}
            </div>

            <div className="navbar-bottom">
                <div
                    className={`navbar-item ${
                        activeTab === 'Settings' ? 'active' : ''
                    } settings`}
                    onClick={() => handleTabClick('Settings')}
                >
                    <img
                        className="navbar-item-logo"
                        src={menuBurger}
                        alt="Settings"
                    />
                    Settings
                </div>
            </div>
        </div>
    );
};

export default Navbar; 