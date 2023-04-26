import React, { useContext, useEffect, useState } from 'react';
import { FavoriteContext } from "../../Contexts/FavoriteContext";
import FavoriteWidget from './FavoriteWidget';
import FavoriteItem from "../FavoriteItem/FavoriteItem";

function FavoriteWidgetContainer () {

    const { favorite } = useContext(FavoriteContext);
    const [productsFavorites, setProductsCart] = useState([]);

    useEffect(() => {
      setProductsCart(favorite.map((item) => 
        <FavoriteItem item={item} key={item.id}/>)
      ) 
    }, [favorite])

  return (
      <>
        <FavoriteWidget productsFavorites={productsFavorites}/>
      </>
    
  )
}

export default FavoriteWidgetContainer;