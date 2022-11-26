import React from 'react';
import ShowApiData from './ShowApiData';

const ApiExample = () => {
  const [users, setUsers] = React.useState([]);

  const getUsers = () => {
    let url = 'https://reqres.in/api/users?page=2';
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setUsers(resp.data));
  };

  React.useEffect(() => {
    getUsers();
  });

  return (
    <div>
      <h2>User Data</h2>
      <ShowApiData users={users} />
    </div>
  );
};
export default ApiExample;
