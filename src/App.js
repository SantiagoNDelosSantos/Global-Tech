import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from  './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/NotificationService';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

const App = () => {

  return (

    <div className="App">

        <BrowserRouter>

          <NotificationProvider>

            <CartProvider>

              <Navbar/>

              <Routes>

                <Route path='/' element={<ItemListContainer greeting={'Bienvenid@ a GlobalTech.'}/>}/>

                <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos filtrados."}/>}/>
                
                <Route path='/item/:productId' element={<ItemDetailContainer/>} />

                <Route path='/cart' element={<Cart/>}/> 

                <Route path='/checkout' element={<Checkout/>}/>

              </Routes>

            </CartProvider>
          
            </NotificationProvider>

        </BrowserRouter>

    </div>

  );

}

export default App;