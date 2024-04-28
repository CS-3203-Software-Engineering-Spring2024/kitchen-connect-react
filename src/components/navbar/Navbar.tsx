import React from 'react';
import { Link } from 'react-router-dom';
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
    signouticon,
} from '../../assets/index';

interface NavbarItem {
    name: string;
    icon: string;
    path: string;
}

interface NavbarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const navbarItems: NavbarItem[] = [
    { name: 'Home', icon: homeIcon, path: '/' },
    { name: 'Explore', icon: exploreIcon, path: '/explore' },
    { name: 'Search', icon: searchIcon, path: '/search' },
    { name: 'Post', icon: postIcon, path: '/post' },
    { name: 'Notifications', icon: notificationIcon, path: '/notifications' },
    { name: 'Messages', icon: messagesIcon, path: '/messages' },
    { name: 'Recipes', icon: bookmarkIcon, path: '/recipes' },
    { name: 'Profile', icon: profileIcon, path: '/profile' },
    { name: 'Sign Out', icon: signouticon, path: '/signout' },
];

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
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
                    <Link to={item.path} key={index}>
                        {' '}
                        {/* Use the Link component here */}
                        <div
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
                    </Link>
                ))}
            </div>

            <div className="navbar-bottom">
                <Link to="/settings">
                    {' '}
                    {/* Use the Link component here */}
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
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
