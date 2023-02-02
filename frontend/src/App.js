import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/layout/Home/Home";
import Contact from "./components/layout/Contact/Contact.js";
import About from "./components/layout/About/About";
import NotFound from "./components/layout/Not Found/NotFound.js";

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Fragment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Fragment>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;