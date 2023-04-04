import React from "react";
import { Link } from "react-router-dom";

const TabBar = () => {
    return (
        <header className='border-b sticky top-0 z-20 bg-black'>
            <div className='flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl'>
                <span className='text-xl font-bold text-white'>
                    Vog Challenge
                </span>
                <div className="space-x-5">
                    <Link to="/carlos_colina_launchpad-react-code-challenge/" className="text-lg pt-1 font-light text-white">
                        Home
                    </Link>
                    <Link to="/carlos_colina_launchpad-react-code-challenge/postal-lookup" className="text-lg pt-1 font-light text-white">
                        Postal lookup
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default TabBar;
