import jsPDF from "jspdf";
import { formatDate } from "../utils/helpers";

import {exit8,
  boxSize250,
  boxSize300,
  controlLeft,
  controlRight,
  drillingSide,
  drillingTop,
  overrideBack,
  overrideFront,
  exit1,
  height,
  motor,
  ldg_d,
  ldg_s,
  logo,
  pa_55,
  pa_77,
  pp_66,
  pp_75,
  pp_89,
  pp_110,
  width} from "../assets/images";

const slatProfileMap = {
  "slat55": {image:pa_55, value: 55},
  "slat77": {image:pa_77, value: 77}
};

const endslatMap = {
  "ldgS": ldg_s,
  "ldgD": ldg_d
};

const guiderailMap = {
  "pp75": pp_75,
  "pp66": pp_66,
  "pp89": pp_89,
  "pp110": pp_110
};

const boxSizeMap = {
  "box250": boxSize250,
  "box300": boxSize300
};

const exitPositionMap = {
  "exit1": exit1,
  "exit8": exit8,
}

const {
  TextField,
} = jsPDF.AcroForm;

const convertToMetric = (ft, inch) => {
  const mm = ((parseInt(ft) * 304.8 ) + (parseInt(inch) * 25.4));
  return Math.floor(mm);
}

let CADollar = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
});

export const generateQuote = (data, measurements) => {
    const {
      customerName,
      customerPhone,
      customerEmail,
      widthA,
      widthB,
      heightC,
      heightD,
      manualOverride,
      controlUnit,
      slatProfile,
      endslat,
      guiderail,
      boxSize,
      exitStrap,
      colorSlat,
      colorEndslat,
      colorBox,
      colorRail,
      drillingLeft,
      drillingRight,
      extras,
      productPrice,
      productQuantity,
    } = data;
    console.log('runnign');
    const doc = new jsPDF("landscape");

    const constantHeight = slatProfile === "slat55" ? 254 : 300;

    //Border
    doc.setLineWidth(0.2);
    doc.rect(3, 3, 287, 200);
    
    //Grid
    doc.setLineWidth(0.5);
    doc.line(3, 35, 290, 35);
    doc.line(80, 35, 80, 181);
    doc.line(150, 35, 150, 181);
    doc.line(220, 35, 220, 181);
    doc.line(3, 181, 290, 181);
    
    doc.setLineWidth(0.2);
    doc.rect(3, 181, 147, 22);
    doc.line(3, 192, 150, 192);
    
    //Logo

    doc.addImage(logo, "PNG", 7, 7, 25, 20);

    // //Attributes
    doc.setFontSize(16);
  
    doc.text("QUOTE FORM", 35, 15);
    // var textField = new TextField();
    // textField.Rect = [35, 20, 35, 5];
    // textField.fieldName = "Date";
    // textField.fieldName = "Date";
    // textField.value= formatDate(new Date);
    doc.text(formatDate(new Date()), 35, 22);
    
    doc.setFontSize(12);
    doc.text([customerName], 80, 10);
    
    doc.setFontSize(10);
    doc.text([customerPhone, customerEmail], 80, 15);
    
    doc.setFontSize(12);
    // doc.text(["Office/Fax: (905) 532-0017", "Toll free: 1 (855)474-7657", "v.kz@rollpro.ca"], 160, 15);
    
    doc.setFontSize(12);
    doc.text(["RUF Roll Up Doors & Shutters", "10-1299 St Marys Ave", "Mississauga, ONL5E 1H9", "(647) 933-6677", "contact@rollupfactory.ca"], 230, 10);
    
    //Items
    //Column 1
    
    doc.setFontSize(14);
    doc.text("1. Width:", 15, 45);
    doc.setFontSize(12);
    console.log(widthB ? widthB : widthA + (2 * slatProfileMap[slatProfile].value));
    console.log((2 * slatProfileMap[slatProfile].value));
    doc.text([`A: ${widthA ? widthA : parseInt(widthB) - (2 * slatProfileMap[slatProfile].value)}mm`, `B:  ${widthB ? widthB : parseInt(widthA) + (2 * slatProfileMap[slatProfile].value)}mm`], 15,50);
    doc.addImage(width, "PNG", 15, 60, 55, 28);
    
    doc.setFontSize(14);
    doc.text("2. Height:", 15, 105);
    doc.setFontSize(12);
    doc.text([`C: ${heightC ? heightC : parseInt(heightD) + constantHeight}mm`, `D: ${heightD ? heightD : parseInt(heightC) + constantHeight}mm`, `E: ${constantHeight}mm`], 15,110);
    doc.addImage(height, "PNG", 15, 123, 55, 50);
    
    //Column 2
    
    doc.setFontSize(14);
    doc.text("3. Operation:", 85, 45);
    doc.setFontSize(12);
    var textField = new TextField();
    textField.Rect = [85, 46, 60, 10];
    textField.multiline = true;
    textField.value = "Electric Motor with Radio + MO (Lift Master).";
    textField.fieldName = "operationName";
    doc.addField(textField);
    doc.addImage(motor, "JPEG", 85, 60, 55, 30);

    doc.setFontSize(14);
    doc.text("4. Manual Override:", 85, 90);
    doc.addImage(manualOverride === 'front' ? overrideFront : overrideBack, "PNG", 100, 95, 20, 20);
    
    doc.text("5. Control Unit Side:", 85, 120);
    doc.addImage( (controlUnit === "left" ? controlLeft : controlRight), "JPEG", 97, 127, 27, 15);
    // doc.addImage(`control${controlUnitSide},`, "JPEG", 97, 127, 35, 20);
    
    doc.text(`6. Slat Profile: ${'type'}`, 85, 152);
    doc.addImage(slatProfileMap[slatProfile].image, "PNG", 98, 153, 27, 27);
    //Column 3
    
    // doc.text(`6. Perforated: ${"YES/NO"}`, 155, 45);
    
    doc.text(`7. Endslat: ${'type'}`, 155, 45);
    doc.addImage(endslatMap[endslat], "PNG", 165, 47, 34, 34);
    
    doc.text(`8. Guide Rail: ${'type'}`, 155, 85);
    doc.addImage(guiderailMap[guiderail], "PNG", 160, 86, 45, 20);
    
    doc.text(`9. Box Size: ${'type'}`, 155, 110);
    doc.addImage(boxSizeMap[boxSize], "PNG", 172, 112, 25, 25);
    
    doc.text(`10. Exit Strap/ Wire Position`, 155, 140);
    doc.addImage(exitPositionMap[exitStrap], "PNG", 165, 141, 33, 27);
    
    
    //Column 4
    doc.text("11. Colors", 225, 45 )
    doc.setFontSize(12);
    doc.text([`Slat: ${colorSlat}`, `Endslat: ${colorEndslat}`, `Box: ${colorBox}`, `Guide Rail: ${colorRail}`], 225, 50);
    doc.setFontSize(14);
    
    doc.text("12. Guide Rail Drilling", 225, 75);
    doc.setFontSize(12);
    doc.text("Left:", 235, 81 );
    doc.addImage(drillingLeft === "side" ? drillingSide : drillingTop, "PNG", 230, 83, 25, 23);
    
    doc.text("Right:", 255, 81 );
    doc.addImage(drillingRight === "side" ? drillingSide : drillingTop, "PNG", 255, 83, 25, 23);
    
    doc.setFontSize(14);
    doc.text("Extras:", 225, 113);
    doc.setFontSize(12);
    doc.rect(225, 115, 60, 25);
    doc.text(extras, 227, 120);
    
    doc.setFontSize(10);
    doc.text("According to UL325, the opening \ndevice for residential garage doors \n must have infrared sensors and a \nreverse mechanism such as \nphotocells and SNMC controllers.", 225, 145);
    doc.text("I, the undersigned, have read, \nunderstood and agree with the \n must have infrared sensors and a \ninformation included in this paragraph.", 225, 167);
    
    //Bottom
    
    doc.setFontSize(10);
    doc.text("Dealer Price (Tax, Shipping,duty not incl.)", 5, 189 );
    doc.text("Qty.", 80, 189 );
    doc.text("Total (Quote valid for 30 days)", 95, 189 );
    doc.setFontSize(14);
    doc.text(CADollar.format(productPrice), 35, 199);
    doc.text(productQuantity, 82, 199);
    doc.text(CADollar.format(productPrice*productQuantity), 105, 199);
    
    doc.setFontSize(14);
    doc.text("Print:_________________", 155, 189);
    doc.text("Date:_________________", 155, 199);
    doc.text("Approved for production:", 225, 189);
    doc.text("Sign: ________________", 225, 199);
    
    doc.save('name.pdf');
}
