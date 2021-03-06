import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles.js';
import Typography from '../styles/typography';

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
