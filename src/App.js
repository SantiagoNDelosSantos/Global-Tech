import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">

        <Navbar/>

        {/*<Counter/>*/}

        <ItemListContainer greeting={"Bienvenidos a GlobalTech."}/>
    
    </div>
  );
}

export default App;
