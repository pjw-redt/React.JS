import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Main from "./Main";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Main/" element={<Main/>}/>
        <Route path="/About/" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App;

//그림자랑 자기소개 채우기