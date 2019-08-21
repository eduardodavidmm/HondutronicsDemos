import React from 'react';
import Header from '../../components/header/header.component';
import Pills from '../../components/pills/pills.component';
import Media from '../../components/media/media.component';
import Features from '../../components/features/features.component';
import Directory from '../../components/directory/directory.component';
import Testimonials from '../../components/testimonials/testimonials.component';
import PriceTables from '../../components/price-tables/price-tables.component';
import Partners from '../../components/partners/partners.component';
import Subscription from '../../components/subscription/subscription.component';
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Header />
    <Pills />
    <Media />
    <Directory />
    <Features />
    <PriceTables/>
    <Testimonials />
    <Partners/>
    <Subscription/>
  </div>
);

export default HomePage;
