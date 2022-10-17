import React from 'react';
import Footer from '../components/Shared/Footer';
import Navbar from '../components/Shared/Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;