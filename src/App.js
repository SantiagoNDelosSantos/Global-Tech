import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  
  {/* 
    const [view, setView] =useState(`Manzanas`)
  */}

  return (
    <div className="App">

        <Navbar/>

        {/*<Counter/>*/}
        
        {/*

        <div>  
          <button onClick={() => setView(`Manzanas`)} className="Botones">Manzanas</button>
          <button onClick={() => setView(`Naranjas`)} className="Botones">Naranjas</button>
          <button onClick={() => setView(`Ananás`)} className="Botones">Ananás</button>
        </div>
        
        {view === `Manzanas` && <Counter title="Manzanas" min={5} max={15}/>}
        {view === `Naranjas` && <Counter title="Naranjas" min={10} max={20}/>}
        {view === `Ananás` && <Counter title="Ananás" min={10} max={20}/>}
        
        */}

        <ItemListContainer greeting={"Bienvenido a GlobalTech."}/>
    
      <img src='https://i.ibb.co/94TXT95/Inicio.png' />

    </div>
  );
}

export default App;
