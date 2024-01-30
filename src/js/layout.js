import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Characters } from "./views/characters";
import { SingleCharacter } from "./views/singleCharacter";
import { Planets } from "./views/planets";
import { SinglePlanet } from "./views/singlePlanet";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Stars } from "./component/stars";


const Layout = () => {
  
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Stars />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/character/:id" element={<SingleCharacter />} />
          <Route path="/planet/:id" element={<SinglePlanet />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
