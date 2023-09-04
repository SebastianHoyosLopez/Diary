import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./layout.css";
import { MyContext } from "../../context/AuthContext";

const Layout = () => {
  const { isLoggedIn } = useContext(MyContext);

  return (
    <div>
      <nav className="navbar">
        <ul className="menu">
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/">Agenda</Link>
              </li>
              {/* <li>
                <Link to="/Responsibles">Encargados</Link>
              </li>
              <li>
                <Link to="/history">Historial</Link>
              </li> */}
              <li>
                <Link to="/profile">Perfil</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">Agenda</Link>
              </li>
              <li>
                <Link to="/Responsibles">Encargados</Link>
              </li>
              <li>
                <Link to="/history">Historial</Link>
              </li>
            </>

          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
