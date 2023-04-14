import React, { useState } from "react";
import FormOrder from "../../components/tables/FormOrder";
import TableOrder from "../../components/tables/TableOrder";

const Home = () => {
  const [db, setDb] = useState([]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Horarios serenatas</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <FormOrder setDb={setDb} db={db} />
        <TableOrder setDb={setDb} datos={db} />
      </div>
    </div>
  );
};

export default Home;
