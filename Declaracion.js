import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit';
import fs from 'fs'


const nameClient = "Nombre APELLIDOS"
const fechaEs = 'Mes Dia, 202X'

const fontBytes = fs.readFileSync('./fonts/ARIALBOLDMT.OTF')

async function modifyPdf() {
    const pdfDoc = await PDFDocument.load(fs.readFileSync('./PDFs/3. Declaración y Certificación del Peticionario.pdf'));
    pdfDoc.registerFontkit(fontkit);
    const ArialFuente = await pdfDoc.embedFont(fontBytes);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();
     

    firstPage.drawText(nameClient, {
        x: 360,
        y: 130,
        size: 9,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(fechaEs, {
        x: 360,
        y: 118,
        size: 9,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });   

    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync('./output/3. Declaración y Certificación del Peticionario.pdf', pdfBytes);

}

modifyPdf();