import declaratiecodes from "./components/declaratiecodes";

/**
 * Zoek de omschrijving bij een declaratiecode
 */
function getOmschrijvingByCode(code) {
  if (!code) return "";
  const match = declaratiecodes.find((item) => item.Code === code);
  return match
    ? `${match.Naam} (${match.Categorie}${
        match.Subcategorie ? " - " + match.Subcategorie : ""
      })`
    : "";
}

/**
 * Haal een declaratiecode op uit de tabel op basis van de naam
 */
function getCodeByNaam(naam) {
  if (!naam) return null;
  const match = declaratiecodes.find((item) => item.Naam === naam);
  return match ? match.Code : null;
}

/**
 * Zorgprogramma mapping
 */
function mapZorgprogramma(zorgprogramma) {
  if (!zorgprogramma) return "";
  const lower = zorgprogramma.toLowerCase();
  if (lower.includes("cvrm")) return "CV";
  if (lower.includes("dm")) return "DM";
  if (lower.includes("astma")) return "AS";
  if (lower.includes("copd")) return "CO";
  if (lower.includes("ouder")) return "OZ";
  return "";
}

export function calculateResult(path, answers, lastAnswer) {
  let res = "";
  let code = null;

  // --------------------
  // CONSULT PAD
  // --------------------
  if (path === "Consult") {
    const vastePatiënt = answers[0]; // vraag 1
    const hulpvraag = answers[1]; // vraag 2
    const duur = answers[2]; // vraag 3
    const consultType = answers[3]; // vraag 4
    const verrichting = answers[5]; // vraag 6 (optioneel)

    // materiaal: altijd laatste antwoord checken
    const materialen = answers[answers.length - 1];

    if (vastePatiënt === "Ja" && hulpvraag === "Ja") {
      // basis tijdcode
      if (duur.includes("< 5")) code = "CK";
      else if (duur.includes("5") && duur.includes("20")) code = "CN";
      else if (duur.includes("20")) code = "C2";

      // consultvorm → mapping via declaratiecodes
      if (consultType?.toLowerCase().includes("telefonisch")) {
        if (code === "CK") code = "TK";
        else if (code === "CN") code = "TN";
        else if (code === "C2") code = "T2";
      } else if (consultType?.toLowerCase().includes("e-consult")) {
        if (code === "CK") code = "EK";
        else if (code === "CN") code = "EN";
        else if (code === "C2") code = "E2";
      }

      res = `${code} – ${getOmschrijvingByCode(code)}`;

      // verrichting toevoegen
      if (verrichting) {
        const verrichtingCode = getCodeByNaam(verrichting);
        if (verrichtingCode) {
          res += ` + ${verrichtingCode} – ${getOmschrijvingByCode(
            verrichtingCode
          )}`;
        } else {
          res += ` + Verrichting: ${verrichting}`;
        }
      }

      // materialen toevoegen (maar alleen als het geen ja/nee is)
      if (
        materialen &&
        materialen.toLowerCase() !== "ja" &&
        materialen.toLowerCase() !== "nee"
      ) {
        const materiaalLijst = Array.isArray(materialen)
          ? materialen
          : [materialen];

        materiaalLijst.forEach((m) => {
          const materiaalCode = getCodeByNaam(m);
          if (materiaalCode) {
            res += ` + ${materiaalCode} – ${getOmschrijvingByCode(
              materiaalCode
            )}`;
          } else {
            res += ` + Materiaal: ${m}`;
          }
        });
      }
    } else {
      res = "Geen declaratie: patiënt niet vast of geen hulpvraag.";
      code = null;
    }
  }

  // --------------------
  // CONSULT NIET VAST
  // --------------------
  else if (path === "ConsultNietVast") {
    const patientType = answers[0];   // vraag 1
    const duur = answers[1];          // vraag 2
    const consultType = answers[2];   // vraag 3
    const extra = answers[3];         // vraag 4

    // basiscode op patiëntType + duur
    if (patientType === "Passant") {
      if (duur.includes("<5")) code = "CPK";
      else if (duur.includes("5-20")) code = "CPN";
      else code = "CP2";
    } else if (patientType === "Militair") {
      if (duur.includes("<5")) code = "CMK";
      else if (duur.includes("5-20")) code = "CMN";
      else code = "CM2";
    } else if (patientType === "Gemoedsbezwaarde") {
      if (duur.includes("<5")) code = "CBK";
      else if (duur.includes("5-20")) code = "CBN";
      else code = "CB2";
    }

    res = `${code} – ${getOmschrijvingByCode(code)}`;

    // consultvorm (vraag 3) als tekst toevoegen
    if (consultType?.toLowerCase().includes("telefonisch")) {
      res += " (Telefonisch)";
    } else if (consultType?.toLowerCase().includes("e-consult")) {
      res += " (E-consult)";
    }

    // extra antwoord (vraag 4) altijd toevoegen
    if (extra) {
      const extraCode = getCodeByNaam(extra);
      if (extraCode) {
        res += ` + ${extraCode} – ${getOmschrijvingByCode(extraCode)}`;
      } else {
        res += ` + ${extra}`;
      }
    }
  }

  // --------------------
  // VISITE
  // --------------------
  else if (path === "Visite") {
    const duur = answers[0];
    const zorg = answers[1];

    if (zorg === "Intensieve zorg") code = "VIT";
    else if (zorg === "ELV") code = "VIT";
    else if (duur.includes("< 20")) code = "V";
    else code = "V2";

    res = `${code} – ${getOmschrijvingByCode(code)}`;
  }

  // --------------------
  // POH-S (volledig volgens declaratietabel)
  // --------------------
  else if (path === "POH-S") {
    const zorgprogramma = answers[0]; // bv. CVRM, DM, Astma, COPD, Ouderenzorg
    const consultType = answers[1];   // Fysiek, Telefonisch, E-consult, Visite
    const duur = answers[2];          // bv. "5-20 min" of "> 20 min"

    code = null;

    if (zorgprogramma && consultType && duur) {
      // korte consulten (5-20 min)
      if (duur.includes("5-20")) {
        if (consultType.toLowerCase().includes("fysiek"))
          code = "C" + mapZorgprogramma(zorgprogramma);
        else if (consultType.toLowerCase().includes("telefonisch"))
          code = "T" + mapZorgprogramma(zorgprogramma);
        else if (consultType.toLowerCase().includes("e-consult"))
          code = "E" + mapZorgprogramma(zorgprogramma);
        else if (consultType.toLowerCase().includes("visite"))
          code = "V" + mapZorgprogramma(zorgprogramma);
      }

      // lange consulten (>20 min)
      else if (
        duur.includes("> 20") ||
        duur.includes("20-") ||
        duur.toLowerCase().includes("meer") ||
        duur.includes("40")
      ) {
        if (consultType.toLowerCase().includes("fysiek"))
          code = "C2" + mapZorgprogramma(zorgprogramma);
        else if (consultType.toLowerCase().includes("telefonisch"))
          code = "T2" + mapZorgprogramma(zorgprogramma);
        else if (consultType.toLowerCase().includes("e-consult"))
          code = "E2" + mapZorgprogramma(zorgprogramma);
        else if (consultType.toLowerCase().includes("visite"))
          code = "V2" + mapZorgprogramma(zorgprogramma);
      }
    }

    res = code
      ? `${code} – ${getOmschrijvingByCode(code)}`
      : "Geen geldige combinatie voor POH-S.";
  }

  return { res, code };
}