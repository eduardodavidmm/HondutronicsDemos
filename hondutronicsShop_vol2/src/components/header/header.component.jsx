import React from 'react';
import CustomButton from '../custom-button/custom-button-component';
import { ReactComponent as Image } from '../../assets/casa2.svg';
import './header.styles.scss';

const Header = () => (
    <header className="header fixed-top-added">
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="hero-content">
                        <h1 className="title">La casa inteligente a tu alcance</h1>
                        <p className="parragraph mt-3"> La automatización de tu espacio al alcance de tu mano. Ofrecemos paquetes de
                          servicios personalizados y ajustados
                          a tus gustos y necesidades.
                        </p>
                        <ul className="pair-btns-list">
                            <CustomButton>Cotizar</CustomButton>
                            <CustomButton>Demo</CustomButton>
                        </ul>
                    </div>
                </div>
                <div className="col-md-5 image">
                    <Image />
                </div>
            </div>
        </div>
    </header>
);

export default Header;