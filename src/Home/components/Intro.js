import React from "react";
import { NavLink } from "react-router-dom";

const Intro = () => {
    return (
        <div className="my-12 mx-auto px-4 max-w-7xl sm:mt-12 md:mt-20 text-center">
          <h1 className=" text-gray-900 font-extrabold">
            <p className="text-xl sm:text-3xl md:text-4xl">Carlos Colina </p>
            <p className="text-transparent pb-3 pt-3 bg-clip-text bg-gradient-to-r from-blue-400 via-pink-500 to-red-text-4xl sm:text-6xl md:text-7xl"> Vog Challenge </p>
          </h1>
          <h2 className="mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
            Explore options
          </h2>
          <div className="mt-5 max-w-md mx-auto justify-center flex items-center md:mt-8"></div>
                <NavLink to="/universities" end  className="inline-flex justify-center items-center h-12 px-6 mr-6 py-3 font-medium border-transparent rounded-md bg-gray-900 hover:bg-gray-900 text-white">
                Universities
                </NavLink>
                <NavLink to="/postal-lookup" end className="items-center inline-flex font-semibold text-gray-900 hover:text-gray-700">
                    Postal Lookup
                </NavLink>
                
        </div>
      )
}

export default Intro;