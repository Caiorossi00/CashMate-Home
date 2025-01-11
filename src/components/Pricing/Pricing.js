import React from "react";
import "./Pricing.css";

const CashMatePricing = () => {
  return (
    <div id="pricing">
      <div id="first-text-pricing">
        <p>Lorem Ipsum</p>
        <h1>Pricing</h1>
      </div>

      <div className="display-containers">
        <div className="container-card">
          <div className="price-info">
            <h3>Nome do Plano</h3>
            <h1>
              <span>R$0,99</span>p/mês
            </h1>
          </div>

          <div className="plan-details">
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Lorem Ipsum</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Lorem Ipsum</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Lorem Ipsum</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Lorem Ipsum</p>
            </div>
          </div>

          <button className="cta-price">Get Started</button>
        </div>
        <div className="container-card">
          <div className="price-info">
            <h3>Nome do Plano</h3>
            <h1>
              <span>R$2,99</span>p/mês
            </h1>
          </div>

          <div className="plan-details">
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Lorem Ipsum</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Lorem Ipsum</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Lorem Ipsum</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Lorem Ipsum</p>
            </div>
          </div>

          <button className="cta-price">Get Started</button>
        </div>
        <div className="container-card">
          <div className="price-info">
            <h3>Nome do Plano</h3>
            <h1>
              <span>R$5,99</span>p/mês
            </h1>
          </div>

          <div className="plan-details">
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Lorem Ipsum</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Lorem Ipsum</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Lorem Ipsum</p>
            </div>
            <div className="item-price">
              <div className="circle-price"></div>
              <p>Lorem Ipsum</p>
            </div>
          </div>

          <button className="cta-price">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default CashMatePricing;
