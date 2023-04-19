import React, { useState } from "react";
import "./form.css";

const municipalitys = [
  "Abejorral",
  "Alejandría",
  "Argelia",
  "Cocorná",
  "El Carmen de Viboral",
  "El Santuario",
  "El Peñol",
  "Granada",
  "Guarne",
  "La Ceja",
  "La Unión",
  "Marinilla",
  "Nariño",
  "Rionegro",
  "San Carlos",
  "San Francisco",
  "San Luis",
  "San Rafael",
  "San Vicente",
];

function FormOrder({ setDb, db }) {
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [place, setPlace] = useState("");
  const [name, setName] = useState("");

  const [municipality, setMunicipality] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { date, hour, place, name, municipality };

    setDb([...db, data]);
    setDate("");
    setHour("");
    setPlace("");
    setName("");
    setMunicipality("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={date}
          placeholder="fecha"
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <input
          type="time"
          value={hour}
          placeholder="Hora"
          onChange={(e) => setHour(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={place}
          placeholder="Descriptión de lugar"
          onChange={(e) => setPlace(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={name}
          placeholder="Nombre quien contrata"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <select
          value={municipality}
          onChange={(e) => setMunicipality(e.target.value)}
        >
          <option value="">Seleccione un municipio ---</option>
          {municipalitys.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default FormOrder;
