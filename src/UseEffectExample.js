import React from 'react';

const UseEffectExample = () => {
  const [name, setName] = React.useState('Devendra');
  const [age, setAge] = React.useState(35);
  const labelRef = React.useRef();

  const updateName = () => {
    setName((name) => 'Devendra Chaudhari');
    labelRef.current.style.color = 'red';
  };
  const updateAge = () => {
    setAge((age) => 40);
  };

  React.useEffect(() => {
    console.log('Use Effect without Params');
  });

  React.useEffect(() => {
    console.log('On component load only');
  }, []);

  React.useEffect(() => {
    console.log('On name update component load only');
  }, [name, age]);

  return (
    <div>
      <p>
        My Name is <label ref={labelRef}> {name}</label>
      </p>
      <p>My age is {age}</p>

      <button onClick={updateName}>Update Name</button>
      <button onClick={updateAge}>Update Age</button>
    </div>
  );
};

export default UseEffectExample;
