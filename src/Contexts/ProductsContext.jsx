import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"

export const ProductsContext = createContext();

function ProductsContextProvider ( {children} ) {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Products");
        getDocs(itemsCollection).then((snapshot) => {
            setProduct(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
    }, []);

    function addStock(idProd, cant){
        let indexArr = isInList(idProd); 
        product[indexArr].stock += cant; 
    }

    function removeStock(idProd, cant){
        let indexArr = isInList(idProd); 
        product[indexArr].stock -= cant; 
    }

    function isInList (idProd) {
        return product.findIndex(producto => producto.id === idProd); 
    }

    return ( 
        <>
            <ProductsContext.Provider value={{product, addStock, removeStock}}>
                {children}
            </ProductsContext.Provider>
        </>
    )
}

export default ProductsContextProvider;