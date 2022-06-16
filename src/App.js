import './App.css';

//Components
import Stor from './components/Stor';
//Context
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <CartContextProvider>
      <Stor />
    </CartContextProvider>
  );
}

export default App;
