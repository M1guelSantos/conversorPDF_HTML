class Table {
    constructor(arr){
        this.header = arr[0];
        arr.shift(); // Remove primeiro elemento array
        this.rows = arr;
    }

     RowCount(){
        return this.rows.length;
    }

    ColumnCount(){
        return this.header.length
    }
}

module.exports = Table;