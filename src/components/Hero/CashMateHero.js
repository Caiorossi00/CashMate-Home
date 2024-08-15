import React, { useEffect } from "react";
import "./CashMateHero.css";
import AOS from "aos";
import "aos/dist/aos.css";

function CashMateHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <header id="home">
      <nav data-aos="fade-right">
        <ul>
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
          Junho, 13, 2024
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
        <p className="scroll-down" data-aos="fade-down">
          Scroll Down
        </p>
        <i className="fa-solid fa-arrow-down"></i>
      </main>
    </header>
  );
}

export default CashMateHero;
