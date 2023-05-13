import { useEffect, useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import Form from "../../components/form/Form";

const Responsibles = () => {
  const [users, setUsers] = useState([]);
  const [db, setDb] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/serenatas")
      .then((res) => res.json())
      .then((response) => {
        setDb(response);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/responsible-of/")
      .then((res) => res.json())
      .then((response) => {
        setUsers(response);
      });
  }, []);

  return (
    <div style={{ display: "flex", marginTop: "2rem"}}>
      <Form setDb={setDb} db={db} />
      <Dropdown users={users} />
    </div>
  );
};

export default Responsibles;
