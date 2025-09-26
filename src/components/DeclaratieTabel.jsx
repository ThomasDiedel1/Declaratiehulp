import React, { useState } from "react";
import declaratiecodes from "./declaratiecodes.tsx";

const DeclaratieTabel = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCodes = declaratiecodes.filter((code) =>
    Object.values(code).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Declaratiecodes Overzicht</h2>
      <input
        type="text"
        placeholder="Zoek op categorie, subcategorie, naam of code..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Categorie</th>
            <th className="border border-gray-300 px-4 py-2">Subcategorie</th>
            <th className="border border-gray-300 px-4 py-2">
              Naam verrichting
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Verrichtingcode
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredCodes.map((code, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">
                {code.Categorie}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {code.Subcategorie}
              </td>
              <td className="border border-gray-300 px-4 py-2">{code.Naam}</td>
              <td className="border border-gray-300 px-4 py-2">{code.Code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeclaratieTabel;
