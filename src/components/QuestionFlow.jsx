import React, { useState } from "react";
import QuestionStep from "./QuestionStep";

/**
 * QuestionFlow verwerkt het pad (bijvoorbeeld Consult) en doorloopt alle stappen.
 * - tijdCode wordt tijdelijk opgeslagen (bijv. CK, CN, C2).
 * - extraCodes worden toegevoegd aan de eindresultaten.
 * - resultConsultOnly: true betekent afronden op basis van tijdCode (+ evt. extra).
 */
export default function QuestionFlow({
  path,
  step,
  paths,
  selectedAnswer,
  onAnswer,
  onBack,
  disableBack,
}) {
  const [tijdCode, setTijdCode] = useState(null);
  const [extraCodes, setExtraCodes] = useState([]);

  const questionData = paths[path][step];

  const handleAnswer = (option) => {
    // Ondersteun zowel string-opties als object-opties
    if (typeof option === "string") {
      // Gewoon string-antwoorden
      onAnswer(option);
      return;
    }

    // Object met extra logica
    const { label, tijdCode: tc, extra, result, resultConsultOnly, next } =
      option;

    if (tc) {
      setTijdCode(tc);
    }

    if (extra) {
      setExtraCodes((prev) => [...prev, extra]);
    }

    if (result) {
      onAnswer(result);
      return;
    }

    if (resultConsultOnly) {
      if (tijdCode) {
        const finalResult =
          extraCodes.length > 0
            ? `${tijdCode} + ${extraCodes.join(" + ")}`
            : tijdCode;
        onAnswer(finalResult);
      } else {
        onAnswer("Geen consulttijd gevonden");
      }
      return;
    }

    if (next !== undefined) {
      onAnswer(label, next);
      return;
    }

    // fallback
    onAnswer(label);
  };

  return (
    <>
      <button
        onClick={onBack}
        disabled={disableBack}
        style={{
          margin: "0.5rem 0",
          padding: "0.75rem 1.25rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          backgroundColor: "#f9f9f9",
        }}
      >
        ⬅ Terug
      </button>

      <QuestionStep
        step={step}
        question={questionData.question}
        tooltip={questionData.tooltip}
        options={questionData.options}
        onAnswer={handleAnswer}
        selected={selectedAnswer}
      />
    </>
  );
}