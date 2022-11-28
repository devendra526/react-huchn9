import React, { useState, useRef } from 'react';

const IncrDecr = () => {
  const userNameRef = useRef();
  const userAgeRef = useRef();
  const userCityRef = useRef();
  const [users, setUsers] = useState([
    { name: 'Dev', age: 33, city: 'Pune' },
    { name: 'Dev1', age: 44, city: 'Pune1' },
  ]);

  function handleSubmit() {
    const newData = [
      {
        name: userNameRef.current.value,
        age: userAgeRef.current.value,
        city: userCityRef.current.value,
      },
    ];

    return setUsers((Data) => [...Data, ...newData]);
  }
  const handleDelete = (index) => {
    users.splice(index, 1);
    setUsers(...users);
  };
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Action</th>
        </tr>
        {users.map((data, i) => (
          <tr key={i}>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.city}</td>
            <td>
              <button onClick={() => handleDelete(i)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
      <form className="addForm" onSubmit={handleSubmit}>
        <input type="text" ref={userNameRef} />
        <input type="text" ref={userAgeRef} />
        <input type="text" ref={userCityRef} /> <br />
        <button typr="submit">Add Data</button>
      </form>
    </div>
  );
};
export default IncrDecr;
