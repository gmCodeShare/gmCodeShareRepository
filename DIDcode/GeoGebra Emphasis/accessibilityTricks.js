// helpful definitions and common code for accessibility.

/**
 * APPLET STATUS TEXT FOR SCREADER
 *
 * It's helpful to have an editable status text not shown and a screader-visible text
 * 50 or so pixels off the screen that depends on the status text
 */

/* in GGB:
Execute({"Corner3 = Corner(3)", "Corner1 = Corner(1)", "screen = Corner(5)", "xPix = (x(Corner3) - x(Corner1)) / x(screen)", "yPix = (y(Corner3) - y(Corner1)) / y(screen)", "escText = "+UnicodeToLetter(34)+"Press the escape key to exit the interactive and return to the page."+UnicodeToLetter(34)}) 
// create status text with toolbar; use a dynamic box to reference escText, then hide status text
AAppletStatus = Text(status, Corner(2) + (50 xPix, -50 yPix))
*/

/**
 * READING TEXT IN JS
 */

// if you can use a backtick string:
const readText1 = `ReadText("Your text here")`;
ggbObject.evalCommand(readText1);

// another option
const myText = "Your text here";
const readText2 = `ReadText("${myText}")`;
ggbObject.evalCommand(readText2);

// if you're stuck with double quotes
const readText3 = "ReadText(\"Your text here\")";
ggbObject.evalCommand(readText3);

// another option
const readText4 = "ReadText(\"" + myText + "\")";
ggbObject.evalCommand(readText4);
