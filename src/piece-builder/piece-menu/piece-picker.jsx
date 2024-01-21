import React, { useContext } from 'react';

import DB from '../../DB/root.db';
import Piece from '../piece';
import { PiecePickerContext } from '../../tile-builder/tile-builder';

const PiecePicker = ({inTileBuilder}) => {
  return (<div className='piece-picker'>
    <ul>
    {
      Object.keys(DB.PIECES).map((objKey,index) => {
        return (<li><Piece objKey={objKey} scale={4} inTileBuilder={inTileBuilder} /></li>)
      })
    }
    </ul>
  </div>)
}

export default PiecePicker;
