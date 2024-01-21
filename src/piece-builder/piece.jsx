import React, { useEffect, useRef, useContext } from 'react';
import DB from '../DB/root.db';
import { COLOR_LIST } from './piece-menu/color-picker';
import { PiecePickerContext } from '../tile-builder/tile-builder';

const isCurrentPiece = (thisPiece,currentPiece, inTileBuilder) => thisPiece === currentPiece && inTileBuilder;

const Piece = ({scale,objKey, inTileBuilder = false}) => {
  const [currentPiece,setCurrentPiece] = useContext(PiecePickerContext) || [{},()=>{}];
  const canvasRef = useRef(null);
  let PIECE = DB.PIECES[objKey];
  useEffect(()=>{
    if(!objKey) return;
    let canvas = canvasRef.current;
    let ctx = canvas.getContext('2d');

    for(let r = 0; r < PIECE.length; r++){
      for(let c =0; c < PIECE[r].length; c++){
        ctx.fillStyle = "#"+COLOR_LIST[PIECE[r][c]-1];
        ctx.fillRect(c*scale,r*scale,scale,scale);
      }
    }
    
  },[objKey]);

  const pickPiece = () => {
    if(!inTileBuilder) return;
    setCurrentPiece(objKey);
  }

  return (<div className={'piece '+(isCurrentPiece(objKey,currentPiece, inTileBuilder) && 'selected')} onClick={pickPiece}>
    <canvas ref={canvasRef} id={`piece-${objKey}`} width={8*scale} height={8*scale} />
  </div>)
}

export default Piece;
