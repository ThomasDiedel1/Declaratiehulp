import { calculateResult } from "../calculateResult";

export function handleConsultNietVast(step, answer, answers, setStep, setResult, setResultCode) {
  const stripped = answer.replace("✅ ", "").replace("❌ ", "");

  // Stap 1: Type patiënt (Passant, Militair, Gemoedsbezwaarde)
  if (step === 0) {
    setStep(1);
    return true;
  }

  // Stap 2: Tijdsduur
  if (step === 1) {
    setStep(2);
    return true;
  }

  // Stap 3: Materialen? → Nee
  if (step === 2 && stripped === "Nee") {
    const { res, code } = calculateResult("ConsultNietVast", answers, stripped);
    setResult(res);
    setResultCode(code);
    return true;
  }

  // Stap 3: Materialen? → Ja
  if (step === 2 && stripped === "Ja") {
    setStep(3);
    return true;
  }

  return false; // niets gedaan → ga terug naar normale flow
}