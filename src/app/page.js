import React from 'react';
import NavBar from './components/Meni';
import Domov from './components/novice/Domov';
import Header from './components/Glava';
import Stolp from './components/stolp/Stolp';
import Zusem from './components/zusem/Zusem';
import Poti from './components/poti/Poti';
import Noga from './components/noga/Noga';
import Clanstvo from './components/clanstvo/Clanstvo';
import Galerija from './components/Galerija';


const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div className='px-3'>
        <Domov />
        <Stolp />
        <Poti />
        <Zusem />
        <Clanstvo />
        <Galerija />
      </div>
      <Noga />
    </div>
  );
};

export default App;
