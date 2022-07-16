import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import {MdOutlineCancel} from 'react-icons/md';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show)
    return (
        <div className='w-screen h-[80px] z-10 bg-black fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    {/* <h1 className='text-white text-3xl font-bold mr-4 sm:text-4xl'>ANIME ARCHIVE</h1> */}
                    <Link to="/" className='text-white text-3xl font-bold mr-4 sm:text-4xl'>ANIME ARCHIVE</Link>
                    <ul className='hidden text-white md:flex'>
                        <li><Link to="/browse">BROWSE</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='mr-4 px-4'> SIGN IN </button>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {!show ? <FaBars className='w-5 text-white' /> : <MdOutlineCancel className='w-5 text-white'/>}
                </div>
            </div>
            <ul className={!show ? 'hidden' : 'absolute text-white bg-black w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full'><Link to="/browse">BROWSE</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link to="/about">ABOUT</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link to="/contact">CONTACT</Link></li>
                <div className='flex flex-col my-4'>
                    <button className='px-8 py-4'> SIGN IN </button>
                </div>
            </ul>
        </div>

    );
}

export default Navbar;