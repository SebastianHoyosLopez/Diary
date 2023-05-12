import React, { useState } from "react";
import TableGlobal from "../tables/TableGlobal";

const Dropdown = ({ users }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown-menu">
      {users.map((user) => (
        <div key={user.id}>
          <div onClick={toggleDropdown}>{user.name}</div>
        </div>
        
      ))}
      {isOpen && (
        <TableGlobal datos={users}/>
      )}
    </div>
  );
};

export default Dropdown;
