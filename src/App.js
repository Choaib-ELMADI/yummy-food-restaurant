import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Navbar, Header, About, Gallery, FindUs, Footer } from './container/index';



const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Gallery />
        <FindUs />
        <Footer />
        {/* <SearchBar /> */}
        <Toaster />
    </div>
  );
}

export default App;