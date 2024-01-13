const Piece = () => {

  const clickPiece = e => { console.log("Click Piece") }

  return <div className="piece" onClick={clickPiece}></div>
}

export default Piece;
