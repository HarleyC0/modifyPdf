import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit';
import fs from 'fs'

const sr = 'Sr. o Sra.'
const nameClient = "Nombre APELLIDOS"
const fechaEs = 'Mes Dia, 202X'

const fontBytes = fs.readFileSync('./fonts/ARIALBOLDMT.OTF')

async function modifyPdf() {
    const pdfDoc = await PDFDocument.load(fs.readFileSync('./PDFs/1.Bienvenida.pdf'));
    pdfDoc.registerFontkit(fontkit);
    const ArialFuente = await pdfDoc.embedFont(fontBytes);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();
  
    firstPage.drawText(sr, {
        x: 72,
        y: 552,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });    

    firstPage.drawText(nameClient, {
        x: 72,
        y: 540,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(fechaEs, {
        x: 72,
        y: 620,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });   

    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync('./output/1. Bienvenida.pdf', pdfBytes);

    console.log("Ejecutar modyfyPDF")
}

modifyPdf();