import React, { useEffect, useState } from "react";
import "./CashMateHero.css";
import AOS from "aos";
import "aos/dist/aos.css";

function CashMateHero() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="home">
      <nav data-aos="fade-right">
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`nav-links ${isOpen ? "show" : ""}`}>
          <li>
            <a href="#sobre">Saiba Mais</a>
          </li>
          <li>
            <a href="#tempo-economizado">Economize Tempo</a>
          </li>
          <li>
            <a href="#detalhes">Explore os Detalhes</a>
          </li>
        </ul>
      </nav>
      <main>
        <div className="container-center" data-aos="fade-up"></div>
        <p className="date" data-aos="fade-up">
          Agosto, 16, 2024
        </p>
        <h1 data-aos="fade-up">Introduzindo CashMate</h1>
        <a
          href="https://caiorossi00.github.io/CashMate/"
          className="botao"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
        >
          Experimente
        </a>
        <div className="scroll-div" data-aos="fade-down"></div>
        <p className="scroll-down">Scroll Down</p>
        <i className="fa-solid fa-arrow-down"></i>
      </main>
    </header>
  );
}

export default CashMateHero;
