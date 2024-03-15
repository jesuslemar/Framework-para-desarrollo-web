import React, { useState, useEffect } from 'react';
import './App.css';

import NFLTable from './components/NFLTable';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching: ', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>loading Data...</div>;
  }

  return (
    <div>
      <h1 className='titulo'>NFL slope chart</h1>
      <div>
        <h2>Lists of All Earrings</h2>
        <h3>Only ID</h3>
        <NFLTable columns={[{ Header: 'ID', accessor: 'id' }]} data={data} />

        <h3>ID and Title</h3>
        <NFLTable
          columns={[{ Header: 'ID', accessor: 'id' }, { Header: 'Title', accessor: 'title' }]}
          data={data}
        />

        <h3>Unresolved Pending</h3>
        <NFLTable
          columns={[{ Header: 'ID', accessor: 'id' }, { Header: 'Title', accessor: 'title' }]}
          data={data.filter(item => !item.completed)}
        />

        <h3>Solved Earrings</h3>
        <NFLTable
          columns={[{ Header: 'ID', accessor: 'id' }, { Header: 'Title', accessor: 'title' }]}
          data={data.filter(item => item.completed)}
        />

        <h3>ID and UserID</h3>
        <NFLTable
          columns={[{ Header: 'ID', accessor: 'id' }, { Header: 'UserID', accessor: 'userId' }]}
          data={data}
        />

        <h3>Resolved Pending with ID and UserID</h3>
        <NFLTable
          columns={[{ Header: 'ID', accessor: 'id' }, { Header: 'UserID', accessor: 'userId' }]}
          data={data.filter(item => item.completed)}
        />

        <h3>Unresolved Pending with ID and UserID</h3>
        <NFLTable
          columns={[{ Header: 'ID', accessor: 'id' }, { Header: 'UserID', accessor: 'userId' }]}
          data={data.filter(item => !item.completed)}
        />
      </div>
    </div>
  );
};

export default App;
