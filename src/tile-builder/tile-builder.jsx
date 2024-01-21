import React, { useState } from 'react';
import TileFrame from './tile-frame';
import './tile-builder.css';
import TileMenu from './tile-menu/tile-menu';
import { stringifyTileMatrix } from './tile-builder.util';

const EMPTY_TILE = [['GENERIC_WHITE','GENERIC_LIGHT'],['GENERIC_DARK','GENERIC_BLACK']];
export const TileMatrixContext = React.createContext();
export const PiecePickerContext = React.createContext();

const TileBuilder = () => {
  const [tileMatrix,setTileMatrix] = useState(EMPTY_TILE);
  const [currentPiece,setCurrentPiece] = useState('GENERIC_WHITE');

  const copyTileMatrixToClipboard = () => {
    let stringifiedTileMatrix = stringifyTileMatrix(tileMatrix);
    navigator.clipboard.writeText(stringifiedTileMatrix);
  }

  return (<div className='tile-builder'>
    <PiecePickerContext.Provider value={[currentPiece,setCurrentPiece]}>
      <TileMenu />
      <div className='main'>
      <TileMatrixContext.Provider value={[tileMatrix,setTileMatrix]}>
        <TileFrame />
      </TileMatrixContext.Provider>
      <button onClick={copyTileMatrixToClipboard}>Copy Tile Matrix</button>
      </div>
    </PiecePickerContext.Provider>
  </div>)
}

export default TileBuilder;
