var Matrix = /** @class */ (function () {
  function Matrix(numRows, numCols) {
    this.elements = [];
    this.numRows = numRows;
    this.numCols = numCols;
    this.setElements();
  }
  Matrix.prototype.getNumRows = function () {
    return this.numRows;
  };
  Matrix.prototype.getNumCols = function () {
    return this.numCols;
  };
  Matrix.prototype.setElements = function () {
    for (var i = 0; i < this.numRows; i++) {
      this.elements[i] = [];
      for (var j = 0; j < this.numCols; j++) {
        this.elements[i][j] = i * this.numRows + j + 1;
      }
    }
  };
  Matrix.prototype.add = function (matrix) {
    if (
      this.numRows !== matrix.getNumRows() ||
      this.numCols !== matrix.getNumCols()
    ) {
      console.log("NOOP");
      return null;
    }
    var result = new Matrix(this.numRows, this.numCols);
    for (var i = 0; i < this.numRows; i++) {
      for (var j = 0; j < this.numCols; j++) {
        result.elements[i][j] = this.elements[i][j] + matrix.elements[i][j];
      }
    }
    return result;
  };
  Matrix.prototype.multiply = function (matrix) {
    if (this.numCols !== matrix.getNumRows()) {
      console.log("NOOP");
      return null;
    }
    var result = new Matrix(this.numRows, matrix.getNumCols());
    for (var i = 0; i < this.numRows; i++) {
      for (var j = 0; j < matrix.getNumCols(); j++) {
        var sum = 0;
        for (var k = 0; k < this.numCols; k++) {
          sum += this.elements[i][k] * matrix.elements[k][j];
        }
        result.elements[i][j] = sum;
      }
    }
    return result;
  };
  return Matrix;
})();
var matrix1 = new Matrix(2, 2);
var matrix2 = new Matrix(2, 2);
var matrix3 = new Matrix(3, 3);

const resultAdd = matrix1.add(matrix2);
console.log(resultAdd);

const resultMulti = matrix1.multiply(matrix2);
console.log(resultMulti);
