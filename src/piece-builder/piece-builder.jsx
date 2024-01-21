import React, {useState} from "react";
import PieceFrame from "./piece-frame";
import PieceMenu from "./piece-menu/piece-menu";
import { stringifyPieceMatrix } from "./piece-builder.util";

const EMPTY_MATRIX = [
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0]];

export const ColorChoiceContext = React.createContext();
export const PieceMatrixContext = React.createContext();

const PieceBuilder = () => {
  const [currentColor,setCurrentColor] = useState(0);
  const [pieceMatrix,setPieceMatrix] = useState(EMPTY_MATRIX);

  const copyPieceMatrixToClipboard = () => {
    let stringifiedPieceMatrix = stringifyPieceMatrix(pieceMatrix);
    navigator.clipboard.writeText(stringifiedPieceMatrix);
  }

  return <div className='piece-builder'>
    <ColorChoiceContext.Provider value={[currentColor,setCurrentColor]}>
      <PieceMenu />
      <div className="main">
        <PieceMatrixContext.Provider value={[pieceMatrix,setPieceMatrix]}><PieceFrame /></PieceMatrixContext.Provider>
        <button onClick={copyPieceMatrixToClipboard}>Copy Piece Matrix</button>
      </div>
    </ColorChoiceContext.Provider>
  </div>
}

export default PieceBuilder;
