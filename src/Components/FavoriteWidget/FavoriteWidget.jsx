import React, { useEffect, useState, useContext } from "react";
import { FavoriteContext } from "../../Contexts/FavoriteContext";
import { Button, Offcanvas } from "react-bootstrap";

function FavoriteWidget(props){  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [emptyFavoriteList, setEmptyFavoriteList] = useState(true);

    const { favoriteSize } = useContext(FavoriteContext);
    const { clear } = useContext(FavoriteContext)

    useEffect(() => {
        if(favoriteSize === 0){
            setEmptyFavoriteList(true);
        } else {
            setEmptyFavoriteList(false);
        }
    }, [favoriteSize])

    return ( 
        <>
            <Button variant="dark" onClick={handleShow}>
            <img className='menuIcon' src="https://img.icons8.com/pastel-glyph/40/000000/hearts---v1.png" alt="Icono de Favoritos"/>
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Mis Favoritos</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    { emptyFavoriteList ? (
                            <>
                                <p>No hay productos en tu lista de favoritos.</p>
                            </>
                        ) : (
                            <>
                                {props.productsFavorites}
                            </>
                        )
                    }
                </Offcanvas.Body>
                { emptyFavoriteList ? (
                        <>
                        </>
                    ) : (
                        <>
                            <Button 
                                variant="primary" 
                                onClick={() => clear()} >
                                    Vaciar Favoritos
                            </Button>
                        </>
                    )
                }
            </Offcanvas>
        </>
    )
}

export default FavoriteWidget;