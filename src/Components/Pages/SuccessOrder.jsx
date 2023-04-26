import React from "react";
import { useParams } from "react-router-dom";

function SuccessOrder(props){

    const { idOrder } = useParams("");

    const boldStyle = {fontWeight: "700"};

    return(
        <>
            <h3>Gracias por tu compra! </h3>
            El numero de registro de tu compra es: <span style={boldStyle}>{ idOrder }</span><br></br>
            En breve nos contactaremos con vos para coordinar la entrega o envio! <br></br>
            <img src="https://i.pinimg.com/originals/52/0e/52/520e5212080d0fe14d1d9d2e766889e5.gif" alt="Imagen de festejo" />
        </>
    )
}

export default SuccessOrder; 

