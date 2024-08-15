import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import "./CashMateTimeSavings.css";
import AOS from "aos";
import "aos/dist/aos.css";

function CashMateTimeSavings() {
  const [dias, setDias] = useState(0);
  const [tempoEconomizado, setTempoEconomizado] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
  });
  const [mensagem, setMensagem] = useState("");

  const mensagensPorHora = {
    1: "Em uma hora, você pode ter uma conversa profunda com alguém que ama, fortalecer laços e criar memórias preciosas.",
    2: "Duas horas são tempo suficiente para se perder em um bom livro, expandir sua mente e viajar para outros mundos sem sair do lugar.",
    3: "Em três horas, você pode se dedicar a um hobby que te apaixona, nutrir sua criatividade e encontrar alegria nas pequenas coisas.",
    4: "Quatro horas permitem que você se desconecte do mundo digital e reconecte-se com a natureza, recarregando suas energias e encontrando paz interior.",
    5: "Cinco horas são tempo suficiente para preparar um jantar especial para quem você ama, celebrar a vida e fortalecer os laços afetivos.",
    6: "Em seis horas, você pode se dedicar a um projeto pessoal, realizar um sonho antigo e sentir a satisfação de criar algo com suas próprias mãos.",
    7: "Sete horas permitem que você mergulhe em um novo conhecimento, expandir seus horizontes e descobrir novas paixões.",
    8: "Em oito horas, você pode se voluntariar em uma causa que acredita, fazer a diferença na vida de outras pessoas e sentir a gratidão em seu coração.",
    9: "Nove horas são tempo suficiente para organizar suas finanças, planejar seu futuro e construir uma vida mais estável e segura.",
    10: "Em dez horas, você pode se dedicar ao autocuidado, cuidar do seu corpo e mente, e renovar suas energias para enfrentar os desafios da vida.",
    24: "Um dia inteiro é uma oportunidade para viver novas experiências, criar memórias inesquecíveis e construir um legado que inspire outros.",
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    const totalMinutos = dias * 10;
    setTempoEconomizado({
      dias: Math.floor(totalMinutos / 1440),
      horas: Math.floor((totalMinutos % 1440) / 60),
      minutos: totalMinutos % 60,
    });

    let novaMensagem = "";
    if (totalMinutos >= 10 && totalMinutos < 60) {
      novaMensagem =
        "Sabe o que você pode fazer em 10 minutos? Tomar um café e relaxar!";
    } else if (totalMinutos >= 60) {
      const horasEconomizadas = Math.floor(totalMinutos / 60);
      novaMensagem =
        mensagensPorHora[horasEconomizadas] ||
        "Imagine o que você pode fazer com todo esse tempo livre!";
    }

    setMensagem(novaMensagem);
  }, [dias]);

  return (
    <section className="time-savings" id="tempo-economizado">
      <h2 data-aos="fade-left">
        <span>Tempo</span> Economizado
      </h2>
      <p className="benefits-message" data-aos="fade-left">
        <strong>
          Por que gastar tempo com cálculos manuais e conferências
          intermináveis?
        </strong>
        CashMate automatiza o processo com <span>precisão</span>, garantindo que
        você sempre tenha o troco certo sem esforço adicional. Reduza o{" "}
        <span>tempo</span> gasto na contagem de dinheiro e <span>minimize</span>{" "}
        o risco de erros, mantendo seu caixa organizado e sua operação mais{" "}
        <span>eficiente</span>. <br></br>Com CashMate, você faz mais em menos
        tempo.
      </p>
      <p className="intro-message" data-aos="fade-left">
        E se o CashMate te poupar 10 minutos por dia? Veja quanto tempo você
        pode ganhar na sua vida com o <span>CashMate</span>:
      </p>
      <label htmlFor="dias" data-aos="fade-left">
        Dias Trabalhados:
      </label>
      <input
        type="number"
        id="dias"
        min="0"
        value={dias}
        onChange={(e) => setDias(parseInt(e.target.value) || 0)}
        data-aos="fade-left"
      />
      <div className="results" data-aos="fade-left">
        <div className="result">
          <CountUp className="value" end={tempoEconomizado.dias} duration={1} />
          <span className="unit">Dias</span>
        </div>
        <div className="result">
          <CountUp
            className="value"
            end={tempoEconomizado.horas}
            duration={1}
          />
          <span className="unit">Horas</span>
        </div>
        <div className="result">
          <CountUp
            className="value"
            end={tempoEconomizado.minutos}
            duration={1}
          />
          <span className="unit">Minutos</span>
        </div>
      </div>
      {mensagem && (
        <p className="message" data-aos="fade-left">
          {mensagem}
        </p>
      )}
    </section>
  );
}

export default CashMateTimeSavings;
