var ggbcanvas = document.querySelector("canvas");

function ggbOnInit() {
  ggbApplet.registerClientListener("xMarksTheSpot");
  ggbApplet.registerObjectUpdateListener("Slider", "mischiefManaged");
  ggbcanvas.addEventListener("mouseup", deselect);
}

var slider = ggbApplet.getValue("Slider");

function xMarksTheSpot(a) {
  if (a[0] == "mouseDown") {
    if (a.hits[0] == "list") {
      ggbApplet.evalCommand("SetValue(data,Remove(data,{" + Math.round(slider * a.x) / slider + "}))");
      validate();
    } else {
      if (a.hits[0] != "slider") {
        ggbApplet.setListValue("data", ggbApplet.getValue("length") + 1, Math.round(slider * a.x) / slider);
        ggbApplet.setPointStyle("list", 1);
        validate();
      };
    };
  }

}

function validate() {
  ggbApplet.setValue("correct", 0);
  if (ggbApplet.getValue("CorrectA") >= 1) {
    ggbApplet.setValue("correct", ggbApplet.getValue("correct") + 0.2);
  }
  if (ggbApplet.getValue("CorrectB") >= 1) {
    ggbApplet.setValue("correct", ggbApplet.getValue("correct") + 0.2);
  }
  if (ggbApplet.getValue("CorrectC") >= 1) {
    ggbApplet.setValue("correct", ggbApplet.getValue("correct") + 0.2);
  }
  if (ggbApplet.getValue("CorrectD") >= 1) {
    ggbApplet.setValue("correct", ggbApplet.getValue("correct") + 0.2);
  }
  if (ggbApplet.getValue("CorrectE") >= 1) {
    ggbApplet.setValue("correct", ggbApplet.getValue("correct") + 0.2);
  }
  if (ggbApplet.getValue("Length(list)") > 5) {
    ggbApplet.setValue("correct", ggbApplet.getValue("Max(correct-0.2*(Length(list)-5),0)"));
  }
  console.log("Correct: " + ggbApplet.getValue("correct"));
}

function mischiefManaged() {
  ggbApplet.evalCommand("data={}");
  slider = ggbApplet.getValue("Slider");
  ggbApplet.setValue("correct", 0);
}

function deselect() {
  ggbApplet.evalCommand("SelectObjects()");
};