//Putting equations into the input box will often make them ungraphable.  This function will remove LaTeX formatting such that GeoGebra can then graph the function.
//I made these all separate variables so that you can console.log at different steps to make sure it's functioning as expected.

let frac = input1.data.text.replace(/\\frac{/, "(");                  //replaces \frac{
let fracMid = frac.replace(/\}\{/, ")/(");                            //replaces }{ from \frac{}{}
let leftParen = fracMid.replace(/\\left/g, "");                       //replaces \left part of parens
let rightParen = leftParen.replace(/\\right/g, "");                   //replaces \right part of parens
let absLeft = rightParen.replace(/\|/, "abs(");                       //replaces left bar for absolute value
let absRight = absLeft.replace(/\|/, ")");                            //replaces right bar for absolute value
let squirtLeft = absRight.replace(/\\sqrt\{/, "sqrt(");               //replaces \sqrt for square root function
let cbrtLeft = squirtLeft.replace(/\\sqrt\[3\]\{/, "cbrt(");          //replaces \sqrt[3]{} for cube root function
let brackRight = cbrtLeft.replace(/\}/g, ")");                        //replaces the right side brackets
let brackLeft = brackRight.replace(/\{/g, "(");                       //replaces any remaining left side brackets
let lessThan = brackLeft.replace(/\\le/g, "<=");                      //replaces less than
let greaterThan = lessThan.replace(/\\ge/g, ">=");                    //replaces greater than
let cDot = greaterThan.replace(/\\cdot/g, "*");                       //replaces cDots with asterisks
let finalAnswer = cDot;                                               /*.replace(//,"");*/ //empty in case of additions

// This function returns the unLaTeX'd version of an input:

function undoLaTeX(inp) {
  let frac = inp.replace(/\\frac{/, "(");
  let fracMid = frac.replace(/\}\{/, ")/(");
  let leftParen = fracMid.replace(/\\left/g, "");
  let rightParen = leftParen.replace(/\\right/g, "");
  let absLeft = rightParen.replace(/\|/, "abs(");
  let absRight = absLeft.replace(/\|/, ")");
  let squirtLeft = absRight.replace(/\\sqrt\{/, "sqrt(");
  let cbrtLeft = squirtLeft.replace(/\\sqrt\[3\]\{/, "cbrt(");
  let brackRight = cbrtLeft.replace(/\}/g, ")");
  let brackLeft = brackRight.replace(/\{/g, "(");
  let lessThan = brackLeft.replace(/\\le/g, "<=");
  let greaterThan = lessThan.replace(/\\ge/g, ">=");
  let cDot = greaterThan.replace(/\\cdot/g, "*");
  let finalAnswer = cDot;
  return finalAnswer;
}

/**
 * HOW TO USE
 *
 * 1. Pass input data to the undoLaTeX function:
 * const inputPlain = undoLaTeX(input1.data.text);
 *
 * 2. Set error dialogs inactive and pass to GGB
 * ggb1.instance.setErrorDialogsActive(false);
 * let newFunc = ggb1.instance.evalCommandGetLabels(inputPlain);
 *
 * 3. Check the new object!
 * if (!newFunc) {
 *   // what happens if the student inputs "cabbage"?
 * }
 */

// Another take, requires a GGB:

function unLaTeX(latex, ...vars) {
  // x and y are first class citizens in GGB; need to anonymize
  vars.push("eksX", "wieY");
  // define variables so GGB can write equations with them
  ggb1.instance.setErrorDialogsActive(false);
  for (let i = 0, L = vars.length; i < L; i++) {
    if (vars[i] && !ggb1.instance.exists(vars[i])) {
      const newVar = ggb1.instance.evalCommandGetLabels(`${vars[i]} = 1`);
      ggb1.instance.setVisible(newVar, false);
    }
  }
  let generalXY = latex.replaceAll("x", "eksX").replaceAll("y", "wieY");
  ggb1.instance.evalLaTeX(`dummy: ${generalXY}`);
  let defString = ggb1.instance.getDefinitionString("dummy");
  // functions don't like definition strings
  if (!defString) {
    defString = ggb1.instance
      .getValueString("dummy")
      .replace("dummy(x) = ", "")
      .replace("dummy", "")
      .replace(":", "");
  }
  // un-anonymize and patch fractions
  defString = defString
    .replaceAll("eksX", "x")
    .replaceAll("wieY", "y")
    .replace(/(\S*) \/ (\S*)/g, "$1 / $2 * 1");
  ggb1.instance.deleteObject("dummy");
  return defString;
}

// As needed, pass extra arguments into the function for variables you want to use
// Examples:

let eq1 = unLaTeX("y = \\frac{2}{3} \\cdot x");
// >> "y = 2 / 3 * 1 x"

let eq2 = unLaTeX("c = \\frac{2}{3} \\cdot d", "c", "d");
// >> "c = 2 / 3 * 1 d"
