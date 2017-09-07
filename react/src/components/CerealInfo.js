import React from 'react';

const CerealInfo = (props) => {
  return (
    <div className="CerealInfo">
        <h1>{props.name}</h1>
        <h3>{props.description}</h3>
    </div>
  )
}

export default CerealInfo;
