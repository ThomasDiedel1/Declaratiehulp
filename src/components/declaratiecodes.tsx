const declaratiecodes = [
  // --------------------
  // Consult
  // --------------------
  {
    Categorie: "Consult",
    Subcategorie: "0-5 min",
    Naam: "Consult kort",
    Code: "CK",
  },
  {
    Categorie: "Consult",
    Subcategorie: "5-20 min",
    Naam: "Consult normaal",
    Code: "CN",
  },
  {
    Categorie: "Consult",
    Subcategorie: "> 20 min",
    Naam: "Consult dubbel",
    Code: "C2",
  },
  {
    Categorie: "Consult",
    Subcategorie: "0-5 min",
    Naam: "Telefonisch consult kort",
    Code: "TK",
  },
  {
    Categorie: "Consult",
    Subcategorie: "5-20 min",
    Naam: "Telefonisch consult normaal",
    Code: "TN",
  },
  {
    Categorie: "Consult",
    Subcategorie: "> 20 min",
    Naam: "Telefonisch consult dubbel",
    Code: "T2",
  },
  {
    Categorie: "Consult",
    Subcategorie: "0-5 min",
    Naam: "E-consult kort",
    Code: "EK",
  },
  {
    Categorie: "Consult",
    Subcategorie: "5-20 min",
    Naam: "E-consult normaal",
    Code: "EN",
  },
  {
    Categorie: "Consult",
    Subcategorie: "> 20 min",
    Naam: "E-consult dubbel",
    Code: "E2",
  },
  {
    Categorie: "Consult",
    Subcategorie: "0",
    Naam: "Niet verschenen zonder bericht",
    Code: "NVZB",
  },

  // --------------------
  // Consult Niet Vast
  // --------------------
  {
    Categorie: "ConsultNietVast",
    Subcategorie: "0-5 min",
    Naam: "Consult Passant Kort",
    Code: "CPK",
  },
  {
    Categorie: "ConsultNietVast",
    Subcategorie: "5-20 min",
    Naam: "Consult Passant Normaal",
    Code: "CPN",
  },
  {
    Categorie: "ConsultNietVast",
    Subcategorie: "> 20 min",
    Naam: "Consult Passant Dubbel",
    Code: "CP2",
  },
  {
    Categorie: "ConsultNietVast",
    Subcategorie: "0-5 min",
    Naam: "Consult Militair Kort",
    Code: "CMK",
  },
  {
    Categorie: "ConsultNietVast",
    Subcategorie: "5-20 min",
    Naam: "Consult Militair Normaal",
    Code: "CMN",
  },
  {
    Categorie: "ConsultNietVast",
    Subcategorie: "> 20 min",
    Naam: "Consult Militair Dubbel",
    Code: "CM2",
  },
  {
    Categorie: "ConsultNietVast",
    Subcategorie: "0-5 min",
    Naam: "Consult gemoedsbezwaarde Kort",
    Code: "CBK",
  },
  {
    Categorie: "ConsultNietVast",
    Subcategorie: "5-20 min",
    Naam: "Consult gemoedsbezwaarde Normaal",
    Code: "CBN",
  },
  {
    Categorie: "ConsultNietVast",
    Subcategorie: "> 20 min",
    Naam: "Consult gemoedsbezwaarde Dubbel",
    Code: "CB2",
  },

  // --------------------
  // Visite
  // --------------------
  {
    Categorie: "Visite",
    Subcategorie: "< 20 min",
    Naam: "Visite intensieve zorg",
    Code: "VIT",
  },
  {
    Categorie: "Visite",
    Subcategorie: "> 20 min",
    Naam: "Visite intensieve zorg dubbel",
    Code: "VIT2",
  },
  {
    Categorie: "Visite",
    Subcategorie: "< 20 min",
    Naam: "ELV",
    Code: "V",
  },
  {
    Categorie: "Visite",
    Subcategorie: "> 20 min",
    Naam: "ELV dubbel",
    Code: "V2",
  },
  {
    Categorie: "Visite",
    Subcategorie: "< 20 min",
    Naam: "Visite",
    Code: "V",
  },
  {
    Categorie: "Visite",
    Subcategorie: "> 20 min",
    Naam: "Visite dubbel",
    Code: "V2",
  },

  // --------------------
  // Medische verrichtingen
  // --------------------
  {
    Categorie: "Medische verrichting",
    Subcategorie: "niet-tijdgebonden",
    Naam: "Ambulante compressie therapie",
    Code: "COM",
  },
  {
    Categorie: "Medische verrichting",
    Subcategorie: "niet-tijdgebonden",
    Naam: "Therapeutische injectie Cyriax",
    Code: "COR",
  },
  {
    Categorie: "Medische verrichting",
    Subcategorie: "niet-tijdgebonden",
    Naam: "IUD inbrengen",
    Code: "IUD",
  },
  {
    Categorie: "Medische verrichting",
    Subcategorie: "niet-tijdgebonden",
    Naam: "MRSA screening",
    Code: "MRSA",
  },
  {
    Categorie: "Medische verrichting",
    Subcategorie: "niet-tijdgebonden",
    Naam: "Urine katheter plaatsen",
    Code: "KAT",
  },
  {
    Categorie: "Medische verrichting",
    Subcategorie: "niet-tijdgebonden",
    Naam: "Verwijderen ingegroeide nagel",
    Code: "CHI",
  },
  {
    Categorie: "Medische verrichting",
    Subcategorie: "niet-tijdgebonden",
    Naam: "Wratten aanstippen met stikstof",
    Code: "STI",
  },
  {
    Categorie: "Medische verrichting",
    Subcategorie: "niet-tijdgebonden",
    Naam: "Verwijderen spiraal",
    Code: "IUDV",
  },
  {
    Categorie: "Medische verrichting",
    Subcategorie: "niet-tijdgebonden",
    Naam: "Verwijderen huidnaevus",
    Code: "CHI",
  },
  {
    Categorie: "Medische verrichting",
    Subcategorie: "niet-tijdgebonden",
    Naam: "Geheugentest",
    Code: "MMSE",
  },

  // --------------------
  // M&I
  // --------------------
  {
    Categorie: "M&I",
    Subcategorie: "Ouderenzorg",
    Naam: "Polyfarmacie evaluatie",
    Code: "MIPOLY",
  },

  // --------------------
  // Overig diagnostiek
  // --------------------
  {
    Categorie: "Overig",
    Subcategorie: "Diagnostiek",
    Naam: "CRP test",
    Code: "CRPC",
  },
  {
    Categorie: "Overig",
    Subcategorie: "Diagnostiek",
    Naam: "Glucose test",
    Code: "BLS",
  },
  {
    Categorie: "Overig",
    Subcategorie: "Diagnostiek",
    Naam: "ECG",
    Code: "ECG",
  },
  {
    Categorie: "Overig",
    Subcategorie: "Diagnostiek",
    Naam: "Holter",
    Code: "HOLT",
  },

  // --------------------
  // POH-S
  // --------------------
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "CVRM fysiek",
    Code: "CCV",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "CVRM Telefonisch",
    Code: "TCV",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "CVRM E-consult",
    Code: "ECV",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "CVRM Visite",
    Code: "VCV",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "CVRM fysiek",
    Code: "C2CV",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "CVRM Telefonisch",
    Code: "T2CV",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "CVRM E-consult",
    Code: "E2CV",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "CVRM Visite",
    Code: "V2CV",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "DM fysiek",
    Code: "CDM",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "DM Telefonisch",
    Code: "TDM",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "DM E-consult",
    Code: "EDM",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "DM Visite",
    Code: "VDM",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "DM fysiek",
    Code: "C2DM",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "DM Telefonisch",
    Code: "T2DM",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "DM E-consult",
    Code: "E2DM",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "DM Visite",
    Code: "V2DM",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "Astma Fysiek",
    Code: "CAS",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "Astma Telefonisch",
    Code: "TAS",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "Astma E-consult",
    Code: "EAS",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "Astma Visite",
    Code: "VAS",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "Astma Fysiek",
    Code: "C2AS",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "Astma Telefonisch",
    Code: "T2AS",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "Astma E-consult",
    Code: "E2AS",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "Astma Visite",
    Code: "V2AS",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "COPD Fysiek",
    Code: "CCO",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "COPD Telefonisch",
    Code: "TCO",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "COPD E-consult",
    Code: "ECO",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "COPD Visite",
    Code: "VCO",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "COPD Fysiek",
    Code: "C2CO",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "COPD Telefonisch",
    Code: "T2CO",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "COPD E-consult",
    Code: "E2CO",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "COPD Visite",
    Code: "V2CO",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "Ouderenzorg Fysiek",
    Code: "COZ",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "Ouderenzorg Telefonisch",
    Code: "TOZ",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "Ouderenzorg E-consult",
    Code: "EOZ",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "5-20 min",
    Naam: "Ouderenzorg Visite",
    Code: "VO",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "Ouderenzorg Fysiek",
    Code: "C2OZ",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "Ouderenzorg Telefonisch",
    Code: "T2OZ",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "Ouderenzorg E-consult",
    Code: "E2OZ",
  },
  {
    Categorie: "POH-S",
    Subcategorie: "> 20 min",
    Naam: "Ouderenzorg Visite",
    Code: "V2O",
  },

  // --------------------
  // Materialen
  // --------------------
  {
    Categorie: "Materiaal",
    Subcategorie: "Verbruik",
    Naam: "Minim oxybuprocaine",
    Code: "OXY",
  },
  {
    Categorie: "Materiaal",
    Subcategorie: "Verbruik",
    Naam: "Oogboring",
    Code: "OOGB",
  },
  {
    Categorie: "Materiaal",
    Subcategorie: "Verbruik",
    Naam: "Laboratorium kosten",
    Code: "L",
  },
  {
    Categorie: "Materiaal",
    Subcategorie: "Verbruik",
    Naam: "Teststrip bloedsuiker",
    Code: "BLS",
  },
  {
    Categorie: "Materiaal",
    Subcategorie: "Verbruik",
    Naam: "Dipslide",
    Code: "DIP",
  },
  {
    Categorie: "Materiaal",
    Subcategorie: "Verbruik",
    Naam: "Atraumatisch hechtmateriaal",
    Code: "HM",
  },
  {
    Categorie: "Materiaal",
    Subcategorie: "Verbruik",
    Naam: "ECG diagnostiek",
    Code: "ECG",
  },
  {
    Categorie: "Materiaal",
    Subcategorie: "Verbruik",
    Naam: "Materiaalkosten CRP-test",
    Code: "CRPC",
  },
];

export default declaratiecodes;