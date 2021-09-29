Multiply two matricies together and return the result.

//A * B = C

//[1 2 3   *  [7 8     =   [58 64
 //4 5 6]      9 10         139 154]
 //           11 12]
   
// 1*7 + 2*9 + 3*11 = 58


let matrix1 = [[1,2,3][4,5,6]]
multipleMatrices(matrix1, matrix2);

function multipleMatrices(matrix1, matrix2) {
  if(isInvalidMultiplication()) return [];

  let resultantMatrix = [][];

  for(let i=0; i<matrix1.length; i++) { // 2
    sum = 0;
    for(let j=0; j<matrix1.length; j++) { //2
      for(let k=0; k<matrix2[k].length; k++) { // 3
    		sum += matrix1[i][k] * matrix2[k][i]
    	}
    	resultantMatrix[i][j] = sum;
    }
  }
}



function isInvalidMultiplication() {
 // return validity of muatrix multiplication
  return false;
}
