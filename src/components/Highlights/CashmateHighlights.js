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
    <div id="container-sobre">
      <div id="first-text-sobre">
        <p>Lorem Ipsum</p>
        <h1>CashMate</h1>
      </div>

      <div id="images-sobre">
        <img
          src="https://plus.unsplash.com/premium_photo-1676485163992-4cc18ef56c9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Imagem principal"
          className="image1-sobre"
        />
        <div id="bottom-images-sobre">
          <img
            src="https://images.unsplash.com/photo-1620483763435-aa0b760982df?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Imagem inferior 1"
            className="bottom-pic-sobre"
          />
          <img
            src="https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Imagem inferior 2"
            className="bottom-pic-sobre"
          />
          <img
            src="https://images.unsplash.com/photo-1609848436094-0450727a1023?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Imagem inferior 3"
            className="bottom-pic-sobre"
          />
        </div>
      </div>

      <div id="infos-sobre">
        <div className="item-sobre">
          <h1>Overview</h1>
          <p>
            CashMate simplifica o gerenciamento financeiro no seu dia a dia. Com
            uma interface intuitiva e ferramentas poderosas, o app permite
            calcular troco com precisão, otimizar o caixa e reduzir erros.
            Transforme o atendimento do seu estabelecimento e maximize sua
            eficiência financeira em poucos cliques.
          </p>
        </div>
        <div className="item-sobre">
          <h1>Approach</h1>
          <p>
            Desenvolvemos um sistema prático e confiável, focado em resolver
            problemas reais do gerenciamento de caixa. Nossa abordagem combina
            agilidade no cálculo do troco, priorização de recursos financeiros e
            uma experiência intuitiva para os usuários, transformando o
            gerenciamento do caixa em uma tarefa rápida e precisa.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CashMateHighlight;
