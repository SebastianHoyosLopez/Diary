import React, { useState } from 'react'
import FormOrder from '../../components/tables/FormOrder'
import TableOrder from '../../components/tables/TableOrder'

const Home = () => {
  const [db, setDb] = useState([])

  
  return (
    <div>
      <h2 style={{textAlign: "center"}}>Horarios serenatas</h2>
      <FormOrder setDb={setDb} db={db} />
      <TableOrder datos={db} />
    </div>
  )
}

export default Home