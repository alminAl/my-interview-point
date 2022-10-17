import { AppBar, Box, IconButton, Menu, Toolbar } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/icons/logo.svg'
import './Navbar.css'

const Navbar = () => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <>
            {/* Navigation For Mobile Device */}
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                className={mobileMenuId}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
            >
                {/* Nav */}
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', pb: 2 }}>
                    <NavLink to="/" style={{ textDecoration: 'none', textAlign: 'center', fontSize: 18, fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif", color: 'black', margin: '10px 0', padding: '0 25px' }}>Home</NavLink>
                    <NavLink to="/pricing" style={{ textDecoration: 'none', textAlign: 'center', fontSize: 18, fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif", color: 'black', margin: '10px 0', padding: '0 25px' }}>Pricing</NavLink>
                    <NavLink to="/enterprise" style={{ textDecoration: 'none', textAlign: 'center', fontSize: 18, fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif", color: 'black', margin: '10px 0', padding: '0 25px' }}>Enterprise</NavLink>
                    <NavLink to="/professions" style={{ textDecoration: 'none', textAlign: 'center', fontSize: 18, fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif", color: 'black', margin: '10px 0', padding: '0 25px' }}>Professions We Cover</NavLink>
                    <NavLink to="/faq" style={{ textDecoration: 'none', textAlign: 'center', fontSize: 18, fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif", color: 'black', margin: '10px 0', padding: '0 25px' }}>FAQs</NavLink>
                    <NavLink to="/supports" style={{ textDecoration: 'none', textAlign: 'center', fontSize: 18, fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif", color: 'black', margin: '10px 0', padding: '0 25px' }}>Supports & Video Tutorial</NavLink>
                    <NavLink to="/contact" style={{ textDecoration: 'none', textAlign: 'center', fontSize: 18, fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif", color: 'black', margin: '10px 0', padding: '0 25px' }}>Contact US</NavLink>
                    <NavLink to="/blogs" style={{ textDecoration: 'none', textAlign: 'center', fontSize: 18, fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif", color: 'black', margin: '10px 0', padding: '0 25px' }}>Blogs</NavLink>
                    <Box sx={{ display: { xs: 'flex', flexDirection: 'column', sm: 'none' } }}>
                        <NavLink to="/login" style={{ textDecoration: 'none', textAlign: 'center', fontSize: 18, fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif", color: 'black', margin: '10px 0', padding: '0 25px' }}>Login</NavLink>
                        <NavLink to="/signup" style={{ textDecoration: 'none', textAlign: 'center', fontSize: 18, fontWeight: 'bold', fontFamily: "'Open Sans', sans-serif", color: 'black', margin: '10px 0', padding: '0 25px' }}>Signup</NavLink>
                    </Box>
                </Box>
            </Menu>
        </>
    );
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#ffffff', mx: '3%' }}>
            <AppBar sx={{ boxShadow: 0 }} position="sticky" style={{ backgroundColor: '#ffffff' }}>
                <Toolbar sx={{ display: 'flex', alignItems: 'flex-center', justifyContent: 'space-between' }}>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMobileMenuOpen}
                    >
                        <MenuIcon sx={{ color: '#000D83', width: '50px', height: '50px' }} />
                    </IconButton>

                    {/* <Box sx={{ flexGrow: 1 }} /> */}
                    {/* name */}
                    <NavLink to="/" >
                        <img style={{ width: '100px' }} src={logo} alt="" />
                    </NavLink>

                    {/* Right Nav */}

                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <Link to='/login'><button className='font-bold text-black mr-2'>Login</button></Link>
                        <Link to='/signup'><button className='font-bold text-black'>Signup</button></Link>
                    </Box>

                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box >
    );
};

export default Navbar;