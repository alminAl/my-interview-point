import React from 'react';
import Footer from '../components/Shared/Footer';
import Navbar from '../components/Shared/Navbar';

const Layout = ({ children }) => {
    return (
        <div className='min-h-screen'>
            <nav >
                <Navbar />
            </nav>
            <main>{children}</main>
            <footer className="sticky top-[100vh]">
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;