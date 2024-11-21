import { PDFDocument, StandardFonts, drawButton, drawText, rgb } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit';
import fs from 'fs'

const sr = 'Sr. o Sra.'
const Mr = 'Mr o Ms'
const nameClient = "Nombre APELLIDOS"
const fechaEs = 'Mes Dia, 202X'
const fechaEn = 'Month Day, 202X'
const direccion1 = 'Dirección + Puerta'
const direccion2 = 'Ciudad, Estado Zip code'
const numero = '(000) 000-0000'
const correo = 'Correo cliente'
const nameAgent = 'Nombre APELLIDOS Agente'

const fontBytes = fs.readFileSync('./fonts/ARIALBOLDMT.OTF')

async function modifyPdf() {
    const pdfDoc = await PDFDocument.load(fs.readFileSync('./PDFs/8. Metodos de Pago.pdf'));
    pdfDoc.registerFontkit(fontkit);
    const ArialFuente = await pdfDoc.embedFont(fontBytes);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const secondpage = pages[1];
    const thirdPage = pages[2];
    const fourPage = pages[3];
    const { width, height } = firstPage.getSize();
  
// Primera Page

    firstPage.drawText(fechaEs, {
        x: 85,
        y: 655,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    }); 

    firstPage.drawText(sr, {
        x: 85,
        y: 625,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(nameClient, {
        x: 85,
        y: 610,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(direccion1, {
        x: 85,
        y: 595,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(direccion2, {
        x: 85,
        y: 580,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(numero, {
        x: 85,
        y: 565,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });

    firstPage.drawText(correo, {
        x: 85,
        y: 550,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    }); 
    
// Segunda Page    

    secondpage.drawText(nameAgent, {
        x: 85,
        y: 325,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });

// Tercera Page, Ingles    

    thirdPage.drawText(fechaEn, {
        x: 85,
        y: 655,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    }); 

    thirdPage.drawText(Mr, {
        x: 85,
        y: 625,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });

    thirdPage.drawText(nameClient, {
        x: 85,
        y: 610,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });

    thirdPage.drawText(direccion1, {
        x: 85,
        y: 595,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });

    thirdPage.drawText(direccion2, {
        x: 85,
        y: 580,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });

    thirdPage.drawText(numero, {
        x: 85,
        y: 565,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });

    thirdPage.drawText(correo, {
        x: 85,
        y: 550,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    }); 

// Cuarta Page, Ingles    

    fourPage.drawText(nameAgent, {
        x: 85,
        y: 355,
        size: 12,
        font: ArialFuente,
        color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync('./output/8. Metodos de Pago.pdf', pdfBytes);

}

modifyPdf();