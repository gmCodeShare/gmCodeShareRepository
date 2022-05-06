function ggbOnInit(name, ggbObject) {
  //what the applet will be called
  var arialabel = 'Title of Interactive';
  //list of all canvases
  var ggbcanvasarray = document.querySelectorAll('canvas');
  console.log(ggbcanvasarray);
  //variable that allows you to iterate
  var i = 0;
  //while loop - while it's not called ggb
  console.log(
    ggbcanvasarray[i]
      .closest('div.appletParameters,div.notranslate')
      .getAttribute('id')
      .includes('ggb')
  );

  while (
    (ggbcanvasarray[i].closest('div.notranslate') === null &&
      ggbcanvasarray[i].closest('div.appletParameters') === null) ||
    (ggbcanvasarray[i].closest('div.appletParameters,div.notranslate') !=
      null &&
      !ggbcanvasarray[i]
        .closest('div.appletParameters,div.notranslate')
        .getAttribute('id')
        .includes('ggb'))
  ) {
    //iterate
    console.log(i);
    i++;
  }
  //assign the canvas from the array that does have a ggb parent with id of ggb
  var ggbAppletCanvas = ggbcanvasarray[i];
  console.log(ggbAppletCanvas);
  //assign the parent node to parameter ID
  var parameterID = ggbAppletCanvas
    .closest('div.appletParameters,div.notranslate')
    .getAttribute('id');
  console.log(parameterID);
  //assign canvas ID
  var canvasID = 'canvas' + parameterID;
  console.log(canvasID);
  //set the id
  ggbAppletCanvas.setAttribute('id', canvasID);

  var id = 'canvas' + name;
  var ggbcanvas = document.getElementById(id);
  console.log(ggbcanvas);
  if (ggbcanvas) {
    //set aria label
    ggbcanvas.setAttribute('aria-label', arialabel);
  }
  console.log(ggbcanvas.getAttribute('aria-label'));
}
