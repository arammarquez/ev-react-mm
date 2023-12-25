'use client'
import { Logo } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import './index.css'



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <Link href="/">
                <Image src={Logo} alt='logo' className='logo_nav' />
            </Link>


            <button onClick={toggleMenu} className={`menu-btn ${isOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`menu ${isOpen ? 'open' : ''}`}>

                <ul className="navs-links" >
                    <li><a href="/">Home</a></li>
                    <li><a href="./pricing.html">Pricing</a></li>
                    <li><Link href="/Events">EVENTS</Link></li>
                    <li><a className="login-button pc_none" href="./login.html">Login</a></li>
                    <li><a href="./newevent.html" className="li_active">CREATE EVENT</a></li>
                </ul>
            </div>
            {/* <a className="login-button yellow_cr res_none" href="./login.html">Login</a> */}
            <Link href="/Login" className="login-button yellow_cr res_none">Login</Link>

        </nav>
    )
}

export default Header