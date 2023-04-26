import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
import SendOrderToFirebase from "../Utils/SendOrderToFirebase";
import FormInput from "./FormInput";

function Cart(){

  const { carrito } = useContext(CartContext);
  const { compraTotal } = useContext(CartContext);
  const { emptyBag } = useContext(CartContext);
  const [productsCart, setProductsCart] = useState([]);

  const [ name , setName ] = useState("");
  const [ lastname , setLastname ] = useState("");
  const [ email , setEmail ] = useState("");
  const [ document , setDocument ] = useState("");
  const [ payment , setPayment ] = useState("");
  const [ shipping , setShipping ] = useState("");
  const [ adress , setAdress ] = useState("");
  const [ country , setCountry ] = useState("");
  const [ city , setCity ] = useState("");
  const [ zip , setZip ] = useState("");
  const [ order , setOrder ]= useState([]);
  
  useEffect(() =>{
    setOrder ({Usuario:{name, lastname, document, email, country, city, zip}, payment, shipping, Orden:carrito, Total:compraTotal, PaymentState: "Pendiente", ShippingState: "Pendiente", StockState: "Corroborar"});
  },[name,lastname,email,document, payment, shipping, adress, country, city,zip, carrito, compraTotal]);


  const handleSubmit = (event) => {
    if (name !== "" && lastname !== "" && email !=="" && document !== "" && payment !== "" && shipping !== ""){
        SendOrderToFirebase(order); 
    }
  }
  
  useEffect(() => {
    setProductsCart(carrito.map((item) => 
      <CartItem item={item} key={item.id}/>)
    ) 
  }, [carrito])

  let inputList=[
    {name:name, title:"Nombre", type:"text", details:"Ingresar nombre"},
    {name:lastname, title:"Apellido", type:"text", details:"Ingresar apellido"},
    {name:email, title:"Email", type:"email", details:"Ingresar email"},
    {name:document, title:"Número de documento", type:"number", details:"Ingresar DNI"},
    {name:adress, title:"Dirrección de entrega o de facturación", type:"text", details:"Los Patitos 123"},
    {name:country, title:"País", type:"text", details:"Argentina"},
    {name:city, title:"Ciudad", type:"text", details:"Buenos Aires"},
    {name:zip, title:"Codigo Postal", type:"number", details:"1234"}
  ];

  return (
      <>
        { emptyBag ? (
          <>
              <p>Ups! No puede continuar con la compra ya que no tiene productos en el carrito. </p>
              <Link to="/productos">Ver nuestros productos</Link>
          </>
        ) : (
        <>
          <h2>Mi carrito</h2>
          <Row className="justify-content-md-center">
            <Col md="4" lg="3">
              <h3>Mis productos</h3>
              {productsCart}
              Total a abonar: ${compraTotal}
            </Col>
            <Col md={{ span: 5, offset: 1 }}>
              <h3>Mis datos</h3>
              <Form>
                <Row className="mb-3">
                  <FormInput item={inputList[0]} operation={(e) => setName(e.currentTarget.value)}/>
                  <FormInput item={inputList[1]} operation={(e) => setLastname(e.currentTarget.value)}/>
                </Row>

                <Row className="mb-3">
                  <FormInput item={inputList[2]} operation={(e) => setEmail(e.currentTarget.value)}/>
                  <FormInput item={inputList[3]} operation={(e) => setDocument(e.currentTarget.value)}/>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPayment">
                    <Form.Label>Medio de pago</Form.Label>
                    <Form.Select 
                      required
                      value={payment}
                      onChange={(e) => setPayment(e.currentTarget.value)}
                    >
                      <option value="">Seleccionar opción</option>
                      <option value="Efectivo">Efectivo</option>
                      <option value="Transferencia bancaria">Transferencia bancaria</option>
                      <option value="Mercado Pago">Mercado Pago</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridShipping">
                    <Form.Label>Medio de envío</Form.Label>
                    <Form.Select 
                      required
                      value={shipping}
                      onChange={(e) => setShipping(e.currentTarget.value)}
                    >
                      <option value="">Seleccionar opción</option>
                      <option value="Retiro por sucursal">Retiro por sucursal</option>
                      <option value="Envio a domicilio">Envio a domicilio</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <FormInput item={inputList[4]} operation={(e) => setAdress(e.currentTarget.value)}/>

                <Row className="mb-3">
                  <FormInput item={inputList[5]} operation={(e) => setCountry(e.currentTarget.value)}/>
                  <FormInput item={inputList[6]} operation={(e) => setCity(e.currentTarget.value)}/>
                  <FormInput item={inputList[7]} operation={(e) => setZip(e.currentTarget.value)}/>
                </Row>

                <Button variant="primary" type="button" onClick={() => {handleSubmit();}}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          </>
        )
        }
      </>
    )
}

export default Cart;