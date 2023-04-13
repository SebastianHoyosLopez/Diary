import React, { useState } from "react";
import TableOrder from './TableOrder'
import './form.css'

function FormOrder({setDb, db}) {
  // const [db, setDb] = useState([])

  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [lugar, setLugar] = useState("");
  const [nombre, setNombre] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { fecha, hora, lugar, nombre };
    console.log(data);
    setDb([...db, data])
    setFecha("");
    setHora("");
    setLugar("");
    setNombre("");
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Fecha:
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </label>
      <br />
      <label>
        Hora:
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />
      </label>
      <br />
      <label>
        Lugar:
        <input
          type="text"
          value={lugar}
          onChange={(e) => setLugar(e.target.value)}
        />
      </label>
      <br />
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
    {/* <TableOrder datos={db} /> */}
    </>
  );
}

export default FormOrder;
