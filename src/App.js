import React from "react";
import "./App.css";
import {
  Sidebar,
  Home,
  Portfolio,
  Resume,
  Services,
  Testimonials,
  Blog,
  Contact,
  About,
} from "./components";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
