import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './pages/newnavbar';
import Table from "./pages/table";
import Details from './pages/details';
import DetailsAdmin from './pages/details_admin';
import Logs from "./pages/logs"
import Admin from "./pages/admin"
import Signup from "./pages/signup"
import About from "./pages/about"



import { BrowserRouter, Routes, Route } from "react-router-dom";






export default function App1() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          
          <Route path="/" element={<Table />} />
          <Route path="/details" element={<Details />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/details_admin" element={<DetailsAdmin />} />
          
          
          
          
          
          

          
   
          
          
          
      </Routes>
      
    </BrowserRouter>
      
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App1 />);
