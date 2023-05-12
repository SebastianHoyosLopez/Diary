import { useEffect, useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";

const Responsibles = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/responsible-of/')
      .then((res) => res.json())
      .then((response) => {
        setUsers(response)
      })
  }, [])

  return (
    <>
      <Dropdown users={users} />
    </>
  );
};

export default Responsibles;
