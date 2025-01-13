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
        <ul className="nav-links">
          <div id="logo">
            <a href="https://instagram.com/caiorossi.dev">
              Developed by <span>@Caiorossi.dev</span>
            </a>
          </div>
          <div className="nav-anchors">
            <li>
              <a href="#tempo-economizado">Economize Tempo</a>
            </li>
            <li>
              <a href="#detalhes">Explore os Detalhes</a>
            </li>
            <li>
              <button id="nav-button">Experimente</button>
            </li>
          </div>
        </ul>
      </nav>
      <main>
        {/* <p className="date" data-aos="fade-up">
          Agosto, 16, 2024
        </p> */}
        {/* <h1 data-aos="fade-up">Introduzindo CashMate</h1> */}

        <div className="container-main">
          <a
            href="https://caiorossi00.github.io/CashMate/"
            className="botao"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
          >
            Experimente
          </a>
          <div className="scroll-div" data-aos="fade-down">
            <p className="scroll-down">Scroll Down</p>
            <i className="fa-solid fa-arrow-down"></i>
          </div>
        </div>
      </main>
    </header>
  );
}

export default CashMateHero;
