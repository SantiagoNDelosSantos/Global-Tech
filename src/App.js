import './App.css';
import Navbar from './components/Navbar/Navbar';

import Counter from './components/Counter/Counter';
import { useState } from 'react';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from  './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MercadoLibre from './components/MercadoLibre/MercadoLibre';
import Item from './components/Item/Item';


function App() {
  
  {/* 
    const [view, setView] =useState(`Manzanas`)
  */}

  return (
    <div className="App">

      <BrowserRouter>
       
        <Navbar/>

        <Routes>

          <Route path='/' element={<ItemListContainer greeting={"Bienvenid@ a GlobalTech."}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos filtrados."}/>}/>
          <Route path='/item/:productId' element={<ItemDetailContainer/>} />
          
        </Routes>

        {/*
        
        <Counter/>

        <div>  
          <button onClick={() => setView(`Manzanas`)} className="Botones">Manzanas</button>
          <button onClick={() => setView(`Naranjas`)} className="Botones">Naranjas</button>
          <button onClick={() => setView(`Ananás`)} className="Botones">Ananás</button>
        </div>
        
        {view === `Manzanas` && <Counter title="Manzanas" min={5} max={15}/>}
        {view === `Naranjas` && <Counter title="Naranjas" min={10} max={20}/>}
        {view === `Ananás` && <Counter title="Ananás" min={10} max={20}/>}
        
        <MercadoLibre/>

        */}

      </BrowserRouter>

       

    </div>
  );
}

export default App;
