import React, { useEffect } from "react";
import "./CashMateHighlights.css";
import AOS from "aos";
import "aos/dist/aos.css";

function CashMateHighlight() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <section className="highlight">
      <div className="highlight-content" data-aos="fade-right">
        <div className="container-image-highlight">
          <img
            src="https://images.unsplash.com/photo-1561016444-14f747499547?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Imagem do CashMate"
            className="highlight-image"
            data-aos="fade-up"
          />
          <h1>
            Deixe a
            <a
              href="https://www.instagram.com/caiorossi.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i> tecnologia </i>
            </a>
            cuidar do seu caixa, <i>você</i> cuida do seu negócio.
          </h1>
        </div>

        <p data-aos="fade-up">
          O CashMate é a solução ideal para quem busca otimizar o tempo e
          valorizar o dinheiro. Com nosso aplicativo inteligente, o fechamento
          de caixa se torna uma tarefa rápida, fácil e precisa. Diga adeus aos
          cálculos manuais demorados e aos erros que podem prejudicar seu
          negócio. Nossa interface intuitiva, com imagens de notas e moedas,
          facilita a organização do dinheiro e garante que você sempre tenha
          troco disponível para seus clientes. Em caso de troco insuficiente, o
          CashMate oferece soluções alternativas para que você não perca nenhuma
          venda. Experimente agora e descubra como é fácil e rápido fechar o
          caixa com o CashMate, liberando seu tempo para o que realmente
          importa.
        </p>
      </div>
    </section>
  );
}

export default CashMateHighlight;
