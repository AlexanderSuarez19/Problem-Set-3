class Matrix {
    private numRows: number;
    private numCols: number;
    private elements: number[][] = [];
  
    constructor(numRows: number, numCols: number) {
      this.numRows = numRows;
      this.numCols = numCols;
      this.setElements();
    }
  
    getNumRows(): number {
      return this.numRows;
    }
  
    getNumCols(): number {
      return this.numCols;
    }

    setElements(){
      for (let i = 0; i < this.numRows; i++) {
        this.elements[i] = [];
        for (let j = 0; j < this.numCols; j++) {
          this.elements[i][j] = i * this.numRows + j + 1;
        }
      }
    }
    add(matrix: Matrix): Matrix | null{
      if (this.numRows !== matrix.getNumRows() || this.numCols !== matrix.getNumCols()) {
        console.log("NOOP");
        return null;
      }
  
      const result = new Matrix(this.numRows, this.numCols);
      for (let i = 0; i < this.numRows; i++) {
        for (let j = 0; j < this.numCols; j++) {
          result.elements[i][j] = this.elements[i][j] + matrix.elements[i][j];
        }
      }
      return result;
    }

    multiply(matrix: Matrix): Matrix | null{
      if (this.numCols !== matrix.getNumRows()) {
        console.log("NOOP");
        return null;
      }
  
      const result = new Matrix(this.numRows, matrix.getNumCols());
      for (let i = 0; i < this.numRows; i++) {
        for (let j = 0; j < matrix.getNumCols(); j++) {
          let sum = 0;
          for (let k = 0; k < this.numCols; k++) {
            sum += this.elements[i][k] * matrix.elements[k][j];
          }
          result.elements[i][j] = sum;
        }
      }
      return result;
    }
  }
  
const matrix1 = new Matrix(2, 2);
const matrix2 = new Matrix(2, 2);
const matrix3 = new Matrix(3, 3);
