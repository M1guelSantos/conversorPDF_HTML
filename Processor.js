class Processor {
    static Process(data){
        var a =  data.split("\r\n"); // Quebra de linha
        var rows = [];
        
        a.forEach(row =>{
          var arr =  row.split(',');
          rows.push(arr)
        })
        return (rows)
    }
}

module.exports = Processor;