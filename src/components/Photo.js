import React from "react";
import { SRLWrapper } from "simple-react-lightbox";


export default function Photo(props){
    const { nasaData } = props
    
    
    return(
        <div className ='pic-holder'>
        <SRLWrapper>
        <img className='pic-of-day' src={nasaData.hdurl} alt = 'space'></img>
        
        </SRLWrapper>
        </div>
    )
}
