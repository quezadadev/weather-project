import React from 'react';
import { Routes,Link, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  
  return (
    <div>
      <Link to="/">
        <Header/>
      </Link>
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/cards/:id" element={<Card />} /> */}
      </Routes>
    </div>
  );
}

export default App;
