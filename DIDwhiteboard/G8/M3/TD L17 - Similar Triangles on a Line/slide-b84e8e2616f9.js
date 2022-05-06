const {
  ggb1,
  feedback1,
  text2,
  radio1,
  cc_sharewithclass_e26f85849a21_textbox1: text1,
  cc_sharewithclass_e26f85849a21_input1: input1,
  cc_sharewithclass_e26f85849a21_button1: button1,
  cc_sharewithclass_e26f85849a21_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

button1.updateData({ visible: false });
input1.updateData({ visible: false });
text1.updateData({ visible: false });
button1.updateData({ align: "right" });
ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

// //ggb1.instance.registerObjectUpdateListener("E", PtHUpdate);
// //ggb1.instance.registerObjectUpdateListener("H", PtEUpdate);
// // ggb1.instance.registerObjectUpdateListener("G",PtFUpdate);
// // ggb1.instance.registerObjectUpdateListener("F",PtGUpdate);

// //function PtHUpdate() {
//   if (ggb1.instance.getValue("coincideEH")) {
//     let xcoord = ggb1.instance.getXcoord("E");
//     let ycoord = ggb1.instance.getYcoord("E");
//     ggb1.instance.setCoords("H", xcoord + 1, ycoord + 1);
//   }
// }
// //function PtEUpdate() {
//   if (ggb1.instance.getValue("coincideEH")) {
//     let xcoord = ggb1.instance.getXcoord("H");
//     let ycoord = ggb1.instance.getYcoord("H");
//     ggb1.instance.setCoords("E", xcoord - 1, ycoord - 1);
//   }
// }

autorun(() => {
  if (radio1.data.selected) {
    button1.updateData({ visible: true });
    input1.updateData({ visible: true });
    text1.updateData({ visible: true });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M3 TD L17 - Similar Triangles on a Line","teacherView":false,"layout":"two col"}
*/
