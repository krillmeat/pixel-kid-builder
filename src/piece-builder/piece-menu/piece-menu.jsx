import React, { useContext } from "react";
import ColorPicker from "./color-picker";
import { ColorChoiceContext } from "../piece-builder";

const PieceMenu = () => {
  const [currentColor] = useContext(ColorChoiceContext);
  return <div className='piece-menu'>
    {currentColor}
    <ColorPicker />
  </div>
}

export default PieceMenu;