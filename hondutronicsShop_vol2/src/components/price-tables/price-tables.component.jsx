import React from 'react';
import CustomButton from '../custom-button/custom-button-component';
import './price-tables.styles.scss';


const PriceTables = () => (
    <div class="py-80 price-table" id="pricing">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="section-head text-center">
                        <h1 class="title">El mejor paquete para tí</h1>
                        <p>Encuentra el paquete que más se acomode a tus necesidades.</p>
                    </div>
                    <div class="tab-content" id="pills-tabContent2">
                        <div class="tab-pane fade show active" id="pills-home2" role="tabpanel" aria-labelledby="pills-home-tab2">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="cs-price-card mt-5 ">
                                        <div class="cs-price-card-info btn-grad">
                                            <h5>Tu Casa</h5>
                                            <h1>
                                                <sup>Lps.</sup>6,125.00
                                            </h1>
                                        </div>
                                        <div class="cs-price-card-content">
                                            <ul class="cs-price-card-features">
                                                <li>4 Focos Inteligentes</li>
                                                <li>2 Tomacorrientes Inteligentes</li>
                                                <li>1 Caja de control IR</li>
                                                <li>1 Google Home Mini</li>
                                                <li>Aplicación Móvil</li>
                                                <li>Atención personalizada</li>
                                            </ul>
                                            <div>
                                                <CustomButton>Comprar</CustomButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="cs-price-card mt-5">
                                        <div class="cs-price-card-info">
                                            <h5>Tu Cuarto</h5>
                                            <h1>
                                                <sup>Lps.</sup>1,230.00
                                            </h1>
                                        </div>
                                        <div class="cs-price-card-content">
                                            <ul class="cs-price-card-features">
                                                <li>1 Foco Inteligente</li>
                                                <li>1 Tomacorriente Inteligente</li>
                                                <li>Aplicación móvil</li>
                                                <li>Atención personalizada</li>
                                            </ul>
                                            <div>
                                                <CustomButton>Comprar</CustomButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="cs-price-card mt-5">
                                        <div class="cs-price-card-info">
                                            <h5>Tu Negocio</h5>
                                            <h1>
                                                <sup>Lps.</sup>5,325.00
                                            </h1>
                                        </div>
                                        <div class="cs-price-card-content">
                                            <ul class="cs-price-card-features">
                                                <li>3 Focos Inteligentes</li>
                                                <li>2 Tomacorrientes Inteligentes</li>
                                                <li>1 Cámara de seguridad</li>
                                                <li>1 Sensor de movimiento</li>
                                                <li>Aplicación Móvil</li>
                                                <li>Atención Personalizada</li>
                                            </ul>
                                            <div>
                                            <CustomButton>Comprar</CustomButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab2">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default PriceTables;
