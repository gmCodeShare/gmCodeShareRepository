// validates numerical student responses and keeps them within the provided bounds
/**
 * HOW TO USE:
 * * The function returns values, so use it with variable assignments:
 *     const studentAnswer = boundIt(input1.data.text, 0, 10, 0);
 * * For visibility, it's recommended to update the platform input component with the
 *   bounded value:
 *     input1.updateData({ text: studentAnswer });
 * * Optionally, have function return an object with more info by passing true:
 *     const studentInfo = boundIt(input1.data.text, 0, 10, 0, true);
 *     if(studentInfo.boundedVal !== studentInfo.value) {
 *       input1.updateData({ text: studentInfo.boundedVal });
 *     }
 */

function boundIt(inputString, min, max, def = 0, moreInfo = false) {
  const { value, error } = utils.math.evaluateLatex(inputString);
  let boundedVal = value;
  if (error) {
    // what should the text do/say if students input "cabbage"?
    // whatever you go with here, make sure it's inside of your min and max!
    boundedVal = def;
  } else if (value < min) {
    boundedVal = min;
  } else if (value > max) {
    boundedVal = max;
  }
  // you can add things like floor or toFixed to validate only integers, or something similar
  //  else { boundedVal = Math.floor(value) }
  if (moreInfo) {
    return { boundedVal, value, error };
  }
  return boundedVal;
}

// component-specific versions below
/*
  HOW TO USE:
    > The function returns values, so it can be used with variable assignments, as follows:
      let studentAnswer = boundIt(input1, 0, 10);
    > Make sure the source of the input (which is what you put in the function's first argument) matches
      the platform name of that component. It will automatically change the text value in the source
      (input box in this example). This is important for visibility of system status!
*/

function boundIt(inputComp, min, max) {
  const result = utils.math.evaluateLatex(inputComp.data.text);
  if (result.error) {
    inputComp.updateData({ text: "0" }); // what should the text do/say if students input "cabbage"?
    return 0; // whatever you go with here, make sure it's inside of your min and max!
  } else if (result.value < min) {
    inputComp.updateData({ text: `${min}` });
    return min;
  } else if (result.value > max) {
    inputComp.updateData({ text: `${max}` });
    return max;
  }
  // you can add things like floor or toFixed to validate only integers, or something similar
  //let flooredNum = Math.floor(result.value);
  //inputComp.updateData({ text: `${flooredNum}` });
  //return flooredNum;
  return result.value;
}

//to use boundIt with a fill in the blank component, use this function.  Remember that position starts at 0.
function boundIt(inputComp, position, min, max) {
  const result = utils.math.evaluateLatex(inputComp.getInput(position).text);
  if (result.error) {
    inputComp.updateInput(position, { text: "0" }); // what should the text do/say if students input "cabbage"?
    return 0; // whatever you go with here, make sure it's inside of your min and max!
  } else if (result.value < min) {
    inputComp.updateInput(position, { text: `${min}` });
    return min;
  } else if (result.value > max) {
    inputComp.updateInput(position, { text: `${max}` });
    return max;
  }
  // you can add things like floor or toFixed to validate only integers, or something similar
  //let flooredNum = Math.floor(result.value);
  //inputComp.updateInput(position, { text: `${flooredNum}` });
  //return flooredNum;
  return result.value;
}

//boundIt function for old table component
function boundIt(tableComp, row, column, min, max) {
  const result = utils.math.evaluateLatex(tableComp.getCell(row, column).value);
  if (result.error) {
    table1.updateCell(row, column, {
      value: "1",
    }); // what should the text do/say if students input "cabbage"?
    return 1; // whatever you go with here, make sure it's inside of your min and max!
  } else if (result.value < min) {
    table1.updateCell(row, column, {
      value: `${min}`,
    });
    return min;
  } else if (result.value > max) {
    table1.updateCell(row, column, {
      value: `${max}`,
    });
    return max;
  }
  // you can add things like floor or toFixed to validate only integers, or something similar
  //let flooredNum = Math.floor(result.value);
  //inputComp.updateData({ text: `${flooredNum}` });
  //return flooredNum;
  return result.value;
}
