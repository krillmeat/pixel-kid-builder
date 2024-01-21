import PieceRow from "./piece-row";
import './piece-builder.css';

const PieceFrame = () => {
  return <div className='piece-frame'>
    <PieceRow row={0}/>
    <PieceRow row={1} />
    <PieceRow row={2} />
    <PieceRow row={3} />
    <PieceRow row={4} />
    <PieceRow row={5} />
    <PieceRow row={6} />
    <PieceRow row={7} />
  </div>
}

export default PieceFrame;