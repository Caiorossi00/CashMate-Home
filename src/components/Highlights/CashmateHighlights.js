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
        <img src="https://via.placeholder.com/300" alt="Imagem principal" />
        <div id="bottom-images-sobre">
          <img src="https://via.placeholder.com/150" alt="Imagem inferior 1" />
          <img src="https://via.placeholder.com/150" alt="Imagem inferior 2" />
          <img src="https://via.placeholder.com/150" alt="Imagem inferior 3" />
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
