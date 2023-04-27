import React, { useState } from "react";
import "./form.css";
import axios from "axios";

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

function Form({ setDb, db, order, onClose }) {
  const [date, setDate] = useState(order ? order.date : "");
  const [hour, setHour] = useState(order ? order.hour : "");
  const [place, setPlace] = useState(order ? order.place : "");
  const [name, setName] = useState(order ? order.name : "");
  const [municipality, setMunicipality] = useState(
    order ? order.municipality : ""
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const now = new Date();
    const selectedDateTime = new Date(`${date}T${hour}`);

    if (selectedDateTime <= now) {
      alert("Seleccione una fecha y hora válida en el futuro.");
      return;
    }

    const data = { date, hour, place, name, municipality };

    if (order) {
      axios
        .put(`http://localhost:3001/serenatas/${order.id}`, data)
        .then((response) => {
          setDb(
            db.map((item) => (item.id === order.id ? response.data : item))
          );
          setDate("");
          setHour("");
          setPlace("");
          setName("");
          setMunicipality("");
          onClose()
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .post("http://localhost:3001/serenatas", data)
        .then((response) => {
          setDb([...db, response.data]);
          setDate("");
          setHour("");
          setPlace("");
          setName("");
          setMunicipality("");

        })
        .catch((error) => console.log(error));
    }
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
          placeholder="Descripción de lugar"
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
          {municipalitys.map((municipality) => (
            <option key={municipality} value={municipality}>
              {municipality}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">{order ? "Actualizar" : "Guardar"}</button>
      </form>
    </>
  );
}

export default Form;