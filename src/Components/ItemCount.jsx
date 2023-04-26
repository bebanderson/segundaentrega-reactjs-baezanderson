import React, { useState } from "react";
import AdditionButton from "./AdditionButton";
import AddToCartButton from "./AddToCartButton";
import SubtractionButton from "./SubtractionButton";

function ItemCount(props){
    const [count, setCount] = useState(1);

    function addItem(){setCount(count+1);}
    function subsItem(){setCount(count-1);}

    return(
        <>
            <div className="itemCountSection"> 
                <SubtractionButton count={count} operation={subsItem} stock={props.product.stock}/>
                <p style={{marginLeft:"10px", marginRight:"10px"}}>{count}</p>
                <AdditionButton count={count} operation={addItem} stock={props.product.stock}/>
            </div>
            <AddToCartButton quantity={count} product={props.product} />
        </>
    )
}

export default ItemCount; 


