import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";




function App() {







  return (


    <main className=" overflow-x-hidden">

    <Routes>

      <Route path="/" element={<Home/>}/>
</Routes>


</main>

  );
};

export default App;
