import React from "react";
import image from "./badGateway.png";

function NotFound(){
    return (
        <>
            <h2>Ups, esta pagina no existe</h2>
            <img src={image} alt="" />
        </>
    )
}

export default NotFound; 