var Reader = require("./Reader")
var Processor = require("./Processor")
var Table = require('./Table')
var HtmlParser = require("./HtmlParser")
var Writer = require("./Writer")
var PDFWriter = require("./PDFWriter")

var leitor = new Reader();
var escritor = new Writer();

async function main (){
    var dados = await leitor.Read("./bussines.csv");
    var dadosProcessados = Processor.Process(dados);
    var usuarios = new Table(dadosProcessados);
    var html = await HtmlParser.Parse(usuarios);

    escritor.Write(Date.now() + ".html", html)
    PDFWriter.WriterPdf(Date.now() + ".PDF", html)
}

main();