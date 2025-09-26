export const resultCodes = {
  Consult: {
    "< 5 minuten": {
      "Fysiek consult": {
        code: "11001",
        text: "Fysiek consult korter dan 5 minuten",
      },
      "Telefonisch consult": {
        code: "TK",
        text: "Telefonisch consult korter dan 5 minuten",
      },
      "E-consult": { code: "EK", text: "E-consult korter dan 5 minuten" },
    },
    "5–20 minuten": {
      "Fysiek consult": {
        code: "11002",
        text: "Fysiek consult 5 tot 20 minuten",
      },
      "Telefonisch consult": {
        code: "TN",
        text: "Telefonisch consult 5 tot 20 minuten",
      },
      "E-consult": { code: "EN", text: "E-consult 5 tot 20 minuten" },
    },
    "20 minuten of langer": {
      "Fysiek consult": {
        code: "11003",
        text: "Fysiek consult 20 minuten of langer",
      },
      "Telefonisch consult": {
        code: "T2",
        text: "Telefonisch consult 20 minuten of langer",
      },
      "E-consult": { code: "E2", text: "E-consult 20 minuten of langer" },
    },
    "0-5 min": {
      "Consult Passant Kort": {
        code: "CPK",
        text: "Consult Passant Kort",
      },
      "Consult Militair Kort": {
        code: "CMK",
        text: "Consult Militair Kort",
      },
      "Consult gemoedsbezwaarde Kort": {
        code: "CBK",
        text: "Consult gemoedsbezwaarde Kort",
      },
    },
    "5-20 min": {
      "Consult Passant Normaal": {
        code: "CPN",
        text: "Consult Passant Normaal",
      },
      "Consult Militair Normaal": {
        code: "CMN",
        text: "Consult Militair Normaal",
      },
      "Consult gemoedsbezwaarde Normaal": {
        code: "CBN",
        text: "Consult gemoedsbezwaarde Normaal",
      },
    },
    "> 20 min": {
      "Consult Passant Dubbel": {
        code: "CP2",
        text: "Consult Passant Dubbel",
      },
      "Consult Militair Dubbel": {
        code: "CM2",
        text: "Consult Militair Dubbel",
      },
      "Consult gemoedsbezwaarde Dubbel": {
        code: "CB2",
        text: "Consult gemoedsbezwaarde Dubbel",
      },
    },
  },

  Visite: {
    regulier: { code: "12001", text: "Visite, korter dan 20 minuten" },
    lang: { code: "12002", text: "Visite, 20 minuten of langer" },
  },

  "M&I-verrichting": {
    "Ambulante compressie therapie": {
      code: "COM",
      text: "Ambulante compressie therapie",
    },
    "Therapeutische injectie Cyriax": {
      code: "COR",
      text: "Therapeutische injectie Cyriax",
    },
    "IUD inbrengen": { code: "IUD", text: "IUD inbrengen" },
    "MRSA screening": { code: "MRSA", text: "MRSA screening" },
    "Hartritmestoornis Holterfoon": {
      code: "HOLT",
      text: "Hartritmestoornis Holterfoon",
    },
    Tympanometrie: { code: "TYM", text: "Tympanometrie" },
  },

  Materiaalkosten: {
    "niet-tijdgebonden": {
      "Minim oxybuprocaine": {
        code: "OXY",
        text: "Minim oxybuprocaine",
      },
      "Wrattenbehandeling met stikstof": {
        code: "STI",
        text: "Wrattenbehandeling met stikstof",
      },
      "Oogboring": {
        code: "OOGB",
        text: "Oogboring",
      },
      "Laboratorium kosten": {
        code: "L",
        text: "Laboratorium kosten",
      },
      "Materiaalkosten teststrip bloedsuiker": {
        code: "BLS",
        text: "Materiaalkosten teststrip bloedsuiker",
      },
      "Materiaalkosten dipslide": {
        code: "DIP",
        text: "Materiaalkosten dipslide",
      },
      "Materiaalkosten atraumtisch hechtmateriaal": {
        code: "HM",
        text: "Materiaalkosten atraumtisch hechtmateriaal",
      },
      "ECG diagnostiek": {
        code: "ECG",
        text: "ECG diagnostiek",
      },
      "Materiaalkosten CRP-test": {
        code: "CRPC",
        text: "Materiaalkosten CRP-test",
      },
    },
  },
};