import React, { useEffect, useState } from "react";
import Form from "../../components/form/Form";
import ContainerData from "../../components/tables/ContainerData";

const Home = () => {
  const [db, setDb] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/serenatas')
      .then((res) => res.json())
      .then((response) => {
        setDb(response)
      })
  }, [])

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Horarios serenatas Cantidad de serenatas: {db.length}</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Form setDb={setDb} db={db} />
        <ContainerData set={setDb} datos={db} />
      </div>
    </div>
  );
};

export default Home;
