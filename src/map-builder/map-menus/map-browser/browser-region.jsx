import React from 'react';
import DB from '../../../DB/root.db';

const BrowserRegion = ({region}) => {

  const setMap = mapName => {
    console.log("Opening Map : ",mapName);
  }

  return (<div className='region'>
    <button>{region}</button>
    <div className='list-wrap'>
      <ul>
        {Object.keys(DB.MAPS[region]).map( map =>{
          let mapName = DB.MAPS[region][map].NAME;
          return <li onClick={()=>{setMap(mapName)}}>{mapName}</li>
        })
        }
      </ul>
    </div>
  </div>)
}


export default BrowserRegion;
