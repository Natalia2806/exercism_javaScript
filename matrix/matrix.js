export class Matrix {
  constructor(matrix) {
    this.strings = matrix.split("\n");
  }

  get rows() {
    return this.strings.map(this.row);
  }

  get columns() {
    return Array(this.rows[0].length)
      .fill(undefined)
      .map(this.column.bind(this));
  }

  row(matrix) {
    return matrix.split(" ").map(Number);
  }

  column(item,index) {
    return this.rows.map(row => row[index]);
  }
}
