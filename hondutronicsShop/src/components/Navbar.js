import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.png';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render () {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-white navbar-light px-sm-5">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_iconCreative Commons (Attribution 3.0 Unported);https://www.iconfinder.com/Makoto_msk */}
                <Link to="/">
                    <ImgContainer src={logo} alt="store" className="navbar-brand"></ImgContainer>
                    <a href="https://www.hondutronics.com" className="nav-home">Hondutronics</a>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Productos</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer> <span className="mr-2"> <i className="fas fa-cart-plus"/> </span> Carretilla</ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const ImgContainer = styled.img`
height: 50px;
`;

const NavWrapper = styled.nav`
background: #FFF;
.nav-home{
    color: var(--mainDark);
    font-family: 'Noto Sans', sans-serif;
    font-weight: bold;
}
.nav-link{
    color: var(--mainDark) !important;
    font.size: 1.3rem;
}
`;