class Matrix {
  //Declaration of private attributes so they can only be change inside of the class.
    private numRows: number;
    private numCols: number;
    private elements: number[][] = [];
    
    //Constructor to initialize the attributes.
    constructor(numRows: number, numCols: number) {
      this.numRows = numRows; 
      this.numCols = numCols;
      this.elements = new Array(numRows).fill(null).map(() => new Array(numCols).fill(0)); //For the elements, the new Array(numRows) creates a new array with a length of numRows.
      //then, .fill(null) fills each element of the array with the value null. This is done to initialize the array elements to a known value.
      //.map(() => new Array(numCols).fill(0)) creates a new array by mapping each element of the original array to a new array of length numCols, which is filled with the value 0.
      //So with this code it is created a 2D array of size numRows by numCols, with all elements initialized to 0. 
    }
    
    setElement(row: number, col: number, value: number): void { //The setElement method recibe a row, col and value as parameters, all with the number type.
      if (row < 0 || row >= this.numRows || col < 0 || col >= this.numCols) { //If the row or column is less than 0 or greater than the number previous defined, it throws an error.
        throw new Error("Index out of range");
      }
      this.elements[row][col] = value; //If the parameters are within what is allowed, the value of the element is set to the value parameter.
    }

    //Getters of the rows and columns
    getNumRows(): number { 
      return this.numRows;
    }
  
    getNumCols(): number {
      return this.numCols;
    }

      //Add method
    add(matrix: Matrix): Matrix | null{ //This will return a Matrix element or a null
      if (this.numRows !== matrix.getNumRows() || this.numCols !== matrix.getNumCols()) { //If the number of rows or columns is not the same in both Matrix, console.log "NOOP" and return null.
        console.log("NOOP");
        return null;
      }
  
      const result = new Matrix(this.numRows, this.numCols); //If the num of columns and rows is the same, creates a new Matrix object and assigns it to the result variable that will have the same number of rows and columns of the other Matrix.
      for (let i = 0; i < this.numRows; i++) {
        for (let j = 0; j < this.numCols; j++) {
          result.elements[i][j] = this.elements[i][j] + matrix.elements[i][j]; //With a nested loop, set the values of the result Matrix. The addition will be made with the equal elements of both matrices, for example Matrix1 [0][0] and Matrix2 [0][0]
        }
      }
      return result; //After the addition, return the result.
    }

      //Multiply method.
    multiply(matrix: Matrix): Matrix | null{  //This will return a Matrix element or a null
      if (this.numCols !== matrix.getNumRows()) { //If the number of columns of the Matrix 1 is different of the number of rows of the Matrix 2, console.log "NOOP" and return null.
        console.log("NOOP");
        return null;
      }
  
      const result = new Matrix(this.numRows, matrix.getNumCols());//If the num of columns of the Matrix 1 and rows of the Matrix 2 is the same, creates a new Matrix object and assigns it to the result variable that will have the same number of rows of the Matrix 1 and columns of the other Matrix.
      for (let i = 0; i < this.numRows; i++) { // This loop iterates over the rows of the first matrix (which is this).
        for (let j = 0; j < matrix.getNumCols(); j++) { // This loop iterates over the columns of the second matrix (matrix), which is the number of columns in the result matrix.
          let sum = 0; //This initializes a variable sum to 0, which will accumulate the product of the corresponding elements in each row and column.
          for (let k = 0; k < this.numCols; k++) { //This loop iterates over the columns of the first matrix and the rows of the second matrix.
            sum += this.elements[i][k] * matrix.elements[k][j]; //This multiplies the corresponding elements in the i row of the first matrix and the j column of the second matrix and adds the result to the variable sum. 
          }
          result.elements[i][j] = sum; //This assigns the final value of sum to the corresponding element in the result matrix.
        }
      }
      return result; //After the assignment of values in the result variable, i return it.
    }
  }
  
  //Creation of Matrix objects
const matrix1 = new Matrix(2, 2);
const matrix2 = new Matrix(2, 2);
const matrix3 = new Matrix(3, 3);

//Set of the elements of the Matrix
matrix1.setElement(0,0,1);
matrix1.setElement(0,1,2);
matrix1.setElement(1,0,3);
matrix1.setElement(1,1,4);

matrix2.setElement(0,0,2);
matrix2.setElement(0,1,4);
matrix2.setElement(1,0,6);
matrix2.setElement(1,1,8);

matrix3.setElement(0,0,1);
matrix3.setElement(0,1,2);
matrix3.setElement(0,2,3);
matrix3.setElement(1,0,4);
matrix3.setElement(1,1,5);
matrix3.setElement(1,2,6);
matrix3.setElement(2,0,7);
matrix3.setElement(2,1,8);
matrix3.setElement(2,2,9);

console.log(matrix1.add(matrix2)) //[[3,6][9,12]]
console.log(matrix2.add(matrix3)) //NOOP null
console.log(matrix1.multiply(matrix2)) //[[14,20], [30,44]]
console.log(matrix1.multiply(matrix3)) //NOOP null.