export const duplicateTileMatrix = originalMatrix => {
  let newMatrix = [];

  for(let r = 0; r < originalMatrix.length; r++){
    let newRow = [];
    for(let c = 0; c < originalMatrix[r].length; c++){
      newRow.push(originalMatrix[r][c]);
    }
    newMatrix.push(newRow)
  }

  return newMatrix
}

export const stringifyTileMatrix = tileMatrix => {
  let final = ": [";

  for(let r = 0; r < tileMatrix.length; r++){
    let row = "[";
    for(let c = 0; c < tileMatrix[r].length; c++){
      row+= `"${tileMatrix[r][c]}",`
    }
    row += "],"
    final += row;
  }

  return final + "],"
  
}
