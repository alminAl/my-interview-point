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
                <Box className='bg-red-600 my-0 py-0' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', pb: 2 }} >
                    <NavLink to="/" className=' text-white  text-center text-lg font-bold mt-3 pl-6 pr-6' style={{ textDecoration: 'none', fontFamily: "'Open Sans', sans-serif", }}>Home</NavLink>
                    <NavLink to="/pricing" className=' text-white text-center text-lg font-bold mt-3 pl-6 pr-6' style={{ textDecoration: 'none', fontFamily: "'Open Sans', sans-serif", }}>Pricing</NavLink>
                    <NavLink to="/enterprise" className=' text-white  text-center text-lg font-bold mt-3 pl-6 pr-6' style={{ textDecoration: 'none', fontFamily: "'Open Sans', sans-serif", }}>Enterprise</NavLink>
                    <NavLink to="/professions" className=' text-white  text-center text-lg font-bold mt-3 pl-6 pr-6' style={{ textDecoration: 'none', fontFamily: "'Open Sans', sans-serif", }}>Professions We Cover</NavLink>
                    <NavLink to="/faq" className=' text-white  text-center text-lg font-bold mt-3 pl-6 pr-6' style={{ textDecoration: 'none', fontFamily: "'Open Sans', sans-serif", }}>FAQs</NavLink>
                    <NavLink to="/supports" className=' text-white  text-center text-lg font-bold mt-3 pl-6 pr-6' style={{ textDecoration: 'none', fontFamily: "'Open Sans', sans-serif", }}>Supports & Video Tutorial</NavLink>
                    <NavLink to="/contact" className=' text-white  text-center text-lg font-bold mt-3 pl-6 pr-6' style={{ textDecoration: 'none', fontFamily: "'Open Sans', sans-serif", }}>Contact US</NavLink>
                    <NavLink to="/blogs" className=' text-white  text-center text-lg font-bold mt-3 pl-6 pr-6' style={{ textDecoration: 'none', fontFamily: "'Open Sans', sans-serif", }}>Blogs</NavLink>
                    <Box sx={{ display: { xs: 'flex', flexDirection: 'column', sm: 'none' } }}>
                        <NavLink to="/login" className=' text-white sm:text-black text-center text-lg font-bold mt-3 pl-6 pr-6' style={{ textDecoration: 'none', fontFamily: "'Open Sans', sans-serif" }}>Login</NavLink>
                        <NavLink to="/signup" className=' text-white sm:text-black text-center text-lg font-bold mt-3 pl-6 pr-6' style={{ textDecoration: 'none', fontFamily: "'Open Sans', sans-serif" }}>Signup</NavLink>
                    </Box>
                </Box>
            </Menu>
        </>
    );
    return (
        <Box className='mt-5' sm={{ flexGrow: 1 }} sx={{ flexGrow: 1, backgroundColor: '#ffffff', mx: '4%' }}>
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

                    {/* name */}
                    <NavLink to="/" >
                        <img style={{ width: '100px' }} src={logo} alt="" />
                    </NavLink>

                    {/* Right Nav */}

                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <Link to='/login'><button className='font-bold text-black mr-5 py-2' style={{ fontFamily: "'Open Sans', sans-serif" }}>Log In</button></Link>
                        <Link to='/signup'><button className='font-bold text-white bg-red-600 px-4 py-2 rounded-lg' style={{ fontFamily: "'Open Sans', sans-serif" }}>Sign Up</button></Link>
                    </Box>

                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box >
    );
};

export default Navbar;