import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer(props){

    const footerStyle={
        height: "50px",
        backgroundColor: "black",
        color: "white",
        padding: "20px",
        marginTop: "50px",
    }

    return(
        <>
            <div style={footerStyle}>
                <span>Beatriz Elizabeth</span>
            </div>
        </>
    )
}

export default Footer; 