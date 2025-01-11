import React, { useEffect } from "react";
import "./CashMateBenefits.css";
import AOS from "aos";
import "aos/dist/aos.css";

const CashMateBenefits = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container-instructions" id="detalhes">
      <div id="first-text-details" data-aos="fade-left">
        <p>Lorem Ipsum</p>
        <h1>Benefícios</h1>
      </div>
      <div className="instructions-items">
        <div className="steps-container">
          <Step
            number="01"
            title="Economia de Tempo"
            description="O aplicativo calcula o valor total em caixa e o troco a ser retirado em menos de um segundo, eliminando a necessidade de cálculos manuais demorados e propensos a erros."
            dataAos="fade-up"
          />
          <Step
            number="02"
            title="Troco Otimizado"
            description="O CashMate calcula a menor quantidade de notas e moedas para o troco, garantindo que você sempre tenha dinheiro disponível para seus clientes e evitando a necessidade de buscar troco em outros lugares."
            dataAos="fade-up"
          />
          <Step
            number="03"
            title="Prevenção de Erros"
            description="O algoritmo garante o cálculo correto do troco, minimizando o risco de erros humanos e discrepâncias no caixa."
            dataAos="fade-up"
          />
          <Step
            number="04"
            title="Organização do Caixa"
            description="A interface intuitiva com imagens das notas e moedas facilita a identificação e organização do dinheiro, tornando o processo de fechamento do caixa mais eficiente."
            dataAos="fade-up"
          />
          <Step
            number="05"
            title="Facilidade de Uso"
            description="O aplicativo é fácil de usar, mesmo para quem não tem experiência com cálculos de troco ou fechamento de caixa. Os resultados são apresentados de forma clara e organizada, com detalhes sobre o valor a retirar, o valor restante e as notas/moedas necessárias."
            dataAos="fade-up"
          />
          <Step
            number="06"
            title="Soluções Personalizadas"
            description="Em caso de troco insuficiente, o aplicativo oferece soluções alternativas para facilitar o fechamento do caixa, como valores aproximados ou sugestões de notas/moedas a serem obtidas."
            dataAos="fade-up"
          />
        </div>
      </div>
    </div>
  );
};

const Step = ({ number, title, description, dataAos }) => {
  return (
    <div className="step" data-aos={dataAos}>
      <div className="step-number">{number}</div>
      <div className="step-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CashMateBenefits;
