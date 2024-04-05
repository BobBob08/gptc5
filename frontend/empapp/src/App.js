import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ViewEmployee from './Components/ViewEmployee';
import AddEmployee from './Components/AddEmployee';

function App() {
  return (
    <div className="App">
      <Navbar/>
   <Routes>
     <Route path='/' element={<ViewEmployee/>}/>
     <Route path='/add' element={<AddEmployee/>} />
   </Routes>

    </div>
  );
}

export default App;
