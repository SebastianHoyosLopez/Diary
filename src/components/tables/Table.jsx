import React, { useEffect, useState } from "react";

import "./table.css";
import ConfirmationModal from "../modal/ConfirmationModal";
import ModalEdit from "../modal/ModalEdit";

function Tabla({ datos, set }) {
  const [elementoEliminar, setElementoEliminar] = useState(null);
  const [selectElement, setSelectElement] = useState(null);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [tablaDatos, setTablaDatos] = useState([]);

  useEffect(() => {
    setTablaDatos(datos);
  }, [datos, set, setTablaDatos]);


  const handleDeleteClick = (id) => {
    setElementoEliminar(id);
    setOpenDelete(true);
  };

  const handleRowClick = (data) => {
    setSelectElement(data);
    setOpen(true);
  };

  const handleDeleteConfirm = (id) => {
    fetch(`http://localhost:3001/serenatas/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al realizar la solicitud!");
        }
        const newData = tablaDatos.filter((dato) => dato.id !== id);
        setTablaDatos(newData)
        set(newData);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
      setOpenDelete(false);

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
          <th>Cantidad: {datos.length}</th>
        </tr>
      </thead>
      <tbody>
        {tablaDatos && tablaDatos.map((dato) => (
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
      {set && (
        <>
          <ConfirmationModal
            isOpen={openDelete}
            onClose={() => {
              setElementoEliminar(null);
              setOpenDelete(false);
            }}
            onConfirm={() => {
              handleDeleteConfirm(elementoEliminar);
              setElementoEliminar(null);
            }}
          />
          <ModalEdit
            isOpen={open}
            onClose={() => {
              setSelectElement(null);
              setOpen(false);
            }}
            data={selectElement}
            set={set}
            db={datos}
          />
        </>
      )}
    </table>
  );
}

export default Tabla;
