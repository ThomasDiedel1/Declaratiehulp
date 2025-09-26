import React, { useState } from "react";
import PathSelector from "./components/PathSelector";
import QuestionStep from "./components/QuestionStep";
import ResultDisplay from "./components/ResultDisplay";
import DeclaratieTabel from "./components/DeclaratieTabel";
import paths from "./paths/paths"; // ✅ nieuwe paths map
import { calculateResult } from "./calculateResult";
import { handleConsultNietVast } from "./logic/handleConsultNietVast";

export default function App() {
  const [path, setPath] = useState("");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [result, setResult] = useState("");
  const [resultCode, setResultCode] = useState(null);
  const [copied, setCopied] = useState(false);

  // Nieuwe state voor advies tonen
  const [showConsultNietVastAdvice, setShowConsultNietVastAdvice] =
    useState(false);

  const handleAnswer = (answer) => {
    // ✅ Zorg dat answer altijd string wordt
    let stripped = "";
    if (typeof answer === "string") {
      stripped = answer.replace("✅ ", "").replace("❌ ", "");
    } else if (answer && typeof answer === "object" && answer.label) {
      stripped = answer.label.replace("✅ ", "").replace("❌ ", "");
    }

    setSelectedAnswer(stripped);
    const newAnswers = [...answers, stripped];
    setAnswers(newAnswers);

    // Advies bij Consult vraag 1 (vaste patiënt)
    if (path === "Consult" && step === 0 && stripped === "Nee") {
      setShowConsultNietVastAdvice(true);
      return;
    } else {
      setShowConsultNietVastAdvice(false);
    }

    // Specifieke logica voor Consult vraag 4 (index 3)
    if (path === "Consult" && step === 3) {
      const answerLower = stripped.toLowerCase();
      if (answerLower.includes("fysiek")) {
        // fysiek consult: door naar vraag 5
        setStep(step + 1);
        return;
      } else if (
        answerLower.includes("telefonisch") ||
        answerLower.includes("e-consult")
      ) {
        // telefonisch of e-consult: direct resultaat
        const { res, code } = calculateResult(path, newAnswers, stripped);
        setResult(res);
        setResultCode(code);
        return;
      }
    }

    // Specifieke logica Consult pad bij vraag 5 (index 4)
    if (path === "Consult" && step === 4) {
      if (stripped === "Ja") {
        // Ga naar vraag 6
        setStep(5);
        return;
      } else if (stripped === "Nee") {
        // Sla vraag 6 over → ga naar vraag 7
        setStep(6);
        return;
      }
    }

    // Specifieke logica Consult pad na vraag 7 (index 6): verbruikersmaterialen
    if (path === "Consult" && step === 6) {
      if (stripped.toLowerCase() === "nee") {
        // Sla vraag 8 (index 7) over, ga direct naar resultaat
        const { res, code } = calculateResult(path, newAnswers, stripped);
        setResult(res);
        setResultCode(code);
        return;
      } else {
        setStep(step + 1);
        return;
      }
    }

    // Nieuwe logica POH-S vraag 1 (index 0)
    if (path === "POH-S" && step === 0) {
      const directResultAnswers = [
        "24-uurs RR meting",
        "Enkel-arm-index",
        "Geheugentest",
        "Stoppen met Roken (niet in ketenzorg)",
      ];

      if (directResultAnswers.includes(stripped)) {
        const { res, code } = calculateResult(path, newAnswers, stripped);
        setResult(res);
        setResultCode(code);
        return;
      } else {
        setStep(step + 1);
        return;
      }
    }

    // Speciale logica ConsultNietVast
    if (path === "ConsultNietVast") {
      const handled = handleConsultNietVast(
        step,
        stripped,
        newAnswers,
        setStep,
        setResult,
        setResultCode
      );
      if (handled) return;
    }

    // Normale flow: als laatste vraag, dan resultaat tonen
    const currentPathQuestions = paths[path];
    if (step === currentPathQuestions.length - 1) {
      const { res, code } = calculateResult(path, newAnswers, stripped);
      setResult(res);
      setResultCode(code);
    } else {
      setStep(step + 1);
    }
  };

  const reset = () => {
    setPath("");
    setStep(0);
    setAnswers([]);
    setResult("");
    setSelectedAnswer(null);
    setResultCode(null);
    setCopied(false);
    setShowConsultNietVastAdvice(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const startConsultNietVast = () => {
    setPath("ConsultNietVast");
    setStep(0);
    setAnswers([]);
    setResult("");
    setSelectedAnswer(null);
    setResultCode(null);
    setCopied(false);
    setShowConsultNietVastAdvice(false);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        🯪 Declaratiehulp Huisartsenzorg
      </h1>

      {!path ? (
        <>
          <PathSelector paths={paths} onSelect={setPath} />
          <DeclaratieTabel resultCode={resultCode} />
        </>
      ) : showConsultNietVastAdvice ? (
        <div className="p-4 border border-yellow-400 bg-yellow-100 rounded mb-4">
          <p>
            <strong>Advies:</strong> De patiënt is geen vaste patiënt in de
            praktijk. Start daarom het pad <em>ConsultNietVast</em>.
          </p>
          <button
            onClick={startConsultNietVast}
            className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded"
          >
            Start ConsultNietVast
          </button>
          <button
            onClick={reset}
            className="mt-2 ml-2 px-4 py-2 bg-gray-300 rounded"
          >
            Annuleer
          </button>
        </div>
      ) : !result ? (
        <>
          <button
            onClick={() => setStep((s) => s - 1)}
            disabled={step === 0}
            className="mb-4 px-4 py-2 rounded border border-gray-300 bg-gray-100 disabled:opacity-50"
          >
            ⬅ Terug
          </button>
          <QuestionStep
            step={step}
            question={paths[path][step].question}
            tooltip={paths[path][step].tooltip}
            options={paths[path][step].options}
            onAnswer={handleAnswer}
            selected={selectedAnswer}
          />
        </>
      ) : (
        <>
          <ResultDisplay
            result={result}
            onCopy={copyToClipboard}
            onReset={reset}
            copied={copied}
          />
          <DeclaratieTabel resultCode={resultCode} />
        </>
      )}
    </div>
  );
}