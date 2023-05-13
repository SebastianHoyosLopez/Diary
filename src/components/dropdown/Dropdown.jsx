import React, { useState } from "react";
import TableGlobal from "../tables/TableGlobal";
import "./dropdown.css";

const Dropdown = ({ users }) => {
  const [isOpen, setIsOpen] = useState(
    users.reduce((acc, user) => ({ ...acc, [user.id]: false }), {})
  );

  const toggleDropdown = (userId) => {
    setIsOpen((prevIsOpen) => ({
      ...prevIsOpen,
      [userId]: !prevIsOpen[userId],
    }));
  };
  const columns = [
    { name: "Fecha 📆" },
    { name: "Hora ⏰" },
    { name: "Municipio 🌆" },
    { name: "Descripción ۩" },
  ];

  return (
    <div className="dropdown-menu">
        <h1>Encargados</h1>
      {users.map((user) => (
        <div key={user.id}>
          <div>
            <h4 onClick={() => toggleDropdown(user.id)}>{user.name}</h4>
            {isOpen[user.id] && (
              <TableGlobal columns={columns} datos={user.serenatas} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
