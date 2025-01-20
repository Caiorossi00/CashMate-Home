import React from "react";
import logo from "../../assets/logo.png";
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
            <a href="#beneficios">Benefícios</a>
          </li>
          <li>
            <a href="#pricing">Preços</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
        <ul className="footer-links">
          <li className="footer-title">Contato</li>
          <li>
            <a
              href="https://www.instagram.com/caiorossi.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/553984158694"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </li>
          <li>
            <a href="mailto:Caiorossi.code@gmail.com">Email </a>
          </li>
        </ul>
      </div>

      <div className="footer-bottom">
        <img src={logo} alt="Logo" className="footer-logo" />
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
        <p>CashMate © 2025</p>
      </div>
    </footer>
  );
}

export default CashMateFooter;
