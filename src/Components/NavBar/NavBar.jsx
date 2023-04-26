import React, { useContext, useEffect, useState } from 'react';
import "./NavBar.css";
import { CategoryContext } from '../../Contexts/CategoryContext';
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidgetContainer from '../CartWidget/CartWidgetContainer';
import FavoriteWidgetContainer from '../FavoriteWidget/FavoriteWidgetContainer';


function NavBar(){

    const { categorys } = useContext(CategoryContext);

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "menu");
        getDocs(itemsCollection).then((snapshot) => {
            setMenu(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
    }, []);

    let menuList = menu.map((item) => 
    <Link to={`${item.url}`} key={item.id}>{item.title}</Link>).concat(categorys.map((item) => 
    <Link to={`${item.url}`} key={item.id}>{item.title}</Link>));

    return <>
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand className="justify-content-center" > Dulces Delicias</Navbar.Brand>
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" sticky="top">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {menuList}
                    </Nav>
                    <FavoriteWidgetContainer /> 
                    <CartWidgetContainer/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default NavBar; 