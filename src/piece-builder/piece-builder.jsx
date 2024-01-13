import React, {useState} from "react";
import PieceFrame from "./piece-frame";
import PieceMenu from "./piece-menu/piece-menu";

export const ColorChoiceContext = React.createContext();

const PieceBuilder = () => {
  const [currentColor,setCurrentColor] = useState(0);
  return <div className='piece-builder'>
    <ColorChoiceContext.Provider value={[currentColor,setCurrentColor]}>
      <PieceMenu />
      <div className="main"><PieceFrame /></div>
    </ColorChoiceContext.Provider>
  </div>
}

export default PieceBuilder;
