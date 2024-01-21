import Pixel from "./pixel";

const PieceRow = ({row}) => {
  return <div className='piece-row'>
    <Pixel row={row} col={0} />
    <Pixel row={row} col={1} />
    <Pixel row={row} col={2} />
    <Pixel row={row} col={3} />
    <Pixel row={row} col={4} />
    <Pixel row={row} col={5} />
    <Pixel row={row} col={6} />
    <Pixel row={row} col={7} />
  </div>
}

export default PieceRow;
