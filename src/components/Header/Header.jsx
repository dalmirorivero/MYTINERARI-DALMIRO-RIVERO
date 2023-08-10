import React from 'react'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import Button from '../Button/Button'

const links = [
    { value: '/', content: 'HOME', id: '1'},
    { value: '/cities', content: 'CITIES', id: '2'},
];

const Header = () => {
    return (
        <header className="xs:flex-col sm:flex-row flex justify-between items-center w-full font-josefin sticky top-0 bg-white z-50 shadow">
        <Logo />
        <div className="flex flex-row text-xl font-semibold xs:mb-4 sm:mb-0 mx-2">
            <NavBar links={links}/>
            <Button title='LOGIN' to='#'>
                <i className="fa fa-user custom" style={{ color: '#ffffff'}}></i>
            </Button>
        </div>
        </header>
    )
};

export default Header;