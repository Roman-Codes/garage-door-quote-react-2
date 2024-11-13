import jsPDF from "jspdf";
import "jspdf-autotable";
import {
  formatDate,
  convertToImperial,
  convertToMetric,
  formatCurrency,
  camelToTitile,
} from "../utils/helpers";

import {
  boxSize180,
  boxSize205,
  boxSize250,
  boxSize300,
  boxSize350,
  controlLeft,
  controlRight,
  drillingSide,
  drillingTop,
  overrideBack,
  overrideFront,
  exit1,
  exit8,
  exit2,
  exit9,
  height,
  motor,
  ldg_d,
  ldg_s,
  logo,
  no,
  spring,
  pa_55,
  pa_77,
  pp_66,
  pp_75,
  pp_89,
  pp_110,
  width,
} from "../assets/images";

const slatProfileMap = {
  slat55: {
    image: pa_55,
    name: "PA55",
    endslat: { image: ldg_s, name: "LDG-S" },
  },
  slat77: {
    image: pa_77,
    name: "PA77",
    endslat: { image: ldg_d, name: "LDG-D" },
  },
};

const guiderailMap = {
  pp75: { img: pp_75, value: 75, name: "PP75" },
  pp66: { img: pp_66, value: 66, name: "PP66" },
  pp89: { img: pp_89, value: 89, name: "PP89" },
  pp110: { img: pp_110, value: 110, name: "PP110" },
};

const boxSizeMap = {
  box180: { image: boxSize180, name: "SK180", dimension: 180 },
  box205: { image: boxSize205, name: "SK205", dimension: 205 },
  box250: { image: boxSize250, name: "SK250", dimension: 250 },
  box300: { image: boxSize300, name: "SK300", dimension: 300 },
  box350: { image: boxSize350, name: "SK350", dimension: 350 },
};

const exitPositionMap = {
  exit1,
  exit2,
  exit8,
  exit9,
  noExit: no,
};

const manualSpringMap = {
  manualKey: "Manual Spring + Key",
  manualBolt: "Manual Spring + Slidebolts",
};

const overrideMap = {
  overrideFront: { image: overrideFront, name: "Override Front" },
  overrideBack: { image: overrideBack, name: "Override Back" },
  overrideNone: { image: no, name: "No Override" },
};

const { TextField } = jsPDF.AcroForm;

const generateQuote = (data) => {
  const {
    customerName,
    customerAddress,
    customerPhone,
    customerEmail,
    measureTypeWidth,
    widthA,
    fractionA,
    widthB,
    fractionB,
    measureTypeHeight,
    heightC,
    fractionC,
    heightD,
    fractionD,
    manualOverride,
    controlUnit,
    slatProfile,
    operation,
    manualControlBox,
    manualControlLock,
    manualControlHandle,
    manualControlBoxSide,
    manualControlLockSide,
    manualControlHandleSide,
    guiderail,
    boxSize,
    exitStrap,
    colorSlat,
    colorEndslat,
    colorBox,
    colorRail,
    monoColor,
    drillingLeft,
    drillingRight,
    extras,
    productPrice,
    productQuantity,
  } = data;

  const doc = new jsPDF("landscape");

  const constantHeightE = boxSizeMap[boxSize].dimension;
  const constantHeightH = slatProfile === "slat55" ? 64 : 102;

  const isMotor = operation === "motor";
  const isMonoColor = !!monoColor;

  const generateTable = () => {
    doc.rect(100, 128, 46, 18);
    doc.line(100, 134, 146, 134);
    doc.line(100, 140, 146, 140);
    doc.line(123, 128, 123, 146);

    doc.setFontSize(10);

    doc.text("Client", 105, 126);
    doc.text("Factory", 125, 126);

    doc.text("Box", 86, 132);
    doc.text("Handle", 86, 138);
    doc.text("Lock", 86, 144);

    doc.setFont("helvetica", "bold");

    doc.text(manualControlBox.toUpperCase(), 102, 132);
    doc.text(manualControlHandle.toUpperCase(), 102, 138);
    doc.text(manualControlLock.toUpperCase(), 102, 144);

    doc.text("SIDE", 125, 132);
    doc.text("SIDE", 125, 138);
    doc.text("SIDE", 125, 144);

    doc.setTextColor(255, 0, 0);
    doc.text(manualControlBoxSide.split(" ")[1], 134, 132);
    doc.text(manualControlHandleSide.split(" ")[1], 134, 138);
    doc.text(manualControlLockSide.split(" ")[1], 134, 144);

    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal");

    doc.setFontSize(14);
  };

  let metricComputedWidthA;
  let metricComputedWidthB;
  let impComputedWidthA;
  let impComputedWidthB;

  if (measureTypeWidth === "metric") {
    metricComputedWidthA = widthA
      ? widthA
      : parseInt(widthB) - 2 * guiderailMap[guiderail].value;
    impComputedWidthA = convertToImperial(metricComputedWidthA);

    metricComputedWidthB = widthB
      ? widthB
      : parseInt(widthA) + 2 * guiderailMap[guiderail].value;
    impComputedWidthB = convertToImperial(metricComputedWidthB);
  } else {
    impComputedWidthA = widthA
      ? parseInt(widthA) + parseFloat(fractionA)
      : (
          parseInt(widthB) +
          parseFloat(fractionB) -
          2 * convertToImperial(guiderailMap[guiderail].value)
        ).toFixed(3);
    metricComputedWidthA = convertToMetric(impComputedWidthA);

    impComputedWidthB = widthB
      ? parseInt(widthB) + parseFloat(fractionB)
      : (
          parseInt(widthA) +
          parseFloat(fractionA) +
          2 * convertToImperial(guiderailMap[guiderail].value)
        ).toFixed(3);
    metricComputedWidthB = convertToMetric(impComputedWidthB);
  }

  let metricComputedHeightC;
  let metricComputedHeightD;
  let metricComputedHeightE;
  let metricComputedHeightH;
  let impComputedHeightC;
  let impComputedHeightD;
  let impComputedHeightE;
  let impComputedHeightH;

  if (measureTypeHeight === "metric") {
    metricComputedHeightC = parseInt(
      heightC ? heightC : parseInt(heightD) + constantHeightE
    );
    impComputedHeightC = convertToImperial(metricComputedHeightC);

    metricComputedHeightD = parseInt(
      heightD ? heightD : parseInt(heightC) - constantHeightE
    );
    impComputedHeightD = convertToImperial(metricComputedHeightD);

    metricComputedHeightE = parseInt(constantHeightE);
    impComputedHeightE = convertToImperial(metricComputedHeightE);

    metricComputedHeightH = metricComputedHeightD - constantHeightH;
    impComputedHeightH = convertToImperial(metricComputedHeightH);
  } else {
    impComputedHeightE = parseFloat(convertToImperial(constantHeightE));
    metricComputedHeightE = constantHeightE;

    impComputedHeightC = heightC
      ? parseInt(heightC) + parseFloat(fractionC)
      : (
          parseInt(heightD) +
          parseFloat(fractionD) +
          impComputedHeightE
        ).toFixed(3);
    metricComputedHeightC = convertToMetric(impComputedHeightC);

    impComputedHeightD = heightD
      ? parseInt(heightD) + parseFloat(fractionD)
      : (
          parseInt(heightC) +
          parseFloat(fractionC) -
          impComputedHeightE
        ).toFixed(3);
    metricComputedHeightD = convertToMetric(impComputedHeightD);

    impComputedHeightH =
      impComputedHeightD - parseFloat(convertToImperial(constantHeightH));
    metricComputedHeightH = convertToMetric(impComputedHeightH);
  }

  // Border
  doc.setLineWidth(0.2);
  doc.rect(3, 3, 287, 200);

  // Grid
  doc.setLineWidth(0.5);
  doc.line(3, 35, 290, 35);
  doc.line(80, 35, 80, 181);
  doc.line(150, 35, 150, 181);
  doc.line(220, 35, 220, 181);
  doc.line(3, 181, 290, 181);

  doc.setLineWidth(0.2);
  doc.rect(3, 181, 147, 22);
  doc.line(3, 192, 150, 192);

  // Logo
  doc.addImage(logo, "PNG", 7, 7, 25, 20);

  // Attributes
  doc.setFontSize(16);
  doc.text("QUOTE FORM", 35, 15);
  doc.text(formatDate(new Date()), 35, 22);

  doc.setFontSize(12);
  doc.text([customerName], 80, 10);

  doc.setFontSize(10);
  doc.text([customerAddress, customerPhone, customerEmail], 80, 15);

  doc.setFontSize(12);
  doc.text(
    [
      "RUF Roll Up Doors & Shutters",
      "10-1299 St Marys Ave",
      "Mississauga, ONL5E 1H9",
      "(647) 933-6677",
      "contact@rollupfactory.ca",
    ],
    230,
    10
  );

  // Items
  // Column 1
  doc.setFontSize(14);
  doc.text("1. Width:", 15, 45);
  doc.setFontSize(12);
  doc.text(
    [
      `A: ${metricComputedWidthA}mm (${impComputedWidthA})"`,
      `B: ${metricComputedWidthB}mm (${impComputedWidthB})"`,
    ],
    15,
    50
  );
  doc.addImage(width, "PNG", 15, 60, 55, 28);

  doc.setFontSize(14);
  doc.text("2. Height:", 15, 97);
  doc.setFontSize(12);
  doc.text(
    [
      `C: ${metricComputedHeightC}mm (${impComputedHeightC}")`,
      `D: ${metricComputedHeightD}mm (${impComputedHeightD}")`,
      `E: ${metricComputedHeightE}mm (${impComputedHeightE}")`,
      `H: ${metricComputedHeightH}mm (${impComputedHeightH}")`,
    ],
    15,
    102
  );
  doc.addImage(height, "PNG", 15, 123, 55, 50);

  // Column 2
  doc.setFontSize(14);
  doc.text("3. Operation:", 85, 45);
  doc.setFontSize(12);

  const operationText = isMotor
    ? "Electric Motor with Radio + MO (Lift Master)."
    : manualSpringMap[operation];

  const operationsImg = isMotor && motor;
  const operatationIMGDimensions = isMotor
    ? [85, 60, 55, 30]
    : [100, 60, 30, 20];
  const textField = new TextField();
  textField.Rect = [85, 46, 60, 10];
  textField.multiline = true;
  textField.value = operationText;
  textField.fieldName = "operationName";
  doc.addField(textField);
  isMotor && doc.addImage(operationsImg, "JPEG", ...operatationIMGDimensions);

  doc.setFontSize(14);
  doc.text(`4. ${overrideMap[manualOverride].name}:`, 85, 90);
  doc.addImage(overrideMap[manualOverride].image, "PNG", 100, 95, 27, 20);

  doc.text("5. Control Unit Side:", 85, 120);
  isMotor
    ? doc.addImage(
        controlUnit === "unitLeft" ? controlLeft : controlRight,
        "JPEG",
        97,
        127,
        27,
        15
      )
    : generateTable();

  doc.text(`6. Slat Profile: ${slatProfileMap[slatProfile].name}`, 85, 152);
  doc.addImage(slatProfileMap[slatProfile].image, "PNG", 98, 153, 27, 27);

  // Column 3
  doc.text(`7. Endslat: ${slatProfileMap[slatProfile].endslat.name}`, 155, 45);
  doc.addImage(
    slatProfileMap[slatProfile].endslat.image,
    "PNG",
    165,
    47,
    34,
    34
  );

  doc.text(`8. Guide Rail: ${guiderailMap[guiderail].name}`, 155, 85);
  doc.addImage(guiderailMap[guiderail].img, "PNG", 160, 86, 45, 20);

  doc.text(`9. Box Size: ${boxSizeMap[boxSize].name}`, 155, 110);
  doc.addImage(boxSizeMap[boxSize].image, "PNG", 172, 112, 25, 25);

  doc.text(`10. Exit Strap/ Wire Position`, 155, 140);
  doc.addImage(exitPositionMap[exitStrap], "PNG", 165, 141, 33, 27);

  // Column 4
  doc.text("11. Colors", 225, 45);
  doc.setFontSize(12);
  doc.text(
    [
      `Slat: ${
        isMonoColor ? camelToTitile(monoColor) : camelToTitile(colorSlat)
      }`,
      `Endslat: ${
        isMonoColor ? camelToTitile(monoColor) : camelToTitile(colorEndslat)
      }`,
      `Box: ${
        isMonoColor ? camelToTitile(monoColor) : camelToTitile(colorBox)
      }`,
      `Guide Rail: ${
        isMonoColor ? camelToTitile(monoColor) : camelToTitile(colorRail)
      }`,
    ],
    225,
    50
  );
  doc.setFontSize(14);

  doc.text("12. Guide Rail Drilling", 225, 75);
  doc.setFontSize(12);
  doc.text("Left:", 235, 81);
  doc.addImage(
    drillingLeft === "side" ? drillingSide : drillingTop,
    "PNG",
    230,
    83,
    25,
    23
  );

  doc.text("Right:", 255, 81);
  doc.addImage(
    drillingRight === "side" ? drillingSide : drillingTop,
    "PNG",
    255,
    83,
    25,
    23
  );

  doc.setFontSize(14);
  doc.text("Extras:", 225, 113);
  doc.setFontSize(10);
  doc.rect(225, 114, 60, 25);

  const splitExtrasText = doc.splitTextToSize(extras, 55);

  doc.text(
    // typeof extras === "string"
    //   ? extras.split(",").map((el) => el.trim())
    //   : extras,
    splitExtrasText,
    227,
    118
  );

  doc.setFontSize(10);
  doc.text(
    "According to UL325, the opening \ndevice for residential garage doors \n must have infrared sensors and a \nreverse mechanism such as \nphotocells and SNMC controllers.",
    225,
    145
  );
  doc.text(
    "I, the undersigned, have read, \nunderstood and agree with the \n must have infrared sensors and a \ninformation included in this paragraph.",
    225,
    167
  );

  // Bottom
  doc.setFontSize(10);
  doc.text("Dealer Price (Tax, Shipping,duty not incl.)", 5, 189);
  doc.text("Qty.", 80, 189);
  doc.text("Total (Quote valid for 30 days)", 95, 189);
  doc.setFontSize(14);
  doc.text(formatCurrency(productPrice), 35, 199);
  doc.text(productQuantity, 82, 199);
  doc.text(formatCurrency(productPrice * productQuantity), 105, 199);

  doc.setFontSize(14);
  doc.text("Print:_________________", 155, 189);
  doc.text("Date:_________________", 155, 199);
  doc.text("Approved for production:", 225, 189);
  doc.text("Sign: ________________", 225, 199);

  doc.save(
    `${(
      customerName +
      "_" +
      customerAddress.replace(/,/g, "").replace(/ /g, "_")
    ).replace(/ /g, "_")}.pdf`
  );
};

export { generateQuote };
