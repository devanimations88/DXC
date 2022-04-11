import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./Component/Header";
import Footer from "./Component/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";

import "./Styles/main.scss";

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Navigate replace to="/home" />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;