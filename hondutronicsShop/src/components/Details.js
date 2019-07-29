import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* title end */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="producto" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h2>Modelo: {title}</h2>
                                    <h4 className="text-capitalize mt-3 mb-2">Fabricante: <span className="text-uppercase">{company}</span></h4>
                                    <h4> <strong>Precio: ${price}</strong> </h4>
                                    <p className="text-justify lead">{info}</p>
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                Volver a Catálogo
                                            </ButtonContainer>
                                            <ButtonContainer cart disabled={inCart?true:false} onClick={() => {value.addToCart(id); value.openModal(id);}}>
                                                {inCart ? "En Carretilla" : "Añadir a Carretilla"}
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
