export const duplicateMapMatrix = originalMatrix => {
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