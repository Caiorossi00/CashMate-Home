import React from "react";
import "./CashMateFooter.css";

function CashMateFooter() {
  return (
    <footer>
      <div className="footer-container">
        <ul className="footer-links">
          <li className="footer-title">Explore</li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#tempo-economizado">Tempo Economizado</a>
          </li>
          <li>
            <a href="#detalhes">Detalhes</a>
          </li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>
          Desenvolvido por{" "}
          <a
            href="https://www.instagram.com/caiorossi.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Caiorossi.dev
          </a>
        </p>
        <p>CashMate © 2024</p>
      </div>
    </footer>
  );
}

export default CashMateFooter;
