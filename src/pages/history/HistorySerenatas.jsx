import React, { useEffect, useState } from "react";
import ContainerData from "../../components/tables/ContainerData";
import TableGlobal from "../../components/tables/TableGlobal";

const Create = () => {
  const [history, setHistory] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [historyTotal, setHistoryTotal] = useState([])
  const [elementsPerPage, setElementsPerPage] = useState(15);

  useEffect(() => {
    fetch(`http://localhost:3000/serenatas/history`)
      .then((res) => res.json())
      .then((response) => {
        setHistoryTotal(response);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/serenatas/history?limit=${elementsPerPage}&offset=${currentPage}`)
      .then((res) => res.json())
      .then((response) => {
        setHistory(response);
      });
  }, [currentPage, elementsPerPage]);

  const columns = [
    { name: "Fecha 📆" },
    { name: "Hora ⏰" },
    { name: "Municipio 🌆" },
    { name: "Descripción ۩" },
    { name: "Encargado 🐵" },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Historico serenatas: {historyTotal.length}</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <TableGlobal datos={history} columns={columns} />
      </div>
      <button
          disabled={currentPage <= 0 && true}
          onClick={() =>
            setCurrentPage(
              currentPage >= 5
                ? currentPage - elementsPerPage
                : (currentPage)
            )
          }
        >
          Anterior
        </button>
        <button
          disabled={history.length < elementsPerPage && true}
          onClick={() => setCurrentPage(currentPage + elementsPerPage)}
        >
          siguiente
        </button>
    </div>
  );
};

export default Create;
