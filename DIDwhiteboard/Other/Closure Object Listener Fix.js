//use this code block any time there is an ObjectClickListener or ObjectUpdateListener in your closure
//place the code block above your listeners, and don't delete the original listeners

ggbObject.registerAddListener(function (a) {
  var assignment = {
    //replace each "objectName" with each object name and each "functionName" with each function name in your listener(s)
    objectName: functionName,
    objectName2: functionName2,
  };
  if (assignment[a]) {
    //make sure to change line 12 to "ggbObject.registerObjectClickListener(a, assignment[a]);" if your listener is an ObjectClickListener
    ggbObject.registerObjectUpdateListener(a, assignment[a]);
  }
});
