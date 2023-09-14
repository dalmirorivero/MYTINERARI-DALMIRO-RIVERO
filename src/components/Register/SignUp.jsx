import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/authA";
import { toast, Flip } from "react-toastify";

export const Register = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    mail: "",
    name: "",
    password: "",
    terms: false,
  });

  const handleChangeData = (e) => {
    setData((prevState) => {
      return e.target.name === "terms"
        ? { ...prevState, [e.target.name]: e.target.checked }
        : { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();
    if (!data.name || !data.mail || !data.password) {
      toast.error("Todos los campos son obligatorios", {
        position: "top-center",
        transition: Flip,
      });
      return;
    }

    const userData = { ...data };

    if (userData.terms) {
      delete userData.terms;
      try {
        const res = await axios.post(
          "http://localhost:8082/api/auth",
          userData
        );
        console.log(res);
        dispatch(signup(res.data));
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleSubmitGoogle = async (data) => {
    const userData = { ...data };
    if (userData.terms) {
      delete userData.terms;
      const res = await axios.post("http://localhost:8082/api/auth", userData);
      console.log(res);
      dispatch(signup(res.data));
    }
  };

  return (
    <div>
      <section className="flex items-center justify-center">
        <h1 className="xs:text-2xl xs:mx-9 sm:text-2xl md:text-3xl md:mx-6 lg:text-5xl font-bold transform hover:scale-105 transition duration-300 my-10 mb-0">
          Register now to start the adventure!
        </h1>
      </section>
      <div className="w-full max-w-[800px] px-3 my-[8%] mx-auto items-center justify-center">
        <div className="relative z-0 flex flex-col min-w-0 bg-white border-0  rounded-2xl bg-clip-border items-center justify-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              const user = jwtDecode(credentialResponse.credential);
              console.log(user);
              handleSubmitGoogle({
                mail: user.email,
                name: user.given_name + " " + user.family_name,
                password: import.meta.env.VITE_GOOGLEPASS,
                terms: true,
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
          <form role="form text-left" onSubmit={handleSubmitData}>
            <div className="mb-8">
              <input
                name="name"
                onChange={handleChangeData}
                value={data.name}
                aria-describedby="name-addon"
                aria-label="Name"
                placeholder="Name"
                className="text-sm block w-full rounded border border-solid  focus:border-customOrange  border-customGreen focus:outline-none py-2 px-3 focus:text-customGreen "
                type="text"
              />
            </div>
            <div className="mb-8">
              <input
                name="lname"
                onChange={handleChangeData}
                value={data.lname}
                aria-describedby="lname-addon"
                aria-label="Lname"
                placeholder="Last name"
                className="text-sm block w-full rounded border border-solid  focus:border-customOrange  border-customGreen focus:outline-none py-2 px-3 focus:text-customGreen "
                type="text"
              />
            </div>
            <div className="mb-8">
              <input
                name="mail"
                onChange={handleChangeData}
                value={data.mail}
                aria-describedby="Mail-addon"
                aria-label="Mail"
                placeholder="Mail"
                className="text-sm block w-full rounded border border-solid  focus:border-customOrange border-customGreen focus:outline-none py-2 px-3 focus:text-customGreen "
                type="email"
              />
            </div>
            <div className="mb-8">
              <input
                name="photo"
                onChange={handleChangeData}
                value={data.photo}
                aria-describedby="photo-addon"
                aria-label="photo"
                placeholder="Photo (URL)"
                className="text-sm block w-full rounded border border-solid  focus:border-customOrange border-customGreen focus:outline-none py-2 px-3 focus:text-customGreen "
                type="text"
              />
            </div>
            <div className="mb-8">
              <select
                name="country"
                onChange={handleChangeData}
                value={data.country}
                aria-describedby="country-addon"
                aria-label="country"
                className="text-sm block w-full rounded border border-solid focus:border-customOrange border-customGreen focus:outline-none py-2 px-3 focus:text-customGreen"
                placeholder="SELECT A COUNTRY"
              >
                <option value="" disabled>
                  Select a Country
                </option>
                <option value="UnitedStates">United States</option>
                <option value="Canada">Canada</option>
                <option value="UnitedKingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="NewZealand">New Zealand</option>
                <option value="India">India</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Spain">Spain</option>
                <option value="Italy">Italy</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="Brazil">Brazil</option>
                <option value="Mexico">Mexico</option>
                <option value="Argentina">Argentina</option>
                <option value="SouthAfrica">South Africa</option>
              </select>
            </div>

            <div className="mb-4">
              <input
                name="password"
                onChange={handleChangeData}
                value={data.password}
                aria-describedby="password-addon"
                aria-label="Password"
                placeholder="Password"
                className="text-sm block w-full rounded border border-solid focus:border-customOrange border-customGreen focus:outline-none py-2 px-3 focus:text-customGreen "
                type="password"
              />
            </div>
            <div className="min-h-6 pl-7  block text-center">
              <input
                name="terms"
                onChange={handleChangeData}
                value={data.terms}
                type="checkbox"
                id="terms"
              />
              <label
                htmlFor="terms"
                className="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700"
              >
                {" "}
                I agree the{" "}
                <a className=" text-customGreen hover:text-customOrange">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="flex justify-center w-full mt-4 font-bold text-center text-white bg-customGreen rounded
                text-lg  hover:bg-customOrange"
              >
                SIGN UP
              </button>
            </div>
            <p className="mt-4 mb-0 text-sm">
              Already have an account?{" "}
              <Link
                className=" text-customGreen hover:text-customOrange"
                to="/login"
              >
                Sign in!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
