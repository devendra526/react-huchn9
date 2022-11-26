import React from 'react';

const ShowApiData = (props) => {
  return (
    <div>
      {props.users.map((data, i) => {
        return (
          <div>
            {data.first_name}
            {data.last_name}:{data.email}
          </div>
        );
      })}
    </div>
  );
};
export default ShowApiData;
