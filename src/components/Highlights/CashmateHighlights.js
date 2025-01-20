import React, { useEffect } from "react";
import AOS from "aos";
import cashmateUI from "../../assets/cashmate-ui.png";
import retirada from "../../assets/retirada.png";
import "./CashMateHighlights.css";
import "aos/dist/aos.css";

function CashMateHighlight() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div id="sobre">
      <div id="first-text-sobre" data-aos="fade-up">
        <p>Conheça</p>
        <h1>CashMate</h1>
      </div>

      <div id="images-sobre">
        <img src={cashmateUI} alt="Imagem principal" className="image1-sobre" />
        <div id="bottom-images-sobre" data-aos="fade-up">
          <div className="side-icons" data-aos="fade-right">
            <i className="fa-solid fa-money-bill-1-wave"></i>
            <span className="tooltip">
              <div>
                <h1>Dinheiro</h1>
                <p>
                  CashMate ajuda você a economizar dinheiro ao evitar erros
                  comuns no cálculo de troco e na contagem de caixa. Com
                  processos automatizados e precisos, o app reduz desperdícios,
                  otimiza o uso de notas e moedas e diminui a necessidade de
                  reposições frequentes. Menos erros, mais economia para o seu
                  negócio.
                </p>
              </div>
            </span>
          </div>
          <img
            src={retirada}
            alt="Imagem inferior 2"
            className="bottom-pic-sobre"
            data-aos="zoom-in"
          />
          <div className="side-icons" data-aos="fade-left">
            <i className="fa-regular fa-clock"></i>
            <span className="tooltip">
              <div>
                <h1>Tempo</h1>
                <p>
                  CashMate economiza seu tempo ao automatizar a contagem de
                  caixa no final do dia. Esqueça os cálculos manuais e as
                  verificações exaustivas. Com apenas alguns cliques, você obtém
                  um resumo preciso do caixa, reduzindo o esforço e agilizando o
                  fechamento das suas operações.
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>

      <div id="infos-sobre">
        <div className="item-sobre" data-aos="fade-up">
          <h1>Overview</h1>
          <p>
            CashMate simplifica o gerenciamento financeiro no seu dia a dia. Com
            uma interface intuitiva e ferramentas poderosas, o app permite
            calcular troco com precisão, otimizar o caixa e reduzir erros.
            Transforme o atendimento do seu estabelecimento e maximize sua
            eficiência financeira em poucos cliques.
          </p>
        </div>
        <div className="item-sobre" data-aos="fade-up" data-aos-delay="200">
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
