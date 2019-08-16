import React from 'react';
import Header from '../../components/header/header.component';
import Features from '../../components/features/features.component';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Header />
    <Directory />
    <Features />
  </div>
);

export default HomePage;