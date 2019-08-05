import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"></Logo>
        </Link>

        <div className="options">
            <Link className="option" to="/shop">Tienda</Link>
            <Link className="option" to="/shop">Contáctanos</Link>
            { currentUser ? (<div className="option" onClick={() => auth.signOut()}>Cerrar Sesión</div>) : (<Link className="option" to="/signin">Iniciar Sesión</Link>) }
        </div>
    </div>
)

export default Header;