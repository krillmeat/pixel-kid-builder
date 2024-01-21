import React, {useContext} from 'react';
import { ColorChoiceContext, PieceMatrixContext } from "./piece-builder"
import { COLOR_LIST } from './piece-menu/color-picker';
import { duplicatePieceMatrix } from './piece-builder.util';

const Pixel = ({row,col}) => {

  const [currentColor] = useContext(ColorChoiceContext);
  const [pieceMatrix,setPieceMatrix] = useContext(PieceMatrixContext);
  const clickPixel = e => { 
    let dupeMatrix = duplicatePieceMatrix(pieceMatrix);
        dupeMatrix[row][col] = currentColor + 1;
    setPieceMatrix(dupeMatrix);
   }

  return <div className="pixel" onClick={clickPixel} style={{backgroundColor: `#${COLOR_LIST[pieceMatrix[row][col]-1]}`}} ></div>
}

export default Pixel;
