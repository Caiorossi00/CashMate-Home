import React from "react";
import "./Pricing.css";

const CashMatePricing = () => {
  return (
    <div id="pricing">
      <div id="first-text-pricing">
        <p>Organize</p>
        <h1>Custos</h1>
      </div>

      <div className="display-containers">
        <div className="container-card">
          <div className="price-info">
            <h3>Basic</h3>
            <h1>
              <span>R$0,99</span>p/mês
            </h1>
          </div>

          <div className="plan-details">
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Suporte em horário comercial</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>1 dispositivo</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Treinamento inicial</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Somente tema padrão</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Contém anúncios</p>
            </div>
          </div>

          <a
            href="https://wa.me/53984158694?text=Olá, gostaria de saber mais sobre o plano Basic do CashMate."
            className="cta-price"
            target="_blank"
            rel="noopener noreferrer"
          >
            Começar
          </a>
        </div>

        <div className="container-card">
          <div className="price-info">
            <h3>Plus</h3>
            <h1>
              <span>R$2,99</span>p/mês
            </h1>
          </div>

          <div className="plan-details">
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Suporte estendido (7h às 22h)</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>3 dispositivos</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Treinamento inicial</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Temas personalizados</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Contém anúncios</p>
            </div>
          </div>

          <a
            href="https://wa.me/53984158694?text=Olá, gostaria de saber mais sobre o plano Plus do CashMate."
            className="cta-price"
            target="_blank"
            rel="noopener noreferrer"
          >
            Começar
          </a>
        </div>

        <div className="container-card">
          <div className="price-info">
            <h3>Pro</h3>
            <h1>
              <span>R$5,99</span>p/mês
            </h1>
          </div>

          <div className="plan-details">
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Suporte 24/7</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>até 5 dispositivos</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Treinamento inicial avançado</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Temas personalizáveis</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Sem anúncios</p>
            </div>
          </div>

          <a
            href="https://wa.me/53984158694?text=Olá, gostaria de saber mais sobre o plano Pro do CashMate."
            className="cta-price"
            target="_blank"
            rel="noopener noreferrer"
          >
            Começar
          </a>
        </div>
      </div>
    </div>
  );
};

export default CashMatePricing;
