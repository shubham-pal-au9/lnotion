import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
  useNavigate,
} from "react-router-dom";
import Login from "../src/components/home/login";
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="AppOne">
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
