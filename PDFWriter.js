var pdf = require("html-pdf")

class PDFWriter{
    static WriterPdf(filename, html){
        pdf.create(html,{}).toFile(filename, (err) => {
            if(err){
                console.log("Erro")
            }
        })
    }
}

module.exports = PDFWriter