//declare global variables
//ggbName is not necessary for most applications, but included here to illustrate the first parameter
var ggbName;
var ggbObject;

function ggbOnInit(a, b) {
    //assign values passed from ggbOnInit to global variables
    ggbName = a;
    ggbObject = b;
    //use assigned value of ggbObject as object reference in place of ggbApplet
    ggbObject.registerAddListener("plot");
}
