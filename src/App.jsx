import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/navbar';
import SideBar from './components/Sidebar/sidebar';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "http://localhost:5000"
  return (
    <div>
       <ToastContainer />
       <NavBar />
       <hr />
       <div className="app-content">
         <SideBar />
         <Routes>
            <Route path="/add" element={<Add url={url} />} />
            <Route path="/list" element={<List url={url} />} />
            <Route path="/orders" element={<Orders url={url} />} />
         </Routes>
       </div>
    </div>
  )
}

export default App;
