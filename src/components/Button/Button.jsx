import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({ title, to, children }) => {
  return (
    <Link to={to} className="button">
      <p className="text-center mt-0 button-text mx-2 bg-customGreen hover:bg-customOrange text-white font-bold pt-1 px-4 rounded">
        {title}
        {children}
      </p>
    </Link>
  );
};

export default Button;