import React from "react";
import { Button } from "react-bootstrap";

function AdditionButton(props){

    return(
        <>
            <Button variant="secondary" onClick={props.operation} disabled={(props.count === props.stock || props.stock === 0)?true:false}>+</Button>
        </>
    )
}

export default AdditionButton; 