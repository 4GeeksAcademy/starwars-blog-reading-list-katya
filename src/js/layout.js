import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Characters } from "./views/characters";
import { Single } from "./views/single";
import { Planets } from "./views/planets";
import { Favorites } from "./views/favorites";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Stars } from "./component/stars";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Stars />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/single/:theid" element={<Single />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
