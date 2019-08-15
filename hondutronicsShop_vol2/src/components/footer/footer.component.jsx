import React from 'react';
import './footer.styles.scss';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <h4 className="footer-head">Hondutronics</h4>
                    <ul className="footer-links">
                        <li>
                            <a href="#" title="Link">Paquetes</a>
                        </li>
                        <li>
                            <a href="#" title="Link">Terminos y Condiciones</a>
                        </li>
                        <li>
                            <a href="#" title="Link">Politica de Privacidad</a>
                        </li>
                        <li>
                            <a href="#" title="Link">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <h4 className="footer-head">Empresa</h4>
                    <ul className="footer-links">
                        <li>
                            <a href="#" title="Link">Sobre Nosotros</a>
                        </li>
                        <li>
                            <a href="#" title="Link">Preguntas Frecuentes</a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <h4 className="footer-head">Contactanos</h4>
                    <ul className="footer-links">
                        <li>
                            <a href="#" title="Link">hondutronics.sac@gmail.com</a>
                        </li>
                        <li>
                            <a href="#" title="Link">www.hondutronics.com</a>
                        </li>
                    </ul>
                    <h4 className="footer-head">Siguenos</h4>
                    <ul className="footer-share-it">
                        <li className="shate-it-item">
                            <a target="_blank" href="https://es-la.facebook.com/Hondutronics/" className="btn btn-share-sm bg-facebook">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li className="shate-it-item">
                            <a href="#" className="btn btn-share-sm bg-twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="shate-it-item">
                            <a target="_blank" href="https://www.instagram.com/hondutronics/?hl=es-la" className="btn btn-share-sm bg-instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright-bar clearfix">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="mt-0 mb-0 text-primary">Hondutronics</h1>
                    </div>
                    <div className="col-lg-6">
                        <div className="copy-text">© 2019 Hondutronics. Todos los derechos reservados.</div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

);

export default Footer;