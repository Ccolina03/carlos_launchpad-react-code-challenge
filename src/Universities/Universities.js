import React from "react";
import TabBar from "./components/TabBar";
import Intro from "./components/Intro";
import CountryList from "./components/CountryList";
import SelectedCountry from "./components/SelectedCountry";
import { useState } from "react";

const Universities = () => {
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountryChange = (selectedCountry) => {
      setSelectedCountry(selectedCountry);
    };
    return(
        <div> 
        <TabBar/>
        <Intro/>
        <CountryList onCountryChange={handleCountryChange} />
      {selectedCountry && <SelectedCountry country={selectedCountry} />}
        </div>
    )
}
export default Universities;