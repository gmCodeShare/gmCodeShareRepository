const { ggb1, feedback1, text1, table1, button1 } = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  button1.updateData({ disabled: true });
  ggb1.instance.setValue('cubeSize', 1 / 5);
  ggb1.instance.setValue('time1', 0);
  ggb1.instance.setValue('time2', ggb1.instance.getValue('cubeSize'));
  ggb1.instance.setValue('time3', ggb1.instance.getValue('cubeSize'));
  ggb1.instance.setVisible('text1', false);
  ggb1.instance.setVisible('text2', false);
  ggb1.instance.setVisible('text3', false);
});

/* autorun(()=>{
let pattern2 = /frac{\d+}{\d+}/;
if(pattern2.test(table1.getCell(0,0).value)){
    ggb1.instance.evalLaTeX(`length=${table1.getCell(0,0).value}`);
    ggb1.instance.setAnimating("time1",false);
  } 
  });
  
autorun(()=>{
let pattern3 = /frac{\d+}{\d+}/;
  if(pattern3.test(table1.getCell(0,1).value)){
   ggb1.instance.evalLaTeX(`width=${table1.getCell(0,1).value}`);
    ggb1.instance.setAnimating("time1",false);
    } 
  });
  
autorun(()=>{
let pattern4 = /frac{\d+}{\d+}/;
if(pattern4.test(table1.getCell(0,2).value)){
 ggb1.instance.evalLaTeX(`height=${table1.getCell(0,2).value}`);
  ggb1.instance.setAnimating("time1",false);
 }
  });
  autorun(()=>{
  let pattern5 = /frac{\d+}{\d+}/;
if(pattern5.test(table1.getCell(0,3).value)){
 ggb1.instance.evalLaTeX(`height2=${table1.getCell(0,3).value}`);
  ggb1.instance.setAnimating("time1",false);
 }
  });*/

button1.on('click', () => {
  const result = utils.math.evaluateLatex(table1.getCell(0, 0).value);
  if (result.value < 0 || result.error) {
    return;
  }
  const result2 = utils.math.evaluateLatex(table1.getCell(0, 1).value);
  if (result2.value < 0 || result2.error) {
    return;
  }
  const result3 = utils.math.evaluateLatex(table1.getCell(0, 2).value);
  if (result3.value < 0 || result3.error) {
    return;
  }
  ggb1.instance.evalLaTeX(`length=${table1.getCell(0, 0).value}`);
  ggb1.instance.evalLaTeX(`width=${table1.getCell(0, 1).value}`);
  ggb1.instance.evalLaTeX(`height=${table1.getCell(0, 2).value}`);
  ggb1.instance.evalLaTeX(`height2=${table1.getCell(0, 3).value}`);
  ggb1.instance.evalCommand('RunClickScript(button1)');
  //ggb1.instance.setAnimating("time1",false);
  ggb1.instance.setVisible('text1', true);
  ggb1.instance.setVisible('text2', true);
  ggb1.instance.setVisible('text3', true);
  ggb1.instance.evalCommand('RunClickScript(button2)');
  // ggb1.instance.evalCommand("RunClickScript(button1)");
  button1.updateData({ disabled: true });
});

autorun(() => {
  let entries = table1.data.rows
    .map((row) => row.map((cell) => cell.value))
    .flat();
  if (!arrayEquals(entries, table1.data.last)) {
    button1.updateData({
      text: 'Play',
      disabled: !entries.every((value) => !!value),
    });
    ggb1.instance.setAnimating('time1', false);
    ggb1.instance.setValue('time1', 0);
    ggb1.instance.setValue('time2', ggb1.instance.getValue('cubeSize'));
    ggb1.instance.setValue('time3', ggb1.instance.getValue('cubeSize'));
    table1.updateData({ last: [...entries] });
  }
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"table":1,"button":1},"stage":"Learn","lessonInfo":"6 M5 TD L15 - Exploring Volume","teacherView":false,"layout":"two col"}
*/
