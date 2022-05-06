//Creates text boxes for Alt Text purposes. Paste into GGB Input bar.
//Manually set position of AAppletSummary to Corner(2)+(15,-15) and hide other objects.
//Use TabOrder with discretion (when using evalCommand(ReadText) the text object must be in TabOrder or it breaks
/*
Execute({
  "escTextCount=0",
  "initial="+UnicodeToLetter(34)+"Insert overall initial state. "+UnicodeToLetter(34)"",
  "status="+UnicodeToLetter(34)+" Insert dynmamic state of applet. "+UnicodeToLetter(34)"",
  "escText="+UnicodeToLetter(34)+" Press the escape key to exit the interactive and return to the page."+UnicodeToLetter(34)"",
  "AAppletSummary=initial+status+"+UnicodeToLetter(34)+" Press the escape key to exit the interactive and return to the page."+UnicodeToLetter(34)"",
  "TabOrder={AAppletSummary}",
  "SetFixed(status, false, true)",
  "SetFixed(escText, false, true)",
  "SetFixed(AAppletSummary, false, true)",
  "SetFixed(TabOrder, false, true)"
  })
  */

//paste in GGB Global JS
ggbObject.registerClientListener(functionName);

function functionName(a) {
  if (a.type == "select") {
    if (a.target == "AAppletStatus") {
      ggbObject.setValue("escTextCount" + 1);
    }
  }
}

//"AAppletSummary=initial+status+"+UnicodeToLetter(34)+" Press the escape key to exit the interactive and return to the page."+UnicodeToLetter(34)"",

//....+UnicodeToLetter(34)+.... +UnicodeToLetter(34)....is used to escape the "" when executing a text object.Note" The first Unicode has + before and after and is inside the "" of the text object, the second only has one + before and it is after the "" for the text object

/*SetVisibleInView is not working nicely for our purposes:
  "SetVisibleInView( AAppletSummary, 1, true )",
  "SetVisibleInView( status, 1, false )",
  "SetVisibleInView( escText, 1, false )",
  "SetVisibleInView( TabOrder, 1, false )"
*/
