import React from 'react'
import NavBar from '../NavBar/NavBar'

const links = [
    { value: '/about', content: 'ABOUT US', id: '1', role:['default', 'logged']},
    { value: '/register', content: 'REGISTER', id: '2', role:['default']},
    { value: '/contact', content: 'CONTACT', id: '3', role:['default', 'logged']},
];

const Footer = () => {
    return (
    <footer className="flex items-center flex-col font-josefin mt-auto">
    <hr className="w-[90%] mt-4" />
    <div className="flex flex-row">
        <ul className="flex flex-col">
            <li className="pt-2 pb-2 inline-block">
                <NavBar links={links}/>
            </li>
        </ul>
    </div>
    </footer>
    )
};

export default Footer;