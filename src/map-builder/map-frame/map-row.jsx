import React from 'react';

const MapRow = ({rowArray}) => {
  return (<div className='map-row'>
    {rowArray.map((tile,index) => {
      return <div>index</div>
    })}
  </div>)
}

export default MapRow;
