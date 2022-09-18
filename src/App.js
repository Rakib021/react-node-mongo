import './App.css';
import { Route, Routes } from 'react-router';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/home" element={<Home></Home>}></Route>
        <Route path="/add/user" element={<AddUser></AddUser>}></Route>

      </Routes>
    </div>
  );
}

export default App;
