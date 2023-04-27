import React, { useState } from "react";

import "./table.css";
import ConfirmationModal from "../modal/ConfirmationModal";
import ModalEdit from "../modal/ModalEdit";

function Tabla({ datos, set }) {
  const [elementoEliminar, setElementoEliminar] = useState(null);
  const [selectElement, setSelectElement] = useState(null);

  const handleDeleteClick = (id) => {
    setElementoEliminar(id);
  };

  const handleRowClick = (data) => {
    setSelectElement(data);
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
          <th>Cantida: {datos.length}</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((dato) => (
          <tr key={dato.id}>
            <td>{dato.date}</td>
            <td>{dato.hour}</td>
            <td>{dato.municipality}</td>
            <td>{dato.place}</td>
            <td>{dato.name}</td>
            <td>
              {set ? (
                <>
                  <button onClick={() => handleDeleteClick(dato.id)}>
                    Eliminar
                  </button>
                  <button onClick={() => handleRowClick(dato)}>Editar</button>
                </>
              ) : (
                ""
              )}
            </td>
          </tr>
        ))}
      </tbody>
      <ConfirmationModal
        isOpen={elementoEliminar !== null}
        onClose={() => setElementoEliminar(null)}
        onConfirm={() => {
          handleDeleteConfirm(elementoEliminar);
          setElementoEliminar(null);
        }}
      />
      {/* <ModalEdit
        isOpen2={selectElement}
        onClose={() => setSelectElement(null)}
        data={selectElement}
        set={set}
        db={datos}
      /> */}
    </table>
  );
}

export default Tabla;
