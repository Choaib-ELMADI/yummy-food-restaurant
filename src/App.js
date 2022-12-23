import React from 'react';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';



const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <SearchBar />
        <Toaster />
    </div>
  );
}

export default App;