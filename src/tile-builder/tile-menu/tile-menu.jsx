import React from 'react';
import './tile-menu.css';
import PiecePicker from '../../piece-builder/piece-menu/piece-picker';

const TileMenu = () => {
  return (<div className='tile-menu'>
    <h3>Tile Builder Menu</h3>
    <PiecePicker inTileBuilder={true} />
  </div>)
}

export default TileMenu;
