import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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
    signOut: (b: boolean) => void;
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
];

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, signOut }) => {

    const navigate = useNavigate();

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const handleSignOut = () => {
        // Implement your sign-out logic here
        console.log('Signing out...'); // Placeholder for actual sign-out logic
        // Redirect to login or other appropriate action
        localStorage.removeItem('jwt')
        localStorage.removeItem('user_id')

        signOut(false);

        navigate('/login');
    };

    return (
        <div className="navbar">
            <div className="navbar-items">
                <div className="navbar-logo-container">
                    <h1 className="navbar-logo">KitchenConnect</h1>
                </div>
                {navbarItems.map((item, index) => (
                    <Link to={item.path} key={index}>
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
                <div
                    className={`navbar-item ${
                        activeTab === 'Sign Out' ? 'active' : ''
                    }`}
                    onClick={handleSignOut}
                >
                    <img
                        className="navbar-item-logo"
                        src={signouticon}
                        alt="Sign Out"
                    />
                    Sign Out
                </div>
            </div>

            <div className="navbar-bottom">
                <Link to="/settings">
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
