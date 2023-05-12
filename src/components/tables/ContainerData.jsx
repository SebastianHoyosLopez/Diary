import React, { useState } from "react";

import "./table.css";
import TableGlobal from "./TableGlobal";

function ContainerData({ datos, set }) {
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
    {name: "Fecha 📆"},
    {name: "Hora ⏰"},
    {name: "Municipio 🌆"},
    {name: "Descripción ۩"},
    {name: "Encargado 🐵"},
    {name: "Acción"},
  ]

  return (
    <TableGlobal
      datos={datos}
      set={set}
      Delete={handleDeleteConfirm}
      setOpenDelete={setOpenDelete}
      openDelete={openDelete}
      columns={columns}
    />
  );
}

export default ContainerData;
