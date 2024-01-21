import React, { useContext, useEffect } from 'react';
import Piece from '../piece-builder/piece';
import { PiecePickerContext, TileMatrixContext } from './tile-builder';
import { duplicateTileMatrix } from './tile-builder.util';

const TileFrame = () => {
  const [tileMatrix,setTileMatrix] = useContext(TileMatrixContext);
  const [currentPiece] = useContext(PiecePickerContext);

  const setTile = (r,c) => {
    let matrix = duplicateTileMatrix(tileMatrix);
        matrix[r][c] = currentPiece;
    setTileMatrix(matrix);
  }

  return (<div className='tile-frame'>
    <div className='top'>
      <div onClick={()=>{setTile(0,0)}}><Piece scale={12} objKey={tileMatrix[0][0]} /></div>
      <div onClick={()=>{setTile(0,1)}}><Piece scale={12} objKey={tileMatrix[0][1]} /></div>
    </div>
    <div className='bottom'>
      <div onClick={()=>{setTile(1,0)}}><Piece scale={12} objKey={tileMatrix[1][0]} /></div>
      <div onClick={()=>{setTile(1,1)}}><Piece scale={12} objKey={tileMatrix[1][1]} /></div>
    </div>
  </div>)
}

export default TileFrame;
