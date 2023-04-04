import React from "react";
import sendPostalData from "../server/api";
import { useState, useEffect } from "react";
import PostalCard from "./PostalCard";

const PostalList = ({postal}) => {
   const [postalData, setPostalData]=useState([])

   useEffect(() => {
    sendPostalData(postal).then(data => (setPostalData(data)))
    .catch(error => console.log(error));
  }, [postal]);

  if (!postalData || postalData.length === 0) {
    return(
        <div className="flex justify-center">
               <p className="text-transparent pb-3 pt-12 bg-clip-text bg-gradient-to-r from-pink-500 via-blue-400 to-red-text-4xl sm:text-6xl md:text-7xl"> Maybe try another one?</p>
        </div>
    )
}
  return (
    <div>
        {postalData && <PostalCard onPostalData={postalData}/>}
    </div>
  );
}
export default PostalList;