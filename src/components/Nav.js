import React from "react";
import Title from './Title'
import "./styles.css";
import styled from "styled-components";



export default function Nav(props){

return (
    <NavContainer className="nav-container">
        <Title />
       
    </NavContainer>
)

}

const NavContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  padding-left: 1%;
  padding-right: 1%;
  padding-top: 4rem;
  

  
`
