import React from 'react';
import Header from '../../components/header/header.component';
import Features from '../../components/features/features.component';
import Directory from '../../components/directory/directory.component';
import PriceTables from '../../components/price-tables/price-tables.component';
import Partners from '../../components/partners/partners.component';
import Subscription from '../../components/subscription/subscription.component';
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Header />
    <Directory />
    <Features />
    <PriceTables/>
    <Partners/>
    <Subscription/>
  </div>
);

export default HomePage;