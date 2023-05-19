import React, { useState } from "react";

import "./table.css";
import TableGlobal from "./TableGlobal";

function ContainerData({
  datos,
  setDatos,
  setCurrentPage,
  currentPage,
  elementsPerPage,
}) {
  const [openDelete, setOpenDelete] = useState(false);
  const [tablaDatos, setTablaDatos] = useState([]);

  const handleDeleteConfirm = (id) => {
    fetch(`http://localhost:3000/serenatas/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al realizar la solicitud!");
        }
        const newData = tablaDatos.filter((dato) => dato.id !== id);
        setTablaDatos(newData);
        set(newData);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    setOpenDelete(false);
  };

  const columns = [
    { name: "Fecha" },
    { name: "Hora" },
    { name: "Municipio" },
    { name: "Descripción" },
    { name: "Encargado" },
    { name: "Acción" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TableGlobal
        datos={datos}
        setDatos={setDatos}
        Delete={handleDeleteConfirm}
        setOpenDelete={setOpenDelete}
        openDelete={openDelete}
        columns={columns}
      />
      <div>
        <button
          disabled={currentPage <= 0 && true}
          onClick={() =>
            setCurrentPage(
              currentPage >= 5
                ? currentPage - elementsPerPage
                : (currentPage = 0)
            )
          }
        >
          Anterior
        </button>
        <button
          disabled={datos.length < elementsPerPage && true}
          onClick={() => setCurrentPage(currentPage + elementsPerPage)}
        >
          siguiente
        </button>
      </div>
    </div>
  );
}

export default ContainerData;
