import React from "react";
import { SRLWrapper } from "simple-react-lightbox";


export default function Photo(props){
    const { nasaData } = props
    
    
    return(
        <SRLWrapper>
        <img className='pic-of-day' src={nasaData.url} alt = 'space'></img>
        </SRLWrapper>
    )
}