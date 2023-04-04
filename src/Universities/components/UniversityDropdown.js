import React, { useState, useEffect } from "react";
import { getCountriesUniversity } from "../server/api";

const UniversityDropdown = (props) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [universities, setUniversities] = useState([]);

  const handleClick = (country) => {
    setSelectedCountry(country);
  };

  useEffect(() => {
    if (selectedCountry) {
      getCountriesUniversity(selectedCountry)
        .then((response) => setUniversities(response.data))
        .catch((error) => console.log(error)); 
    }
  }, [selectedCountry]);

  return (
    <div>
      <ul>
        <li className="flex justify-center">
          <button
            className=" text-black font-bold py-2 px-4 rounded"
            onClick={() => handleClick(props.name)}
          >
            {props.name}
          </button>
        </li>
      </ul>
      <div>
        
      {universities && universities.map((university) => (
          <div key={university.name}>
            <h3>{university.name}</h3>
            <p>{university.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityDropdown;
