
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg'

const Navbar = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Pricing", link: "/" },
        { name: "Enterprise", link: "/" },
        { name: "Training", link: "/" },
        { name: "Support", link: "/" },
        { name: "Contact us", link: "/" },
        { name: "Blogs", link: "/" },
        { name: "Login", link: "/login" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md lg:shadow-none w-full sticky'>
            <div className='lg:flex items-center justify-between bg-white py-4 lg:px-10 px-7'>
                <div>
                    <img src={logo} width='100px' height='100px' alt={logo} />
                </div>

                <div onClick={() => setOpen(!open)} className='text-4xl absolute right-8 top-6 text-red-600 cursor-pointer lg:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'} ></ion-icon>
                </div>

                <ul className={`lg:flex lg:items-center md:pb-0 pb-7 absolute lg:static bg-red-600 lg:bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-4 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='ml-3 lg:ml-5 font-bold text-lg lg:my-0 my-7'>
                                <a href={link.link} className='text-white font-sans lg:text-black lg:hover:text-red-600 hover:text-2xl duration-500'>{link.name}</a>
                            </li>
                        ))
                    }

                    <Link to='/signup'><button className='cursor-pointer font-sans lg:mr-2 lg:ml-4 mb-5 lg:mb-0 border-2 lg:border-0 lg:hover:border-2  text-white hover:text-black font-bold text-lg  px-3 py-2 rounded-lg bg-red-600 hover:border-red-600 hover:bg-white duration-500'>
                        Sign Up
                    </button></Link>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;