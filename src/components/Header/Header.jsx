import "./header.css";
import React from "react";
import { useState } from "react";
import { toast, Flip } from "react-toastify";
import { signout } from "../../store/actions/authA";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import Button from "../Button/Button";

const links = [
  { value: "/", content: "HOME", id: "1", role: ["default", "logged"] },
  { value: "/cities", content: "CITIES", id: "2", role: ["default", "logged"] },
];

const Header = () => {
  const { isAuthenticated } = useSelector((store) => store.authentication);
  const { user } = useSelector((store) => store.authentication);
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      toast(
        <div className="text-center w-full">
          <p>Are you sure you want to log out?</p>
          <button className="font-bold mx-2 hover:text-green-600" onClick={async () => {
              await dispatch(signout());
              toast.dismiss();
            }}>
            Yes
          </button>
          <button className="font-bold mx-2 hover:text-red-500" onClick={() => toast.dismiss()}>
            No
          </button>
        </div>,
        {
          position: "top-center",
          autoClose: false, 
          closeOnClick: false, 
          draggable: false, 
          closeButton: false,
          theme: "light",
          transition: Flip, 
        }
      );
    } catch (error) {
      console.error("Error loggin out", error);
    }
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className="xs:flex-col sm:flex-row flex justify-between items-center w-full font-josefin sticky top-0 bg-white z-50 shadow">
        <Logo />
        <div className="md:flex flex-row text-xl font-semibold xs:hidden items-center">
          
          {user?.photo && (<img src={user.photo} alt="userphoto" className="border-2 border-green-500 w-10 rounded-full items-center"/>)}

          <NavBar links={links} />

          {isAuthenticated ? (
            <a className="button" onClick={handleLogout}>
              <p className="text-center mt-0 button-text mx-2 cursor-pointer bg-red-500 hover:bg-customGreen text-white font-bold pt-1 px-4 rounded">
                LOGOUT
              </p>
            </a>
          ) : (
            <Button title="LOGIN" to="/login" />
          )}

        </div>
        
        <button
          onClick={toggleMenu}
          className="xs:pt-0 xs:m-0 sm:mx-5 sm:pt-1 md:hidden"
        >
          <i className="fa fa-solid fa-caret-down hover:text-customOrange text-4xl"></i>
        </button>
      </header>

      <div className={`pepito ${menu ? "isActive" : ""}`}>
        <div className="w-full justify-center items-center list-none font-josefin font-bold shadow md:hidden">
          <li className="border-b border-gray-200 border-solid m-2 hover:text-customOrange">
            <a href="/">HOME</a>
          </li>
          <li className="border-b border-gray-200 border-solid m-2 hover:text-customOrange">
            <a href="/cities">CITIES</a>
          </li>
          <li className="m-2 mb-0 hover:text-customOrange">
            <a href="">LOGIN</a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Header;
