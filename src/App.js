import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import axios from 'axios';
import Signup1 from './Components/Signup1';
import Login1 from './Components/Login1';
import Homepage from './Components/Homepage';
import Welcome from './Components/Welcome';
import Navbarpre from './Components/Navbars/Navbarpre';
import TransferMoney from './Components/TranserMoney';
import { Provider } from 'react-redux';
import store,{persistor} from './Store/Store';
import Reacharge from './Components/Recharge'
import Transactionhistory from './Components/Transactionhistory';
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
  <BrowserRouter>
  <Routes>
     <Route path="/" element={<Welcome />}/> 
    <Route path="/Signup1" element={<Signup1 />}/>
    <Route path="/Login1" element={<Login1 />}/>
    <Route path="/Homepage" element={<Homepage />}/>
    <Route path="/Welcome" element={<Welcome />}/>
    <Route path="/Navbarpre" element={<Navbarpre />}/>
    <Route path="/TransferMoney" element={<TransferMoney />}/>
    <Route path="/Recharge" element={<Reacharge />}/>
    <Route path="/Transactionhistory" element={<Transactionhistory />}/>
    


  </Routes>
  
  </BrowserRouter>
  </PersistGate>
  </Provider>
);}

export default App;
