import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit';
import fs from 'fs'

const nameClient = "Nombre APELLIDOS"
const fechaEs = 'Mes Dia, 202X'
const fechaEn = 'Month Day, 202X'
const direccion1 = 'Dirección + Puerta'
const direccion2 = 'Ciudad, Estado Zip code'
const numero = '(000) 000-0000'
const correo = 'Correo cliente'


const fontBytes = fs.readFileSync('./fonts/ARIALBOLDMT.OTF')

async function modifyPdf() {
    const pdfDoc = await PDFDocument.load(fs.readFileSync('./PDFs/2. Certificación de Verdad Cliente.pdf'));
    pdfDoc.registerFontkit(fontkit);
    const ArialFuente = await pdfDoc.embedFont(fontBytes);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();
  
    firstPage.drawText(fechaEs, {
        x: 72,
        y: 662,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    }); 

    firstPage.drawText(fechaEn, {
        x: 72,
        y: 650,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });     

    firstPage.drawText(nameClient, {
        x: 72,
        y: 283,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(direccion1, {
        x: 72,
        y: 268,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(direccion2, {
        x: 72,
        y: 253,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(numero, {
        x: 72,
        y: 238,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(correo, {
        x: 72,
        y: 223,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync('./output/2. Certificación de Verdad Cliente.pdf', pdfBytes);

}

modifyPdf();