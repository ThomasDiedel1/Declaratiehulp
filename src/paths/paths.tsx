const paths: Record<string, any[]> = {
  Consult: [
    {
      question: "Is de patiënt een vaste patiënt in de praktijk?",
      tooltip: "Bijvoorbeeld ingeschreven in jouw huisartsenpraktijk.",
      options: ["✅ Ja", "❌ Nee"],
    },
    {
      question: "Heeft de patiënt een medisch-inhoudelijke hulpvraag gesteld?",
      tooltip: "Inhoudelijke hulpvraag? Geen verzoek om dossier opvragen.",
      options: ["✅ Ja", "❌ Nee"],
    },
    {
      question: "Hoe lang duurde het contactmoment met de patiënt?",
      tooltip: "Duur bepaalt consulttarief.",
      options: ["< 5 minuten", "5–20 minuten", "20 minuten of langer"],
    },
    {
      question: "Wat voor type consult was het?",
      tooltip: "Fysiek consult op praktijk, telefonisch of e-consult.",
      options: ["Fysiek consult", "Telefonisch consult", "E-consult"],
    },
    {
      question: "Heb je tijdens dit consult een medische verrichting uitgevoerd?",
      tooltip:
        "Bijvoorbeeld CRP-test, wondverzorging, injectie. Alleen relevant bij fysiek consult.",
      options: [
        { label: "✅ Ja", next: 5 }, // → ga naar vraag 6
        { label: "❌ Nee", next: 6 }, // → sla vraag 6 over → ga naar vraag 7
      ],
    },
    {
      question: "Welke medische verrichting heb je uitgevoerd?",
      tooltip: "Kies de juiste verrichting uit de lijst.",
      options: [
        "Ambulante compressie therapie",
        "Therapeutische injectie Cyriax",
        "IUD inbrengen",
        "MRSA screening",
        "Hartritmestoornis Holterfoon",
        "Biopt",
        "Tympanometrie",
      ],
    },
    {
      question: "Heb je verbruikersmaterialen gebruikt?",
      tooltip: "Heeft u verbruikersmaterialen gebruikt?",
      options: [
        { label: "✅ Ja", next: 7 }, // → door naar vraag 8
        { label: "❌ Nee", result: "Consult afgerond zonder materialen" }, // → direct result
      ],
    },
    {
      question: "Welke materialen heb je gebruikt?",
      tooltip: "Kies de gebruikte materialen",
      options: [
        "Minim oxybuprocaine",
        "Oogboring",
        "Laboratorium kosten",
        "Teststrip bloedsuiker",
        "Dipslide",
        "Atraumatisch hechtmateriaal",
        "ECG diagnostiek",
        "Materiaalkosten CRP-test",
      ],
    },
  ],

  ConsultNietVast: [
    {
      question: "Wat voor type patiënt betreft het?",
      tooltip: "Niet ingeschreven patiënt in jouw praktijk.",
      options: ["Passant", "Gemoedsbezwaarde", "Militair"],
    },
    {
      question: "Wat is de tijdsduur van het consult?",
      tooltip: "Kies de tijdsduur van het consult",
      options: ["<5 min", "5-20 min", "20 minuten of langer"],
    },
    {
      question: "Heb je verbruikersmaterialen gebruikt?",
      tooltip: "Heeft u verbruikersmaterialen gebruikt?",
      options: ["Ja", "Nee"],
    },
    {
      question: "Welke materialen heb je gebruikt?",
      tooltip: "Kies de gebruikte materialen",
      options: [
        "Minim oxybuprocaine",
        "Oogboring",
        "Laboratorium kosten",
        "Teststrip bloedsuiker",
        "Dipslide",
        "Atraumatisch hechtmateriaal",
        "ECG diagnostiek",
        "Materiaalkosten CRP-test",
      ],
    },
  ],

  Visite: [
    {
      question: "Hoe lang duurde het contactmoment tijdens de visite?",
      tooltip:
        "Duur bepaalt of lang tarief geldt, reistijd mag niet meegerekend worden.",
      options: ["< 20 minuten", "≥ 20 minuten"],
    },
    {
      question: "Betreft het intensieve zorg of ELV?",
      tooltip: "Intensieve zorg zoals palliatief of ELV = aparte tarieven.",
      options: ["Geen van beide", "Intensieve zorg", "ELV"],
    },
  ],


  "POH-S": [
    {
      question: "Wat voor type patiënt betreft het?",
      options: [
        "CVRM",
        "DM",
        "Astma",
        "COPD",
        "Ouderenzorg",
        "24-uurs RR meting",
        "Enkel-arm-index",
        "Geheugentest",
        "Stoppen met Roken (niet in ketenzorg)",
      ],
    },
    {
      question: "Wat voor soort consult was het?",
      options: ["Fysiek", "Telefonisch", "E-consult", "Visite"],
    },
    {
      question: "Wat is de tijdsduur van het consult?",
      options: ["5-20 min", "> 20 min"],
    },
  ],
};

export default paths;