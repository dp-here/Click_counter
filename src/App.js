import './App.css';
import React from 'react';
import Click from './myComponents/Click';
import "../src/css/styles.css";
import About from "./myComponents/About";
import Contacts from "./myComponents/Contacts";
import Front from "./myComponents/Front"
import Nav from "./myComponents/Nav";
import {  Routes, Route } from "react-router-dom";
import Footer from './myComponents/Footer';
export default function App() {
  return (

    <div className="App">
      <Nav />
      <Routes>
      <Route path='/' element={<Front />}  />
      <Route path='/worldwide' element={<Click />}  />
      <Route path="/about" element={<About />}  />
      <Route path="/contacts" element={<Contacts />}  />
      </Routes>
      <Footer />
    </div>
  );
}

