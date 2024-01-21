export const duplicatePieceMatrix = originalMatrix => {
  let newMatrix = [];

  for(let r = 0; r < originalMatrix.length; r++){
    let newRow = [];
    for(let c = 0; c < originalMatrix[r].length; c++){
      newRow.push(originalMatrix[r][c]);
    }
    newMatrix.push(newRow);
  }

  return newMatrix;
}

export const stringifyPieceMatrix = pieceMatrix => {
  let final = "[";

  for(let r = 0; r < pieceMatrix.length; r++){
    let rowString = "["
    for(let c = 0; c < pieceMatrix[r].length; c++){
      rowString += `${pieceMatrix[r][c]},`
    }
    rowString += "],"
    final += rowString;
  }


  final += "],";
  return final;
}
