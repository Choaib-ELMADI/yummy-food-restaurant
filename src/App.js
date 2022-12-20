import React from 'react';

import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import MenuItems from './components/MenuItems';

const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <SearchBar />
    </div>
  );
}

export default App;