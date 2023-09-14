import React, { useRef } from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/authA";
import { Link } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const mail = useRef();
  const password = useRef();

  const handleSubmitData = async () => {

    const userData = {
      mail: mail.current.value,
      password: password.current.value,
    };
    try {
      const res = await axios.post("http://localhost:8082/api/auth/login", userData);
      console.log(res);
      dispatch(signin(res.data));
      } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitGoogle = async (data) => {
    const res = await axios.post("http://localhost:8082/api/auth/login", data);
    console.log(res);
    dispatch(signin(res.data));
    };

  return (
    <div>
      <section className="flex items-center justify-center">
        <h1 className="xs:text-2xl xs:mx-9 sm:text-2xl md:text-3xl md:mx-6 lg:text-5xl font-bold transform hover:scale-105 transition duration-300 my-12 mb-0">
          Login now to start the adventure!
        </h1>
      </section>
      <div className="w-full max-w-[800px] px-3 my-[10%] mx-auto items-center justify-center">
        <div className="relative z-0 flex flex-col min-w-0 bg-white border-0 items-center justify-center rounded-2xl bg-clip-border">
          <GoogleLogin
            onSuccess={(tokenResponse) => {
              console.log(tokenResponse);
              const user = jwtDecode(tokenResponse.credential);
              console.log(user);
              handleSubmitGoogle({
                mail: user.email,
                password: "Donato23",
              });
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />

          <div className="relative w-full max-w-full px-6 my-2 text-center">
            <p className="px-4 font-bold text-sm">OR</p>
          </div>
        </div>
        <div className="flex-auto">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-8">
              <input
                ref={mail}
                type="text"
                name="email"
                className="text-sm block w-full rounded border border-solid  focus:border-customOrange border-customGreen focus:outline-none py-2 px-3 focus:text-customGreen "
                placeholder="Email"
                autoComplete="off"
              />
            </div>
            <div className="mb-8">
              <input
                ref={password}
                type="password"
                name="password"
                className="text-sm block w-full rounded border border-solid  focus:border-customOrange border-customGreen focus:outline-none py-2 px-3 focus:text-customGreen "
                placeholder="Password"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="flex justify-center w-full py-1 mt-4 font-bold text-center text-white bg-customGreen rounded
                text-lg  hover:bg-customOrange"
                onClick={handleSubmitData}
              >
                SIGN IN
              </button>
            </div>
            <p className="mt-4 mb-0 text-sm">
              Dont have an account?{" "}
              <Link
                className=" text-customGreen hover:text-customOrange"
                to="/register"
              >
                Sign up!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
