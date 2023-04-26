import React from "react";
import "./ItemList.css"


function ItemList(props){

    return(
        <> 
            <h2> {props.title} </h2>
            <div className="produtsViewContainer">
                {props.products}
            </div>
        </> 
    ) 
}

export default ItemList; 