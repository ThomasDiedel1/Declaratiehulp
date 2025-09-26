export type ConsultStep = {
    id: string;
    question: string;
    options: {
      label: string;
      next?: string; // volgende vraag-id
      result?: string; // of direct een resultaat
    }[];
  };
  
  export const consultFlow: ConsultStep[] = [
    {
      id: "vraag1",
      question: "Is de patiënt een vaste patiënt in de praktijk?",
      options: [
        { label: "Ja", next: "vraag2" },
        { label: "Nee", result: "Start ConsultNietVast" }
      ]
    },
    {
      id: "vraag2",
      question: "Is er een verwijzing of verslaglegging noodzakelijk?",
      options: [
        { label: "Ja", next: "vraag3" },
        { label: "Nee", next: "vraag3" }
      ]
    },
    {
      id: "vraag3",
      question: "Hoe lang duurde het consult en in welke vorm?",
      options: [
        {
          label: "< 5 minuten (Fysiek)",
          next: "vraag5",
          result: "Consult fysiek kort"
        },
        {
          label: "< 5 minuten (Telefonisch)",
          next: "vraag5",
          result: "Consult telefonisch kort"
        },
        {
          label: "< 5 minuten (E-consult)",
          next: "vraag5",
          result: "E-consult kort"
        },
        {
          label: "5-20 minuten (Fysiek)",
          next: "vraag5",
          result: "Consult fysiek normaal"
        },
        {
          label: "5-20 minuten (Telefonisch)",
          next: "vraag5",
          result: "Consult telefonisch normaal"
        },
        {
          label: "5-20 minuten (E-consult)",
          next: "vraag5",
          result: "E-consult normaal"
        },
        {
          label: "≥ 20 minuten (Fysiek)",
          next: "vraag5",
          result: "Consult fysiek lang"
        },
        {
          label: "≥ 20 minuten (Telefonisch)",
          next: "vraag5",
          result: "Consult telefonisch lang"
        },
        {
          label: "≥ 20 minuten (E-consult)",
          next: "vraag5",
          result: "E-consult lang"
        }
      ]
    },
    {
      id: "vraag5",
      question: "Is er een medische verrichting gedaan?",
      options: [
        { label: "Ja", next: "vraag6" },
        { label: "Nee", next: "vraag7" }
      ]
    },
    {
      id: "vraag6",
      question: "Welke verrichting is gedaan?",
      options: [
        { label: "Ambulante compressie therapie", next: "vraag7", result: "COM" },
        { label: "Therapeutische injectie Cyriax", next: "vraag7", result: "COR" },
        { label: "IUD inbrengen", next: "vraag7", result: "IUD" },
        { label: "MRSA screening", next: "vraag7", result: "MRSA" },
        { label: "Hartritmestoornis Holterfoon", next: "vraag7", result: "HOLT" },
        { label: "Biopt", next: "vraag7", result: "CHI" },
        { label: "Tymponometrie", next: "vraag7", result: "TYMP" }
      ]
    },
    {
      id: "vraag7",
      question: "Zijn er verbruikersmaterialen gebruikt?",
      options: [
        { label: "Ja", next: "vraag8" },
        { label: "Nee", result: "Einde" }
      ]
    },
    {
      id: "vraag8",
      question: "Welke verbruikersmaterialen zijn gebruikt?",
      options: [
        { label: "Minim oxybuprocaine", result: "OXY" },
        { label: "Oogboring", result: "OOGB" },
        { label: "Laboratorium kosten", result: "L" },
        { label: "Teststrip bloedsuiker", result: "BLS" },
        { label: "Dipslide", result: "DIP" },
        { label: "Atraumatisch hechtmateriaal", result: "HM" },
        { label: "ECG diagnostiek", result: "ECG" },
        { label: "Materiaalkosten CRP-test", result: "CRPC" }
      ]
    }
  ];