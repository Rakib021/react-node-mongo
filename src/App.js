import './App.css';
import { Route, Routes } from 'react-router';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';
import Update from './components/update/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/home" element={<Home></Home>}></Route>
        <Route path ="/" element={<Home></Home>}></Route>
        <Route path="/add/user" element={<AddUser></AddUser>}></Route>
        <Route path ="/update/:id" element={<Update></Update>}></Route>

      </Routes>
    </div>
  );
}

export default App;
