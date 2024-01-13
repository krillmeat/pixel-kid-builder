import PieceRow from "./piece-row";
import './piece-builder.css';

const PieceFrame = () => {
  return <div className='piece-frame'>
    <PieceRow />
    <PieceRow />
    <PieceRow />
    <PieceRow />
    <PieceRow />
    <PieceRow />
    <PieceRow />
    <PieceRow />
  </div>
}

export default PieceFrame;