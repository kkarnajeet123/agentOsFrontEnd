import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import StatementPoints from './components/Statements/StatementPoints'
import CustomerPoint from './components/Statements/CustomerPoints'
import Home from './components/Home'


function App() {
 

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/allCustomerPoints" element ={<StatementPoints/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/customerPoint" element={<CustomerPoint/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
