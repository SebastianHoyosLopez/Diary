import React, { useEffect, useState } from "react";
import Form from "../../components/form/Form";
import Table from "../../components/tables/Table";

const Home = () => {
  const [db, setDb] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/serenatas')
      .then((res) => res.json())
      .then((response) => {
        setDb(response)
      })
  }, [])

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Horarios serenatas</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Form setDb={setDb} db={db} />
        <Table set={setDb} datos={db} />
      </div>
    </div>
  );
};

export default Home;
