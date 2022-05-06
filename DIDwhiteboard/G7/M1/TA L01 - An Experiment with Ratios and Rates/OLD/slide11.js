const { ggb1, text1, text2, text3, button1, table1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);

//this lesson had already defined rows 2 through 7 but the actual rows called in the platform are 0 through 5

//define these numbers based on what the correct values should be
let a2correct = 6;
let a3correct = 12;
let a4correct = 4;
let a5correct = 18;
let a6correct = 8;
let a7correct = 2;
let b2correct = 33;
let b3correct = 66;
let b4correct = 22;
let b5correct = 99;
let b6correct = 44;
let b7correct = 11;

//define the constant of proportionality
let constOfProp = 5.5;
ggb1.instance.setValue("sorterSpeed", constOfProp);
ggb1.instance.setValue("scrubSpeed", 1);

//define the variables in autorun that are needed outside the autorun
let time;
let coins;
let stopTime;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    text3.updateData({ visible: false });
    buttonGroup1.updateData({ align: "center" });
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);

    ggb1.updateData({ init: true });
  }
}

//everything from here on changes so it all needs to be in an autorun
autorun(() => {
  //define these number using the table
  let a2 = utils.math.evaluateLatex(table1.data.rows[0][0].value).value;
  let a3 = utils.math.evaluateLatex(table1.data.rows[1][0].value).value;
  let a4 = utils.math.evaluateLatex(table1.data.rows[2][0].value).value;
  let a5 = utils.math.evaluateLatex(table1.data.rows[3][0].value).value;
  let a6 = utils.math.evaluateLatex(table1.data.rows[4][0].value).value;
  let a7 = utils.math.evaluateLatex(table1.data.rows[5][0].value).value;
  let b2 = utils.math.evaluateLatex(table1.data.rows[0][1].value).value;
  let b3 = utils.math.evaluateLatex(table1.data.rows[1][1].value).value;
  let b4 = utils.math.evaluateLatex(table1.data.rows[2][1].value).value;
  let b5 = utils.math.evaluateLatex(table1.data.rows[3][1].value).value;
  let b6 = utils.math.evaluateLatex(table1.data.rows[4][1].value).value;
  let b7 = utils.math.evaluateLatex(table1.data.rows[5][1].value).value;

  //to determine if the student inputs are correct
  let trueA2 = a2 == a2correct;
  let trueA3 = a3 == a3correct;
  let trueA4 = a4 == a4correct;
  let trueA5 = a5 == a5correct;
  let trueA6 = a6 == a6correct;
  let trueA7 = a7 == a7correct;
  let trueB2 = b2 == b2correct;
  let trueB3 = b3 == b3correct;
  let trueB4 = b4 == b4correct;
  let trueB5 = b5 == b5correct;
  let trueB6 = b6 == b6correct;
  let trueB7 = b7 == b7correct;
  let trueAll =
    trueA2 *
    trueA3 *
    trueA4 *
    trueA5 *
    trueA6 *
    trueA7 *
    trueB2 *
    trueB3 *
    trueB4 *
    trueB5 *
    trueB6 *
    trueB7;

  //calculate the values of each table cell according to the constant of proportionality
  let enteredCoinsA2 = Math.floor(a2 * constOfProp * 1000) / 1000;
  let enteredCoinsA3 = Math.floor(a3 * constOfProp * 1000) / 1000;
  let enteredCoinsA4 = Math.floor(a4 * constOfProp * 1000) / 1000;
  let enteredCoinsA5 = Math.floor(a5 * constOfProp * 1000) / 1000;
  let enteredCoinsA6 = Math.floor(a6 * constOfProp * 1000) / 1000;
  let enteredCoinsA7 = Math.floor(a7 * constOfProp * 1000) / 1000;
  let enteredTimeB2 = Math.floor((b2 / constOfProp) * 1000) / 1000;
  let enteredTimeB3 = Math.floor((b3 / constOfProp) * 1000) / 1000;
  let enteredTimeB4 = Math.floor((b4 / constOfProp) * 1000) / 1000;
  let enteredTimeB5 = Math.floor((b5 / constOfProp) * 1000) / 1000;
  let enteredTimeB6 = Math.floor((b6 / constOfProp) * 1000) / 1000;
  let enteredTimeB7 = Math.floor((b7 / constOfProp) * 1000) / 1000;

  //get time and coin count values from ggb, these will also be used to display on screen values
  let time = ggb1.innerData["time"];
  let coins = ggb1.innerData["coinCount"];
  let scrub = ggb1.innerData["scrub"];

  //define the correct time and coin count according to the constant of proportionality
  let correctTime = coins / constOfProp;
  let correctCoinCount = time * constOfProp;

  //check for validation of rows as time progresses
  //these have to be enabled for the rows that need validation
  //to enable a student input validation comment out the line that says "= true" and remove the commented out section from the proper validation code depending on the situation

  //validate row 2

  //use this one if there is no student input
  let validateRow2 = true;

  //use this one to validate student coin input
  /*let validateRow2;
  if (
    (time >= enteredTimeB2 && correctTime != a2 && trueB2 == 0) ||
    (scrub == 100 && trueB2 == 0)
  ) {
    validateRow2 = false;
  } else {
    validateRow2 = true;
  }*/

  //use this one to validate student time input
  /*if (
    (time >= a2 && correctCoinCount != b2 && trueA2 == 0) ||
    (scrub == 100 && trueA2 == 0)
  ) {
    validateRow2 = false;
  } else {
    validateRow2 = true;
  }*/

  //validate row 3

  //use this one if there is no student input
  //let validateRow3 = true;

  //use this one to validate student coin input
  let validateRow3;
  if (
    (time >= enteredTimeB3 && correctTime != a3 && trueB3 == 0) ||
    (scrub == 100 && trueB3 == 0)
  ) {
    validateRow3 = false;
  } else {
    validateRow3 = true;
  }

  //use this one to validate student time input
  /*if (
    (time >= a3 && correctCoinCount != b3 && trueA3 == 0) ||
    (scrub == 100 && trueA3 == 0)
  ) {
    validateRow3 = false;
  } else {
    validateRow3 = true;
  }*/

  //validate row 4

  //use this one if there is no student input
  //let validateRow4 = true;

  //use this one to validate student coin input
  /*let validateRow4;
  if (
    (time >= enteredTimeB4 && correctTime != a4 && trueB4 == 0) ||
    (scrub == 100 && trueB4 == 0)
  ) {
    validateRow4 = false;
  } else {
    validateRow4 = true;
  }*/

  //use this one to validate student time input
  if (
    (time >= a4 && correctCoinCount != b4 && trueA4 == 0) ||
    (scrub == 100 && trueA4 == 0)
  ) {
    validateRow4 = false;
  } else {
    validateRow4 = true;
  }

  //validate row 5

  //use this one if there is no student input
  //let validateRow5 = true;

  //use this one to validate student coin input
  let validateRow5;
  if (
    (time >= enteredTimeB5 && correctTime != a5 && trueB5 == 0) ||
    (scrub == 100 && trueB5 == 0)
  ) {
    validateRow5 = false;
  } else {
    validateRow5 = true;
  }

  //use this one to validate student time input
  /*if (
    (time >= a5 && correctCoinCount != b5 && trueA5 == 0) ||
    (scrub == 100 && trueA5 == 0)
  ) {
    validateRow5 = false;
  } else {
    validateRow5 = true;
  }*/

  //validate row 6

  //use this one if there is no student input
  //let validateRow6 = true;

  //use this one to validate student coin input
  /*let validateRow6;
  if (
    (time >= enteredTimeB6 && correctTime != a6 && trueB6 == 0) ||
    (scrub == 100 && trueB6 == 0)
  ) {
    validateRow6 = false;
  } else {
    validateRow6 = true;
  }*/

  //use this one to validate student time input
  if (
    (time >= a6 && correctCoinCount != b6 && trueA6 == 0) ||
    (scrub == 100 && trueA6 == 0)
  ) {
    validateRow6 = false;
  } else {
    validateRow6 = true;
  }

  //validate row 7

  //use this one if there is no student input
  //let validateRow7 = true;

  //use this one to validate student coin input
  /*let validateRow7;
  if (
    (time >= enteredTimeB7 && correctTime != a7 && trueB7 == 0) ||
    (scrub == 100 && trueB7 == 0)
  ) {
    validateRow7 = false;
  } else {
    validateRow7 = true;
  }*/

  //use this one to validate student time input
  if (
    (time >= a7 && correctCoinCount != b7 && trueA7 == 0) ||
    (scrub == 100 && trueA5 == 0)
  ) {
    validateRow7 = false;
  } else {
    validateRow7 = true;
  }

  //define stop time and stop time if validation is false
  let stopA2;
  let stopA3;
  let stopA4;
  let stopA5;
  let stopA6;
  let stopA7;
  let stopB2;
  let stopB3;
  let stopB4;
  let stopB5;
  let stopB6;
  let stopB7;

  //stop row 2
  if (validateRow2) {
    stopA2 = 1;
    stopB2 = 1;
  } else {
    stopA2 = 0;
    stopB2 = 0;
  }

  //stop row 3
  if (validateRow3) {
    stopA3 = 1;
    stopB3 = 1;
  } else {
    stopA3 = 0;
    stopB3 = 0;
  }

  //stop row 4
  if (validateRow4) {
    stopA4 = 1;
    stopB4 = 1;
  } else {
    stopA4 = 0;
    stopB4 = 0;
  }

  //stop row 5
  if (validateRow5) {
    stopA5 = 1;
    stopB5 = 1;
  } else {
    stopA5 = 0;
    stopB5 = 0;
  }

  //stop row 6
  if (validateRow6) {
    stopA6 = 1;
    stopB6 = 1;
  } else {
    stopA6 = 0;
    stopB6 = 0;
  }

  //stop row 7
  if (validateRow7) {
    stopA7 = 1;
    stopB7 = 1;
  } else {
    stopA7 = 0;
    stopB7 = 0;
  }

  //stop time
  let stopTime =
    stopA2 *
    stopA3 *
    stopA4 *
    stopA5 *
    stopA6 *
    stopA7 *
    stopB2 *
    stopB3 *
    stopB4 *
    stopB5 *
    stopB6 *
    stopB7;

  ggb1.instance.setValue("stopTime", stopTime);

  //enable button if all cells are filled
  if (
    table1.data.rows[0][0].value != "" &&
    table1.data.rows[1][0].value != "" &&
    table1.data.rows[2][0].value != "" &&
    table1.data.rows[3][0].value != "" &&
    table1.data.rows[4][0].value != "" &&
    table1.data.rows[5][0].value != "" &&
    table1.data.rows[0][1].value != "" &&
    table1.data.rows[1][1].value != "" &&
    table1.data.rows[2][1].value != "" &&
    table1.data.rows[3][1].value != "" &&
    table1.data.rows[4][1].value != "" &&
    table1.data.rows[5][1].value != "" &&
    ggb1.innerData["time"] == 0
  ) {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  } else {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  }

  //display 'not enough coins' on ggb screen if entered time is too big
  if (time >= 100 / constOfProp && !stopTime) {
    ggb1.instance.setValue("feedback", true);
  }

  //display 'well done' on ggb screen if correct
  if (
    (time >= 100 / constOfProp && stopTime && trueAll) ||
    (coins == 100 && stopTime && trueAll)
  ) {
    ggb1.instance.setValue("feedback2", true);
  }

  //display values on screen
  let maxTime = Math.max(
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    enteredTimeB2,
    enteredTimeB3,
    enteredTimeB4,
    enteredTimeB5,
    enteredTimeB6,
    enteredTimeB7
  );

  if (time >= 100 / constOfProp && !stopTime) {
    text3.updateData({
      visible: true,
      text: `Time: $?$ seconds
    
  Coins sorted: $?$`,
    });
  } else {
    text3.updateData({
      visible: true,
      text: `Time: $${time}$ seconds
      
    Coins sorted: $${coins}$`,
    });
  }

  //highlight rows that validate false
  if (time > 0 && !validateRow2) {
    table1.updateCell(0, 0, { className: "bg-danger" });
    table1.updateCell(0, 1, { className: "bg-danger" });
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  }
  if (time > 0 && !validateRow3) {
    table1.updateCell(1, 0, { className: "bg-danger" });
    table1.updateCell(1, 1, { className: "bg-danger" });
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    text3.updateData({
      visible: true,
      text: `Time: $${enteredTimeB3}$ seconds
        
      Coins sorted: $${b3}$`,
    });
  }
  if (time > 0 && !validateRow4) {
    table1.updateCell(2, 0, { className: "bg-danger" });
    table1.updateCell(2, 1, { className: "bg-danger" });
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    text3.updateData({
      visible: true,
      text: `Time: $${a4}$ seconds
        
      Coins sorted: $${enteredCoinsA4}$`,
    });
  }
  if (time > 0 && !validateRow5) {
    table1.updateCell(3, 0, { className: "bg-danger" });
    table1.updateCell(3, 1, { className: "bg-danger" });
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    text3.updateData({
      visible: true,
      text: `Time: $${enteredTimeB5}$ seconds
        
      Coins sorted: $${b5}$`,
    });
  }
  if (time > 0 && !validateRow6) {
    table1.updateCell(4, 0, { className: "bg-danger" });
    table1.updateCell(4, 1, { className: "bg-danger" });
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    text3.updateData({
      visible: true,
      text: `Time: $${a6}$ seconds
        
      Coins sorted: $${enteredCoinsA6}$`,
    });
  }
  if (time > 0 && !validateRow7) {
    table1.updateCell(5, 0, { className: "bg-danger" });
    table1.updateCell(5, 1, { className: "bg-danger" });
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
    text3.updateData({
      visible: true,
      text: `Time: $${a7}$ seconds
        
      Coins sorted: $${enteredCoinsA7}$`,
    });
  }
});

//button 1 starts time and makes cells not editable
buttonGroup1.on("click:1", () => {
  ggb1.instance.setAnimating("scrub", true);
  ggb1.instance.startAnimation();
  table1.updateCell(0, 0, { editable: false });
  table1.updateCell(0, 1, { editable: false });
  table1.updateCell(1, 0, { editable: false });
  table1.updateCell(1, 1, { editable: false });
  table1.updateCell(2, 0, { editable: false });
  table1.updateCell(2, 1, { editable: false });
  table1.updateCell(3, 0, { editable: false });
  table1.updateCell(3, 1, { editable: false });
  table1.updateCell(4, 0, { editable: false });
  table1.updateCell(4, 1, { editable: false });
  table1.updateCell(5, 0, { editable: false });
  table1.updateCell(5, 1, { editable: false });
});

//button 2 resets everything
//manually change cell editable true/false states according to cells editable by students
buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.evalCommand("RunClickScript(buttonResetAll)");
  table1.updateCell(0, 0, { className: "", editable: false });
  table1.updateCell(0, 1, { className: "", editable: false });
  table1.updateCell(1, 0, { className: "", editable: false });
  table1.updateCell(1, 1, { className: "", editable: true });
  table1.updateCell(2, 0, { className: "", editable: true });
  table1.updateCell(2, 1, { className: "", editable: false });
  table1.updateCell(3, 0, { className: "", editable: false });
  table1.updateCell(3, 1, { className: "", editable: true });
  table1.updateCell(4, 0, { className: "", editable: true });
  table1.updateCell(4, 1, { className: "", editable: false });
  table1.updateCell(5, 0, { className: "", editable: true });
  table1.updateCell(5, 1, { className: "", editable: false });
  ggb1.instance.setValue("feedback", false);
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setValue("scrub", 0);
  ggb1.instance.evalCommand("Execute(orderRandomizeStart)");
  ggb1.instance.evalCommand("Execute(orderSetLayer)");
  ggb1.instance.evalCommand("Execute(orderSetVisibleInView)");
  text3.updateData({
    visible: true,
    text: `Time: $0$ seconds
    
  Coins sorted: $0$`,
  });
});
