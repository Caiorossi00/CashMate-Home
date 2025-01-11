import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import "./CashMateTimeSavings.css";
import AOS from "aos";
import "aos/dist/aos.css";

function CashMateTimeSavings() {
  const [dias, setDias] = useState(0);
  const [diasTrabalhados, setDiasTrabalhados] = useState(0);
  const [tempoEconomizado, setTempoEconomizado] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    const totalMinutos = dias * 15;
    setTempoEconomizado({
      dias: Math.floor(totalMinutos / 1440),
      horas: Math.floor((totalMinutos % 1440) / 60),
      minutos: totalMinutos % 60,
    });
  }, [dias]);

  const handleButtonClick = (valor) => {
    setDias((prevDias) => prevDias + valor);
    setDiasTrabalhados((prevDiasTrabalhados) => prevDiasTrabalhados + valor);
  };

  const handleReset = () => {
    setDias(0);
    setDiasTrabalhados(0);
  };

  return (
    <section className="time-savings" id="tempo-economizado">
      <div id="first-text-savings" data-aos="fade-up">
        <p>Lorem Ipsum</p>
        <h1>Tempo</h1>
      </div>

      <p className="intro-message" data-aos="fade-left">
        E se o <span>CashMate</span> te poupar 15 minutos por dia{" "}
        <span>agilizando</span> o fechamento do caixa?
      </p>

      <div className="results" data-aos="fade-left">
        <div className="result">
          <CountUp className="value" end={tempoEconomizado.dias} duration={1} />
          <span className="unit">Dias</span>
        </div>
        <div className="result">
          <CountUp
            className="value"
            end={tempoEconomizado.horas}
            duration={3}
          />
          <span className="unit">Horas</span>
        </div>
        <div className="result">
          <CountUp
            className="value"
            end={tempoEconomizado.minutos}
            duration={3}
          />
          <span className="unit">Min</span>
        </div>
      </div>

      <div className="days-worked-container" data-aos="fade-right">
        <p>
          <strong>Dias Trabalhados:</strong> {diasTrabalhados}
        </p>
      </div>

      <div className="button-group" data-aos="fade-left">
        <button onClick={() => handleButtonClick(1)} className="time-button">
          +1 dia
        </button>
        <button onClick={() => handleButtonClick(5)} className="time-button">
          +5 dias
        </button>
        <button onClick={() => handleButtonClick(24)} className="time-button">
          +24 dias
        </button>
        <button onClick={() => handleButtonClick(180)} className="time-button">
          +6 meses
        </button>
        <button onClick={() => handleButtonClick(365)} className="time-button">
          +1 ano
        </button>
      </div>

      <div className="reset-button-container">
        <button onClick={handleReset} className="reset-button">
          Resetar
        </button>
      </div>
    </section>
  );
}

export default CashMateTimeSavings;
