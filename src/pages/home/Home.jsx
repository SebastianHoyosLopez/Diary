import React, { useContext, useEffect, useState } from "react";
import ContainerData from "../../components/tables/ContainerData";
import { MyContext } from "../../context/AuthContext";
import LoginForm from "../../components/loginForm/LoginForm";

const Home = () => {
  const {
    handleSubmit,
    handleChange,
    email,
    password,
    userInfo,
    setEmail,
    setPassword,
    isLoggedIn,
    handleLogout,
  } = useContext(MyContext);

  const [db, setDb] = useState([]);
  const [dbTotal, setDbTotal] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [elementsPerPage, setElementsPerPage] = useState(15);

  useEffect(() => {
    fetch(
      `http://localhost:3000/serenatas`
    )
      .then((res) => res.json())
      .then((response) => {
        setDbTotal(response);
      });
  }, [])

  // useEffect(() => {
  //   fetch(
  //     `http://localhost:3000/serenatas?limit=${elementsPerPage}&offset=${currentPage}`
  //   )
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setDb(response);
  //     });
  // }, [currentPage, elementsPerPage]);

  const cantidadElementos = dbTotal.length;
  const totalPages = Math.ceil(cantidadElementos / elementsPerPage);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* {isLoggedIn ? (
        <div style={{ display: "flex" }}>
          <div>
            <h1>
              inicio de sesion completado {userInfo.user.email} -
              {userInfo.user.role}
            </h1>
            <button onClick={() => handleLogout()}>Cerrar sesión</button>
          </div>
          <div>
            <h2 style={{ textAlign: "center" }}>
              Serenatas programadas: {cantidadElementos}
            </h2>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <ContainerData
                setDatos={setDb}
                datos={db}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                elementsPerPage={elementsPerPage}
              />
            </div>
            <p style={{ textAlign: "center" }}>
              Paginas: {totalPages}--- Pagina actual: {currentPage}
            </p>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginRight: "auto", marginLeft: "auto" }}>
          <LoginForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        </div>
      )} */}
      <div style={{ display: "flex", flexDirection: "column", }} >
        <h2 style={{ textAlign: "center" }}>
          Serenatas programadas: {cantidadElementos}
        </h2>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <ContainerData
            setDatos={setDbTotal}
            datos={dbTotal}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            elementsPerPage={elementsPerPage}
          />
        </div>
        <p style={{ textAlign: "center" }}>
          Paginas: {totalPages}--- Pagina actual: {currentPage}
        </p>
      </div>
    </div>
  );
};

export default Home;
