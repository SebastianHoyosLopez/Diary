import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="menu">
          <li>
            <Link to="/">Agenda</Link>
          </li>
          <li>
            <Link to="/Responsibles">Encargados</Link>
          </li>
          <li>
            <Link to="/history">Historial</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
