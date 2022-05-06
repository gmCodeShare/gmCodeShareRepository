const {
  ggb1,
  feedback1,
  text1,
  cc_sharewithclass_a473bb865da4_textbox1,
  cc_sharewithclass_a473bb865da4_input1,
  cc_sharewithclass_a473bb865da4_button1,
  cc_sharewithclass_a473bb865da4_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.setMode(62);
ggb1.instance.setVisible("f", false);

/*const oldTable = getFromSlide('slide-68c507b4ca99', 'table1');
const oldCell00 = oldTable.data.rows[0][0].value;
const oldCell01 = oldTable.data.rows[0][1].value;
const oldCell02 = oldTable.data.rows[0][2].value;
const oldCell10 = oldTable.data.rows[1][0].value;
const oldCell11 = oldTable.data.rows[1][1].value;
const oldCell12 = oldTable.data.rows[1][2].value;
const oldCell20 = oldTable.data.rows[2][0].value;
const oldCell21 = oldTable.data.rows[2][1].value;
const oldCell22 = oldTable.data.rows[2][2].value;
const oldCell30 = oldTable.data.rows[3][0].value;
const oldCell31 = oldTable.data.rows[3][1].value;
const oldCell32 = oldTable.data.rows[3][2].value;
const oldCell40 = oldTable.data.rows[4][0].value;
const oldCell41 = oldTable.data.rows[4][1].value;
const oldCell42 = oldTable.data.rows[4][2].value;
const oldCell50 = oldTable.data.rows[5][0].value;
const oldCell51 = oldTable.data.rows[5][1].value;
const oldCell52 = oldTable.data.rows[5][2].value;
const oldCell60 = oldTable.data.rows[6][0].value;
const oldCell61 = oldTable.data.rows[6][1].value;
const oldCell62 = oldTable.data.rows[6][2].value;
const oldCell70 = oldTable.data.rows[7][0].value;
const oldCell71 = oldTable.data.rows[7][1].value;
const oldCell72 = oldTable.data.rows[7][2].value;
const oldCell80 = oldTable.data.rows[8][0].value;
const oldCell81 = oldTable.data.rows[8][1].value;
const oldCell82 = oldTable.data.rows[8][2].value;
const oldCell90 = oldTable.data.rows[9][0].value;
const oldCell91 = oldTable.data.rows[9][1].value;
const oldCell92 = oldTable.data.rows[9][2].value;
const oldCell100 = oldTable.data.rows[10][0].value;
const oldCell101 = oldTable.data.rows[10][1].value;
const oldCell102 = oldTable.data.rows[10][2].value;

ggb1.instance.evalLaTeX(`Point1=${oldCell02}`);
ggb1.instance.setColor('Point1', 242, 106, 54);
ggb1.instance.evalLaTeX(`Point2=${oldCell12}`);
ggb1.instance.setColor('Point2', 242, 106, 54);
ggb1.instance.evalLaTeX(`Point3=${oldCell22}`);
ggb1.instance.setColor('Point3', 242, 106, 54);
ggb1.instance.evalLaTeX(`Point4=${oldCell32}`);
ggb1.instance.setColor('Point4', 242, 106, 54);
ggb1.instance.evalLaTeX(`Point5=${oldCell42}`);
ggb1.instance.setColor('Point5', 242, 106, 54);
ggb1.instance.evalLaTeX(`Point6=${oldCell52}`);
ggb1.instance.setColor('Point6', 242, 106, 54);
ggb1.instance.evalLaTeX(`Point7=${oldCell62}`);
ggb1.instance.setColor('Point7', 242, 106, 54);
ggb1.instance.evalLaTeX(`Point8=${oldCell72}`);
ggb1.instance.setColor('Point8', 242, 106, 54);
ggb1.instance.evalLaTeX(`Point9=${oldCell82}`);
ggb1.instance.setColor('Point9', 242, 106, 54);
ggb1.instance.evalLaTeX(`Point10=${oldCell92}`);
ggb1.instance.setColor('Point10', 242, 106, 54);
ggb1.instance.evalLaTeX(`Point11=${oldCell102}`);
ggb1.instance.setColor('Point11', 242, 106, 54);
*/
ggb1.instance.setMode(62);
ggb1.instance.registerStoreUndoListener(getDoodles);
getDoodles();

function getDoodles() {
  let doodleArray = [];
  let allPenstrokes = ggb1.instance.getAllObjectNames("penstroke");
  for (let i = 0; i < allPenstrokes.length; i++) {
    doodleArray.push(ggb1.instance.getCommandString(allPenstrokes[i]));
  }
  ggb1.updateInnerData({ doodles: doodleArray });
  // console.log(ggb1.innerData[`doodles`]);
  utils.RTS.sendData("slide-3a98e4d3e8f3", {
    myDoodles: ggb1.innerData[`doodles`],
  });
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"9 M3 TA L03 - The Graph of a Function","teacherView":false,"layout":"two col"}
*/
