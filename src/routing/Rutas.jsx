import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Articles } from "../components/pages/Articles";
import { Header } from "../components/layout/Header";
import { Nav } from "../components/layout/Nav";
import { Sidebar } from "../components/layout/Sidebar";
import { Footer } from "../components/layout/Footer";
import { Create } from "../components/pages/Create";
import { Search } from "../components/pages/Search";

export const Rutas = () => {

  return (
    <BrowserRouter>
    {/* LAYOUT */}
    <Header />
    <Nav />
    {/* CONTENIDO CENTRAL */}
    <section id="content" className="content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/articles" element={<Articles/>} />
            <Route path="/create-articles" element={<Create/>} />
            <Route path="/search/:busqueda" element={<Search/>} />

            <Route path="*" element={
              <div>
                <h1>Esta página no extiste</h1>
              </div>
            }/>
        </Routes>
    </section>

    <Sidebar />
    <Footer />

    </BrowserRouter>
  )
}
