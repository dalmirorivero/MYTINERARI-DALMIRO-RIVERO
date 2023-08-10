import React from 'react'

const Button = ({title, to, children}) => {
    return (
        <a className="button" href={to}>
            <p className = "text-center mt-0 button-text mx-2 bg-customGreen hover:bg-customOrange text-white font-bold pt-1 px-4 rounded">
                {title}{children}
            </p>
        </a>
    )
};

export default Button;