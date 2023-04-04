import React from "react";
import TabBar from "./components/TabBar";
import Intro from "./components/Intro";
import Input from "./components/Input";
import {useState} from 'react'
import PostalList from "./components/PostalList";

const PostalLookup = () => {
    const [postal, setPostal]=useState("")

    const handleInput = (numbers) => {
        setPostal(numbers);
    };

    console.log(postal)
    return(
        <div>
        <TabBar/>
        <Intro/>
        <Input onHandleInput={handleInput}/>
        {postal && <PostalList postal={postal}/>}
        </div>
    )
}

export default PostalLookup;