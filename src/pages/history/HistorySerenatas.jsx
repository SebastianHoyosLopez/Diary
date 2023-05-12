import React, { useEffect, useState } from "react";
import ContainerData from "../../components/tables/ContainerData";
import TableGlobal from "../../components/tables/TableGlobal";

const Create = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/serenatas/history")
      .then((res) => res.json())
      .then((response) => {
        setHistory(response);
      });
  }, []);

  const columns = [
    { name: "Fecha 📆" },
    { name: "Hora ⏰" },
    { name: "Municipio 🌆" },
    { name: "Descripción ۩" },
    { name: "Encargado 🐵" },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Historico serenatas</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <TableGlobal datos={history} columns={columns} />
      </div>
    </div>
  );
};

export default Create;
