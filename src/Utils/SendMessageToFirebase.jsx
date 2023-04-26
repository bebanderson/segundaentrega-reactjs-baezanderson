import { addDoc, collection, getFirestore } from "firebase/firestore";

function SendMessageToFirebase(item){

    const db = getFirestore();
    const newInput = collection(db, "messages");
    addDoc(newInput, item).then(({id}) => console.log(id));
    console.log(item);
    
}

export default SendMessageToFirebase;