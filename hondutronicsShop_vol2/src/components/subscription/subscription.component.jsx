import React from 'react';
import './subscription.styles.scss';


const Subscription = () => (
    <div id="registrarse" class="call-action-primary py-80 ">
        <div class="container ">
            <div class="row ">
                <div class="col-sm-12 ">
                    <div class="call-action-primary-content text-center ">
                        <h1 class="text-white mb-3 call-action-head ">¿Quieres estár pendiente de actualizaciones y nuevos productos?</h1>
                        <p class="text-white call-action-text ">Déjanos tu correo electrónico y te notificaremos de nuestros nuevos productos, servicios, eventos de centro de experiencia en vivo y boletines informativos</p>
                        <form class="mt-5 ">
                            <div class="input-group call-action-primary-search ">
                                <input class="form-control call-action-primary-input " placeholder="Correo " aria-label="Recipient 's username"
                                    aria-describedby="basic-addon2" type="text" />
                                <div class="input-group-append">
                                    <button type="submit" class="call-action-primary-btn ">Suscribirse</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Subscription;