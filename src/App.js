import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from  './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';

const App = () => {

  return (

    <div className="App">

        <BrowserRouter>

          <CartProvider>

            <Navbar/>

            <Routes>

              <Route path='/' element={<ItemListContainer greeting={'Bienvenid@ a GlobalTech.'}/>}/>

              <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos filtrados."}/>}/>
              
              <Route path='/item/:productId' element={<ItemDetailContainer/>} />

              <Route path='/cart' element={<h1>CART</h1>}/> 

              <Route path='/checkout' element={<h2>checkout</h2>}/>

            </Routes>

          </CartProvider>

        </BrowserRouter>

    </div>

  );

}

export default App;