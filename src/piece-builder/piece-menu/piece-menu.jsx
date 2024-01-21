import React, { useContext, useState } from "react";
import ColorPicker from "./color-picker";
import PiecePicker from "./piece-picker";
import { ColorChoiceContext } from "../piece-builder";
import PieceMenuView from "./piece-menu-view";

import './piece-menu.css';

const PieceMenu = () => {
  const [currentColor] = useContext(ColorChoiceContext);
  const [currentView,setCurrentView] = useState('single'); // single || quad
  return <div className='piece-menu'>
    <h3>Piece Builder Menu</h3>
    <PieceMenuView currentView={currentView} setCurrentView={setCurrentView}/>
    <ColorPicker />
    <PiecePicker />
  </div>
}

export default PieceMenu;
