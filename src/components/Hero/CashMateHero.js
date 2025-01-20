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
              <a href="#sobre">Conheça o App</a>
            </li>
            <li>
              <a href="#tempo-economizado">Economize Tempo</a>
            </li>
            <li>
              <button id="nav-button">
                <a href="#pricing">Experimente</a>
              </button>
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
            href="#pricing"
            className="botao"
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
