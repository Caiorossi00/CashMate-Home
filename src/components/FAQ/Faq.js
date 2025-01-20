import React, { useState } from "react";
import "./Faq.css";

const CashmateFaq = () => {
  const [expanded, setExpanded] = useState(null);
  const faqs = [
    {
      question: "O que é o CashMate?",
      answer:
        "O CashMate é uma ferramenta para agilizar o fechamento de caixa e economizar tempo no seu dia a dia.",
    },

    {
      question: "Como o CashMate calcula o valor exato da retirada?",
      answer:
        "O CashMate aplica um algoritmo ganancioso, priorizando as cédulas de maior valor, começando da maior para a menor. O sistema calcula e distribui as cédulas de forma otimizada até que o valor definido seja completado.",
    },
    {
      question: "Qual é a lógica do algoritmo utilizado no CashMate?",
      answer:
        "O algoritmo começa verificando as cédulas de maior valor disponível e tenta usar a maior quantidade possível de cada cédula, reduzindo progressivamente o valor do troco até que a quantidade total seja atingida. Ele busca a solução com o menor número de cédulas e moedas.",
    },
    {
      question:
        "Como o CashMate garante que sempre será feita a retirada do valor correto, mesmo com cédulas e moedas de diferentes valores?",
      answer:
        "O algoritmo verifica todas as cédulas e moedas disponíveis no sistema e, com base no valor a ser trocado, distribui as cédulas de maneira a minimizar o número de unidades utilizadas. Ele garante que o valor do troco seja sempre o exato, utilizando as cédulas e moedas na ordem de maior para menor.",
    },
    {
      question: "O CashMate permite configurar o estoque de cédulas e moedas?",
      answer:
        "Sim, o CashMate permite configurar o estoque de cédulas e moedas para o cálculo da retirada. O usuário pode ajustar os valores e quantidades disponíveis, garantindo que o algoritmo funcione com as condições reais de caixa.",
    },
  ];

  const toggleAnswer = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Perguntas Frequentes</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item"
            onClick={() => toggleAnswer(index)}
          >
            <div className="faq-question">{faq.question}</div>
            {expanded === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CashmateFaq;
