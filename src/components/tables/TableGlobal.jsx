import React, { useEffect, useState } from "react";
import ConfirmationModal from "../modal/ConfirmationModal";
import ModalEdit from "../modal/ModalEdit";

const TableGlobal = ({
  datos,
  set = null,
  Delete = null,
  setOpenDelete = null,
  openDelete = null,
  columns = [
    {name: "Fecha 📆"},
    {name: "Hora ⏰"},
    {name: "Municipio 🌆"},
    {name: "Descripción ۩"},
    {name: "Encargado 🐵"},
    {name: "Acción"},
  ],
}) => {
  const [elementoEliminar, setElementoEliminar] = useState(null);
  const [selectElement, setSelectElement] = useState(null);
  const [tablaDatos, setTablaDatos] = useState([]);
  const [open, setOpen] = useState(false);

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

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th>{column.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tablaDatos &&
          tablaDatos.map((dato) => (
            <tr key={dato.id}>
              <td>{dato.date}</td>
              <td>{dato.hour}</td>
              <td>{dato.municipality}</td>
              <td>{dato?.description}</td>
              <td>{dato?.responsibleOf?.name}</td>
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
              Delete(elementoEliminar);
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
};

export default TableGlobal;
