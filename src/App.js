import React from 'react';
import './style.css';
import Navigations from './navigation';
import Header from './header';
import Card from './card';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function App() {
  return (
    <div>
      {/* <!-- Navigation--> */}
      <Navigations />
      {/* <!-- Header--> */}
      <Header />
      {/* <!-- Section--> */}
      <Card />
      {/* <!-- Footer--> */}
      <Footer />
    </div>
  );
}
