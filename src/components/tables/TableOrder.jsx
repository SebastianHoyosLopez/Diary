import React, { useState } from "react";
import './table.css'

function Tabla({ datos, setDb }) {
  const [orden, setOrden] = useState("asc");

  const sortedData = datos.sort((a, b) => {
    if (orden === "asc") {
      return new Date(`${a.fecha}T${a.hora}`) - new Date(`${b.fecha}T${b.hora}`);
    } else {
      return new Date(`${b.fecha}T${b.hora}`) - new Date(`${a.fecha}T${a.hora}`);
    }
  });

  const handleDeleteClick = (id) => {
    const newData = datos.filter((dato) => `${dato.date}-${dato.hour}`!== id)
    setDb(newData)
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Municipio</th>
          <th>Lugar</th>
          <th>Nombre</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((dato) => (
          <tr key={`${dato.date}-${dato.hour}`}>
            <td>{dato.date}</td>
            <td>{dato.hour}</td>
            <td>{dato.municipality}</td>
            <td>{dato.place}</td>
            <td>{dato.name}</td>
            <td>
              <button onClick={() => handleDeleteClick(`${dato.date}-${dato.hour}`)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;
