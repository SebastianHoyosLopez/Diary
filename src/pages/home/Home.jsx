import React, { useEffect, useState } from "react";
import ContainerData from "../../components/tables/ContainerData";
import LoginForm from "../../components/loginForm/LoginForm";

const Home = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const [db, setDb] = useState([]);
  const [dbTotal, setDbTotal] = useState([])

  const [currentPage, setCurrentPage] = useState(0);
  const [elementsPerPage, setElementsPerPage] = useState(15);




  // useEffect(() => {
  //   fetch(
  //     `http://localhost:3000/serenatas`
  //   )
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setDbTotal(response);
  //     });
  // }, [])

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
  const totalPages = Math.ceil(cantidadElementos / elementsPerPage)

  return (
    <div style={{ display: "flex" }}>
      {
        isLoggedIn ? (
          <div style={{ display: 'flex' }}>
            <h1>inicio de sesion completado</h1>
            <div>
              <h2 style={{ textAlign: "center" }}>Serenatas programadas: {cantidadElementos}</h2>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <ContainerData
                  setDatos={setDb}
                  datos={db}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  elementsPerPage={elementsPerPage}
                />
              </div>
              <p style={{ textAlign: "center" }}>Paginas: {totalPages}--- Pagina actual: {currentPage}</p>

            </div>
          </div>
        ) : (
          <div>
            <LoginForm setLoggedIn={setLoggedIn} />
          </div>
        )
      }
    </div>
  );
};

export default Home;
