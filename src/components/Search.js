import React from "react";
import styled from "styled-components";

export default function Search(props){

    return (
        <Styledform className='search-bar'>
            <label for="fname">Search: </label>
            <input type ="text"></input>
            </Styledform>
       
    ) 
    }

    //styles


    const Styledform = styled.form`
    font-size: 1.3rem;
    `