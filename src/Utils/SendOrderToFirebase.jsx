import { addDoc, collection, getFirestore } from "firebase/firestore";

function SendOrderToFirebase(item){

    const db = getFirestore();

    const newInput = collection(db, "orders");
    addDoc(newInput, item).then(({id}) => {
        window.location.replace(`/success/${id}`);
    });

}

export default SendOrderToFirebase;




