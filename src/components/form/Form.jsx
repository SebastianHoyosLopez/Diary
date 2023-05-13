import React, { useState } from "react";
import "./form.css";
import axios from "axios";

const Responsibles = [
  { name: "Henry", code: 2 },
  { name: "Tatan", code: 4 },
  { name: "Alex", code: 3 },
  { name: "Camilo", code: 6 },
  { name: "Hugo", code: 7 },
];

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
  "Guatape",
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
  "Santuario",
];

function Form({ setDb, db, order, onClose }) {
  const [date, setDate] = useState(order ? order.date : "");
  const [hour, setHour] = useState(order ? order.hour : "");
  const [description, setDescription] = useState(
    order ? order.description : ""
  );
  const [responsibleOfId, setResponsibleOfId] = useState(
    order ? order.responsibleOfId : null
  );
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

    const data = {
      date,
      hour,
      description,
      responsibleOfId: parseInt(responsibleOfId),
      municipality,
    };

    if (order) {
      axios
        .put(`http://localhost:3000/serenatas/${order.id}`, data)
        .then((response) => {
          setDb(
            db.map((item) => (item.id === order.id ? response.data : item))
          );
          setDate("");
          setHour("");
          setDescription("");
          setResponsibleOfId("");
          setMunicipality("");
          onClose();
        })
        .catch((error) => console.log(error));
    } else {
      console.log(data);
      axios
        .post("http://localhost:3000/serenatas", data)
        .then((response) => {
          setDb([...db, response.data]);
          setDate("");
          setHour("");
          setDescription("");
          setResponsibleOfId("");
          setMunicipality("");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "4rem",
        marginRight: "1rem",
        marginTop: "-3rem",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Agendar</h1>
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
          value={description}
          placeholder="Descripción de lugar"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <select
          value={responsibleOfId != null ? responsibleOfId : ""}
          onChange={(e) => setResponsibleOfId(e.target.value)}
        >
          <option value="">Selecione Encargado ----</option>
          {Responsibles.map((responsible) => (
            <option key={responsible.code} value={responsible.code}>
              {responsible.name}
            </option>
          ))}
        </select>
        <br />
        <select
          value={municipality != null ? municipality : ""}
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
    </div>
  );
}

export default Form;
