import React, { useContext } from 'react';
import { CurrentMapContext } from '../map-builder';
import './map-frame.css';

import DB from '../../DB/root.db';
import { duplicateMapMatrix } from '../map-builder.util';
import MapRow from './map-row';

const MapFrame = () => {
  const [currentMap] = useContext(CurrentMapContext);
  let MAP_MATRIX = duplicateMapMatrix(DB.MAPS.KANTO[0].MATRIX); //TODO - Hacked
  return (<div className='map-frame'>
    <div className='map'>
      {MAP_MATRIX.map((row,index) => {
        return <MapRow rowArray={row} key={'map-row-'+index} />
      })}
    </div>
  </div>)
}

export default MapFrame;
