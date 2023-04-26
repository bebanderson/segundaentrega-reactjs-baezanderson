import React, { createContext, useState, useEffect, useContext } from "react"; 
import { CartContext } from "./CartContext";
import { ProductsContext } from "./ProductsContext";

export const FavoriteContext = createContext();

function FavoriteContextProvider ( {children} ) {

    const { addItemCart } = useContext(CartContext);
    const { product } = useContext(ProductsContext);

    let [favorite, setFavorite] = useState([]);
    let [favoriteSize, setFavoriteSize] = useState(0);

    function addItemFavorite (product) {
        let indexArr = isInList(product.id); 
        if (indexArr<0){
            setFavorite([...favorite, {id:product.id, name:product.name, img:product.img}]);
        }
    }

    function itemToCart (id) {
        let item = product.find(producto => producto.id === id); 
        addItemCart(item, 1);
    }

    function removeProduct (idProd){
        let indexArr = isInList(idProd); 
        favorite.splice(indexArr,1);
        setFavorite([...favorite])
    }

    const clear = () => setFavorite([]);

    function isInList (idProd) {
        return favorite.findIndex(producto => producto.id === idProd); 
    }

    useEffect(() => {
        setFavoriteSize(favorite.length);
    }, [favorite])
    
    return ( 
        <>
            <FavoriteContext.Provider value={{favorite, addItemFavorite, itemToCart, removeProduct, clear, favoriteSize}}>
                {children}
            </FavoriteContext.Provider>
        </>
    )

}

export default FavoriteContextProvider;