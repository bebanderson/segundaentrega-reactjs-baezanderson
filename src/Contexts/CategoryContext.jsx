import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"

export const CategoryContext = createContext();

function CategoryContextProvider ( {children} ) {

    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "categorys");
        getDocs(itemsCollection).then((snapshot) => {
            setCategorys(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
    }, []);

    return ( 
        <>
            <CategoryContext.Provider value={{categorys}}>
                {children}
            </CategoryContext.Provider>
        </>
    )
}

export default CategoryContextProvider;