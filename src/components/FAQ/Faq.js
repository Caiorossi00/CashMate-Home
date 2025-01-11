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
      question: "Como o CashMate ajuda a economizar tempo?",
      answer:
        "Ele ajuda a economizar 15 minutos por dia ao otimizar o processo de fechamento de caixa.",
    },
    {
      question: "Preciso de algum tipo de treinamento para usar o CashMate?",
      answer:
        "Não, o CashMate é intuitivo e fácil de usar, sem a necessidade de treinamento.",
    },
    {
      question: "Posso personalizar o CashMate para minha empresa?",
      answer:
        "Sim, o CashMate permite personalizações para atender às necessidades específicas da sua empresa.",
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
