import React from 'react';

const ApiExample = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then((resp) => resp.json())
      .then((resp) => setUsers(resp.data));
  });

  return (
    <div>
      <table border="1">
        <tr>
          <th colspan="3">User Data</th>
        </tr>
        {users.map((user, i) => {
          return (
            <div>
              <tr>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.email}</td>
              </tr>
            </div>
          );
        })}
      </table>
    </div>
  );
};
export default ApiExample;
