import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount";

function ItemDetail(props){

    return (
      <>
        <div className="detailContainer" >
          <img
            className="d-block detailImage"
            src={props.product.img}
            alt="Imagen de producto"
          />
          <div>
            <h3>{props.product.name}</h3>
            <p className="detailPrice"> $ {props.product.price}</p>
            <ItemCount product={props.product} />
          </div>
        </div>
      </>
    );
}

export default ItemDetail; 