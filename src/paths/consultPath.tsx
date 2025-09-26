const consultPath = [
  {
    question: "Is de patiënt een vaste patiënt in de praktijk?",
    tooltip: "Bijvoorbeeld ingeschreven in jouw huisartsenpraktijk.",
    options: ["✅ Ja", "❌ Nee"],
    next: {
      "✅ Ja": 1,
      "❌ Nee": "ConsultNietVast", // spring naar ander pad
    },
  },
  {
    question: "Heeft de patiënt een medisch-inhoudelijke hulpvraag gesteld?",
    tooltip: "Inhoudelijke hulpvraag? Geen verzoek om dossier opvragen.",
    options: ["✅ Ja", "❌ Nee"],
    next: {
      "✅ Ja": 2,
      "❌ Nee": null, // stopt → geen declaratie
    },
  },
  {
    question: "Hoe lang duurde het contactmoment met de patiënt?",
    tooltip: "Duur bepaalt consulttarief.",
    options: [
      { label: "< 5 minuten", tijdCode: "CK" },
      { label: "5–20 minuten", tijdCode: "CN" },
      { label: "20 minuten of langer", tijdCode: "C2" },
    ],
    next: {
      "< 5 minuten": 3,
      "5–20 minuten": 3,
      "20 minuten of langer": 3,
    },
  },
  {
    question: "Wat voor type consult was het?",
    tooltip: "Fysiek consult op praktijk, telefonisch of e-consult.",
    options: [
      { label: "Fysiek consult" },
      { label: "Telefonisch consult", result: "TK" },
      { label: "E-consult", result: "EK" },
    ],
    next: {
      "Fysiek consult": 4,
    },
  },
  {
    question: "Heb je tijdens dit consult een medische verrichting uitgevoerd?",
    tooltip:
      "Bijvoorbeeld CRP-test, wondverzorging, injectie. Alleen relevant bij fysiek consult.",
    options: ["✅ Ja", "❌ Nee"],
    next: {
      "✅ Ja": 5, // ga naar vraag 6
      "❌ Nee": 6, // ga naar vraag 7
    },
  },
  {
    question: "Welke medische verrichting heb je uitgevoerd?",
    tooltip: "Kies de juiste verrichting uit de lijst.",
    options: [
      { label: "Ambulante compressie therapie", extra: "COM" },
      { label: "Therapeutische injectie Cyriax", extra: "COR" },
      { label: "IUD inbrengen", extra: "IUD" },
      { label: "MRSA screening", extra: "MRSA" },
      { label: "Hartritmestoornis Holterfoon", result: "HOLT" },
      { label: "Biopt", extra: "CHI" },
      { label: "Tympanometrie", extra: "TYMP" },
      { label: "Chirurgische ingreep", extra: "CHI" },
    ],
    next: {
      default: 6,
    },
  },
  {
    question: "Heb je verbruikersmaterialen gebruikt?",
    tooltip: "Heeft u verbruikersmaterialen gebruikt?",
    options: ["✅ Ja", "❌ Nee"],
    next: {
      "✅ Ja": 7, // ga naar vraag 8
      "❌ Nee": null, // afronden consult alleen
    },
  },
  {
    question: "Welke materialen heb je gebruikt?",
    tooltip: "Kies de gebruikte materialen",
    options: [
      { label: "Minim oxybuprocaine", extra: "OXY" },
      { label: "Oogboring", extra: "OOGB" },
      { label: "Laboratorium kosten", extra: "L" },
      { label: "Teststrip bloedsuiker", extra: "BLS" },
      { label: "Dipslide", extra: "DIP" },
      { label: "Atraumatisch hechtmateriaal", extra: "HM" },
      { label: "ECG diagnostiek", extra: "ECG" },
      { label: "Materiaalkosten CRP-test", extra: "CRPC" },
    ],
    next: {
      default: null, // einde → toon resultaat
    },
  },
];

export default consultPath;