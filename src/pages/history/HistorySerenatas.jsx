import React, { useEffect, useState } from 'react'
import Table from '../../components/tables/Table'

const Create = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/serenatas/History')
      .then(res => {
        if(!res.ok) {
          throw new Error("Error al realizar la solicitud!");
        }
        res.json()
      })
      .then(response => {
        setHistory(response)
      })
  }, [])

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Historico serenatas</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Table datos={history} />
      </div>
    </div>
  )
}

export default Create