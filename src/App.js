
//Components
import Header from "./components/Header";
import Balance from "./components/Balance";
import InComeExpenses from "./components/InComeExpenses";
import TransaCtionList from "./components/TransaCtionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalContext";


function App() {
  return (
  <GlobalProvider>
    <Header />
    <Balance />
    <InComeExpenses />
    <TransaCtionList />
    <AddTransaction />

  </GlobalProvider>
   
   
  );
}

export default App;
