const { ggb1, feedback1, text1, separator1, text2 } = components;

ggb1.instance.registerObjectUpdateListener("numOfTickets", update);
ggb1.instance.setErrorDialogsActive(false);

function update() {
  let num = ggb1.instance.getValue("numOfTickets");
  text2.updateData({
    text: `They will lose $${num}$ ticket sales for every dollar increase in ticket price.`,
  });
}

/*
{"compTotals":{"geogebra":1,"textbox":3,"separator":1},"stage":"Learn","lessonInfo":"9 M4 TB L11 - Graphing Quadratic Functions from Factored Form","teacherView":false,"layout":"two col"}
*/
