import React, { useState } from "react";
import Modal from "react-modal";

import "./table.css";
import ConfirmacionModal from "../modal/confirmacionModal";

function Tabla({ datos, set }) {
  const [elementoEliminar, setElementoEliminar] = useState(null);

  const handleDeleteClick = (id) => {
    setElementoEliminar(id);
  };

  const handleDeleteConfirm = (id) => {
    fetch(`http://localhost:3001/serenatas/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al realizar la solicitud!");
        }
        const newData = datos.filter((dato) => dato.id !== id);
        set(newData);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Fecha 📆</th>
          <th>Hora ⏰</th>
          <th>Municipio 🌆</th>
          <th>Lugar ۩</th>
          <th>Nombre 🐵</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {datos.map((dato) => (
          <tr key={`${dato.date}-${dato.hour}`}>
            <td>{dato.date}</td>
            <td>{dato.hour}</td>
            <td>{dato.municipality}</td>
            <td>{dato.place}</td>
            <td>{dato.name}</td>
            <td>
              {set ? (
                <button onClick={() => handleDeleteClick(dato.id)} id="trash">
                  Eliminar
                </button>
              ) : (
                ""
              )}
            </td>
          </tr>
        ))}
      </tbody>
      <ConfirmacionModal
        isOpen={elementoEliminar !== null}
        onClose={() => setElementoEliminar(null)}
        onConfirm={() => {
          handleDeleteConfirm(elementoEliminar);
          setElementoEliminar(null);
        }}
      />
    </table>
  );
}

export default Tabla;
