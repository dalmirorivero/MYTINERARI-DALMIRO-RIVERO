import React from 'react'
import NavBar from '../NavBar/NavBar'

const links = [
    { value: '/about', content: 'ABOUT US', id: '1'},
    { value: '/faq', content: 'FAQ', id: '2'},
    { value: '/contact', content: 'CONTACT', id: '3'},
];

//MENU DE NAVEGACION SECUNDARIO: NO ME PARECIO NECESARIO POR EL MOMENTO
// const maproad = [
//     { value: '/back', content: 'back home ↩', id: '1'},
//     { value: '/cities', content: 'cities', id: '2'}
// ];

const Footer = () => {
    return (
    <footer className="flex items-center flex-col font-josefin">
    <hr className="w-[90%] mt-4" />
    <div className="flex flex-row">
        <ul className="flex flex-col">
            <li className="pt-2 pb-2 inline-block">
                <NavBar links={links}/>
            </li>
        </ul>
    </div>

    {/* MENU DE NAVEGACION SECUNDARIO: NO ME PARECIO NECESARIO POR EL MOMENTO
    <div>
        <ul className= 'flex flex-col'>
            <li className='pt-0'><NavBar links={maproad}/></li>
        </ul>
    </div> */}

    </footer>
    )
};

export default Footer;