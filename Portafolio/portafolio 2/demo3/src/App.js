import React, { useState, useEffect } from 'react';
import './App.css';

import DataTable from './components/DataTable';

const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dinosaur-facts-api.shultzlab.com/dinosaurs')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nombre',
        accessor: 'Name',
      },
      {
        Header: 'Descripcion',
        accessor: 'Description',
      },
    ],
    []
  );

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div id='js'>
      <h1 className='titulo'>Dinosaurios XD</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default App;
