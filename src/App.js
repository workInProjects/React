import React, { useState, useEffect } from 'react';
import Users from './components/Users';
import Search from  './components/Search';
import getUsers from './api/users';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []); 
  
  const loadUsers = () => {
    getUsers().then(result => {
      setUsers(result);
    });
  };
  
  return (
    <div className='app'>
      <Search onSearch={loadUsers}/>
      <div>
        <div className='container mt-5'>
          <Users users={users} />  
        </div>
      </div>
    </div>
  );
};

export default App;