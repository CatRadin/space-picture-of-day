import React from "react";
import styled from "styled-components";
import Typist from 'react-typist';


export default function Title(props){

    return (
        <StyledNavTitle className='nav-title'>
            <img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png' alt= 'nasa-logo'></img> 
            <Typist> <Typist.Delay ms={1000} /> Nasa Photo of the Day
            </Typist>
            </StyledNavTitle>
    
    )
}

const StyledNavTitle = styled.div`
display:flex;
justify-content: center;
align-items: center;
font-size:5rem
` 