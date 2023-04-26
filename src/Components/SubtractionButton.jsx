import React from "react";
import { Button } from "react-bootstrap";

function SubtractionButton(props){

    return(
        <>
            <Button variant="secondary" onClick={props.operation} disabled={(props.count === 1)?true:false}>-</Button>
        </>
    )
}

export default SubtractionButton; 