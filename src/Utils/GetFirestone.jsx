import { useEffect} from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"


function GetFirestone(setProduct){

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Products");
        getDocs(itemsCollection).then((snapshot) => {
            setProduct(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
    }, []);

}

export default GetFirestone;