import React from 'react';
import Home from './Home/Home';
import About_page from './About_page/About_page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav/Nav';
import Contact from './Contact/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="about_page" element={<About_page></About_page>} />
      </Routes>
      <Contact />
    </BrowserRouter>
  );
}

export default App;