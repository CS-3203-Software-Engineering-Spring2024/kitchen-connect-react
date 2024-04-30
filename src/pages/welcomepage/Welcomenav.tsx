import { useState } from 'react';
import { HiOutlineBars3 } from 'react-icons/hi2';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import './welcomepage.css';

// RGB(254, 158, 13) for logo

const Welcomenavbar = () => {
    // sets menu to close upon opening page
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: 'Home',
            icon: <HomeIcon />,
        },

        {
            text: 'About',
            icon: <InfoIcon />,
        },

        {
            text: 'Testimonials',
            icon: <CommentRoundedIcon />,
        },

        {
            text: 'Contact',
            icon: <PhoneRoundedIcon />,
        },
        {
            text: 'Cart',
            icon: <ShoppingCartRoundedIcon />,
        },
    ];

    return (
        <nav>
            <div className="nav-logo-container">
                <h1 style={{ color: '#fe9e0d', fontSize: '40px' }}>
                    KitchenConnect
                </h1>
            </div>
            <div className="navbar-links-container">
                <button className="primary-button">Login</button>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer
                open={openMenu}
                onClose={() => setOpenMenu(false)}
                anchor="right"
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    );
};

export default Welcomenavbar;
