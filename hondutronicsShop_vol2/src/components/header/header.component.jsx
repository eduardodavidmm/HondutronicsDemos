import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className="container">
        <nav className="navbar navbar-expand-sm bg-white navbar-light px-sm-5 fixed-top">
            <Link to="/">
                <Logo className="navbar-brand logo" />
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto options">
                    <li className="nav-item option">
                        <Link to="/shop">Tienda</Link>
                    </li>
                    <li className="nav-item option">
                        {currentUser ? (<div className="option" onClick={() => auth.signOut()}>Cerrar Sesión</div>) : (<Link className="option" to="/signin">Iniciar Sesión</Link>)}
                    </li>
                    <li className="nav-item">
                        <CartIcon class="icon" />
                    </li>
                </ul>
            </div>
            {
                hidden ? null :
                    <CartDropdown />
            }
        </nav>
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);
