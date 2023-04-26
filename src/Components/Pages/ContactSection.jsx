import React, { useEffect, useState } from "react";
import { Form, Row, Col, InputGroup, Button} from "react-bootstrap";
import SendMessageToFirebase from "../../Utils/SendMessageToFirebase";

function ContactSection(){

    const [ name , setName ] = useState("");
    const [ lastname , setLastname ] = useState("");
    const [ email , setEmail ] = useState("");
    const [ text , setText ] = useState("");
    const [ message , setMensaje ]= useState({});

   useEffect(() =>{
        setMensaje ({name, lastname,  email, text});
    },[name,lastname,email,text]);

    const handleSubmit = (event) => {
        if (name !== "" && lastname !== "" && email !=="" && text !== ""){
            SendMessageToFirebase(message);
        }
    }

    return (
        <>
            <h2>Contacto</h2>
            <h3>Dejanos tu mensaje y te responderemos a la brevedad.</h3>
            <Form style={{width: "60%", margin: "auto", marginTop: "20px"}}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" sm="1" controlId="validationName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nombre"
                            value={name}
                            onChange={(e) => setName(e.currentTarget.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" sm="1" controlId="validationLastname">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Apellido"
                            value={lastname}
                            onChange={(e) => setLastname(e.currentTarget.value)}
                        />
                    </Form.Group>
                </Row>
                <Form.Group md="3" controlId="validationEmail">
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        aria-describedby="inputGroupPrepend"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationMessage">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                        required
                        type="textarea"
                        rows={3}
                        placeholder="Mensaje"
                        value={text}
                        onChange={(e) => setText(e.currentTarget.value)}
                    />
                </Form.Group>
                <Button type="button" onClick={handleSubmit}>Verificar formulario</Button>
            </Form>
        </>
    )
}

export default ContactSection; 