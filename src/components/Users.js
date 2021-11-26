import React from 'react';
import UserInfo from './UserInfo';

 
const Users = ({ users, loading }) => {
  if (loading) {
    return <h2> Loading...</h2>;
  }
  return (
    <div className='info'>
      <div className='row'>
        {users.map((user, id) => (
          <div className='col col-xl-4 col-md-6 col-sm-12' id='plate' key={id}>
            <UserInfo user={user} />
          </div>
        ))}
      </div>
    </div> 
  );
};
   
export default Users;