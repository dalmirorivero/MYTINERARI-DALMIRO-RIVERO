import React from 'react'
import { useState } from 'react'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import Button from '../Button/Button'
import './header.css'

const links = [
    { value: '/', content: 'HOME', id: '1'},
    { value: '/cities', content: 'CITIES', id: '2'},
];

const Header = () => {

    const [ menu, setMenu ] = useState( false )

    const toggleMenu = () => {
        setMenu( !menu )
    }

    return (
        <>
        <header className="xs:flex-col sm:flex-row flex justify-between items-center w-full font-josefin sticky top-0 bg-white z-50 shadow">
            <Logo />
            <div className="md:flex flex-row text-xl font-semibold xs:hidden">
                <NavBar links={links}/>
                <Button title='LOGIN' to='#'>
                    <i className="fa fa-user custom" style={{ color: '#ffffff'}}></i>
                </Button>
            </div>
            <button onClick={ toggleMenu }
            className="xs:pt-0 xs:m-0 sm:mx-5 sm:pt-1 md:hidden">
                <i className="fa fa-solid fa-caret-down hover:text-customOrange text-4xl"></i>
            </button>
        </header>
        
        <div className={`pepito ${ menu ? 'isActive' : '' }`}>
            <div className="w-full justify-center items-center list-none font-josefin font-bold shadow md:hidden">
                <li className="border-b border-gray-200 border-solid m-2 hover:text-customOrange"><a href="/">HOME</a></li>
                <li className="border-b border-gray-200 border-solid m-2 hover:text-customOrange"><a href="/cities">CITIES</a></li>
                <li className="m-2 mb-0 hover:text-customOrange"><a href="">LOGIN</a></li>
            </div>
        </div>
        
</>
    )
};

export default Header;