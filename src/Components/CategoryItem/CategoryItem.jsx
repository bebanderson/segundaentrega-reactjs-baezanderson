import React from "react";
import "./CategoryItem.css";
import { Figure } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoryItem(props){
    return (
        <>
            <Link to={`/categoria/${props.item.name}`} key={props.item.id}>
                <Figure> 
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={props.item.img}
                    />
                    <Figure.Caption>
                        {props.item.title}
                    </Figure.Caption>
                </Figure>
            </Link>
        </>
    )
}

export default CategoryItem; 
