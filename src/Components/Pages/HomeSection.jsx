import React, { useContext } from 'react';
import { ProductsContext } from '../../Contexts/ProductsContext';
import CategoryListContainer from "../CategoryList/CategoryListContainer";
import ItemList from '../ItemList/ItemList';
import Item from "../Item";


function HomeSection(){

    const { product } = useContext(ProductsContext);

    let bestSellersList = product.filter(item => item.topSeller === true).map((item) => 
      <Item item={item} key={item.id}/>);

    let ourFavoritesList = product.filter(item => item.favorite === true).map((item) => 
      <Item item={item} key={item.id}/>);

    return (
        <>
            <CategoryListContainer />
            <ItemList title={"Nuestros Best Sellers"} products={bestSellersList}/>
            <ItemList title={"Nuestros Favoritos"} products={ourFavoritesList}/>
        </>
    )
}

export default HomeSection; 