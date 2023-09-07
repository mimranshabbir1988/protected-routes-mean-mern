import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Register from './components/Register';
import UsersData from './components/UsersData';
import Login from './components/Login';
import UpdateComp from './components/UpdateComp';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
            <Route element={<ProtectedRoute />}>
                  <Route path='/' element={<h1>Home Page Detail</h1>} />                  
                  <Route path='/users' element={<h1>Users Page</h1>} />          
                  <Route path='/login' element={<Login />} />
                  <Route path='/products' element={<h1>Products Page</h1>} />
                  <Route path='/usersdetail' element={<UsersData />} />
                  <Route path='/editform/:id' element={<UpdateComp />} />

            </Route>
            
            <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
