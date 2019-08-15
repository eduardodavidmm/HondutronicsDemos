import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_bWXzMRnIJUSUNrfbkghb2bBd00YwugMeJm';

    const onToken = token => {
        alert('Compra Realizada');
    }

    return (
       <StripeCheckout
       label = 'Pagar'
       name = 'Hondutronics Shop'
       billingAddress
       shippingAddress
       image = 'https://svgshare.com/i/EV9.svg'
       description = {`Tu pago total es: $${price} `}
       amount = {priceForStripe}
       panelLabel = 'Pagar'
       token = {onToken}
       stripeKey = {publishableKey}
       /> 
    );
};

export default StripeCheckoutButton;