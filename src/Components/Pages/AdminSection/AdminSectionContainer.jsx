import React, { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"
import MessageCard from "../../MessageCard";
import AdminSection from "./AdminSection";
import SaleCard from "../../SaleCard";

function AdminSectionContainer(props){

    const [ messageList, setMessageList ] = useState([]);
    const [ ordersList, setOrdersList ] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "orders");
        getDocs(itemsCollection).then((snapshot) => {
            setOrdersList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
        const itemsCollection2 = collection(db, "messages");
        getDocs(itemsCollection2).then((snapshot) => {
            setMessageList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
    }, []);

    let messageItem = messageList.map((item) => <MessageCard key={item.id} item={item}/>);
    let orderItem = ordersList.map((item) => <SaleCard key={item.id} item={item}/>)

    return(
        <>
            <AdminSection messageItem={messageItem} orderItem={orderItem}/>
        </>
    )
}

export default AdminSectionContainer; 