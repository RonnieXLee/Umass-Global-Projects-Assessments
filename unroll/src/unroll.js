function unroll(squareArray) {
    const result = [];
  
    let startRow = 0;
    let endRow = squareArray.length - 1;
    let startCol = 0;
    let endCol = squareArray[0].length - 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      // Traverse top row from left to right
      for (let col = startCol; col <= endCol; col++) {
        result.push(squareArray[startRow][col]);
      }
      startRow++;
  
      // Traverse right column from top to bottom
      for (let row = startRow; row <= endRow; row++) {
        result.push(squareArray[row][endCol]);
      }
      endCol--;
  
      if (startRow <= endRow) {
        // Traverse bottom row from right to left
        for (let col = endCol; col >= startCol; col--) {
          result.push(squareArray[endRow][col]);
        }
        endRow--;
      }
  
      if (startCol <= endCol) {
        // Traverse left column from bottom to top
        for (let row = endRow; row >= startRow; row--) {
          result.push(squareArray[row][startCol]);
        }
        startCol++;
      }
    }
  
    return result;
  }
  
  module.exports = unroll;
  