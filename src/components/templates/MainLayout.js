import React from 'react';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;