import React, { useState } from "react";

function Tabla({ datos }) {
  const [orden, setOrden] = useState("asc");

  const sortedData = datos.sort((a, b) => {
    if (orden === "asc") {
      return new Date(`${a.fecha}T${a.hora}`) - new Date(`${b.fecha}T${b.hora}`);
    } else {
      return new Date(`${b.fecha}T${b.hora}`) - new Date(`${a.fecha}T${a.hora}`);
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Lugar</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((dato) => (
          <tr key={`${dato.fecha}-${dato.hora}`}>
            <td>{dato.fecha}</td>
            <td>{dato.hora}</td>
            <td>{dato.lugar}</td>
            <td>{dato.nombre}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;
