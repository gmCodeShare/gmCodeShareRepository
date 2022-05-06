function ggbOnInit() {
  ggbApplet.setSize(590, 590);
  ggbApplet.registerClientListener("press");
  //hover state listeners below
  var ggbcanvas = document.querySelector("canvas");
  ggbcanvas.addEventListener("mousemove", function(e) {
    polygon(e);
  });
}
var PandaNumberArray = [];

function press(a) {
  if (a[0] == "mouseDown") {
    let buttonNum = ggbApplet.getValue("buttonHoverNum");
    switch (buttonNum) {
      case 0:
        ggbApplet.stopAnimation();
        ggbApplet.setAnimating("time", false);
        ggbApplet.setValue("time", 0);
        ggbApplet.setValue("scaleFactorBool", false);
        ggbApplet.setValue("enlargementBool", false);
        ggbApplet.setValue("reductionBool", false);
        if (PandaNumberArray.length == 0) {
          PandaNumberArray.push("0")
        } else {
          PandaNumberArray.push(PandaNumberArray[0] + "0");
          PandaNumberArray.shift();
        }
        break;
      case 1:
        ggbApplet.stopAnimation();
        ggbApplet.setAnimating("time", false);
        ggbApplet.setValue("time", 0);
        ggbApplet.setValue("scaleFactorBool", false);
        ggbApplet.setValue("enlargementBool", false);
        ggbApplet.setValue("reductionBool", false);
        if (PandaNumberArray.length == 0) {
          PandaNumberArray.push("1")
        } else {
          PandaNumberArray.push(PandaNumberArray[0] + "1");
          PandaNumberArray.shift();
        }
        break;
      case 2:
        ggbApplet.stopAnimation();
        ggbApplet.setAnimating("time", false);
        ggbApplet.setValue("time", 0);
        ggbApplet.setValue("scaleFactorBool", false);
        ggbApplet.setValue("enlargementBool", false);
        ggbApplet.setValue("reductionBool", false);
        if (PandaNumberArray.length == 0) {
          PandaNumberArray.push("2")
        } else {
          PandaNumberArray.push(PandaNumberArray[0] + "2");
          PandaNumberArray.shift();
        }
        break;
      case 3:
        ggbApplet.stopAnimation();
        ggbApplet.setAnimating("time", false);
        ggbApplet.setValue("time", 0);
        ggbApplet.setValue("scaleFactorBool", false);
        ggbApplet.setValue("enlargementBool", false);
        ggbApplet.setValue("reductionBool", false);
        if (PandaNumberArray.length == 0) {
          PandaNumberArray.push("3")
        } else {
          PandaNumberArray.push(PandaNumberArray[0] + "3");
          PandaNumberArray.shift();
        }
        break;
      case 4:
        ggbApplet.stopAnimation();
        ggbApplet.setAnimating("time", false);
        ggbApplet.setValue("time", 0);
        ggbApplet.setValue("scaleFactorBool", false);
        ggbApplet.setValue("enlargementBool", false);
        ggbApplet.setValue("reductionBool", false);
        if (PandaNumberArray.length == 0) {
          PandaNumberArray.push("4")
        } else {
          PandaNumberArray.push(PandaNumberArray[0] + "4");
          PandaNumberArray.shift();
        }
        break;
      case 5:
        ggbApplet.stopAnimation();
        ggbApplet.setAnimating("time", false);
        ggbApplet.setValue("time", 0);
        ggbApplet.setValue("scaleFactorBool", false);
        ggbApplet.setValue("enlargementBool", false);
        ggbApplet.setValue("reductionBool", false);
        if (PandaNumberArray.length == 0) {
          PandaNumberArray.push("5")
        } else {
          PandaNumberArray.push(PandaNumberArray[0] + "5");
          PandaNumberArray.shift();
        }
        break;
      case 6:
        ggbApplet.stopAnimation();
        ggbApplet.setAnimating("time", false);
        ggbApplet.setValue("time", 0);
        ggbApplet.setValue("scaleFactorBool", false);
        ggbApplet.setValue("enlargementBool", false);
        ggbApplet.setValue("reductionBool", false);
        if (PandaNumberArray.length == 0) {
          PandaNumberArray.push("6")
        } else {
          PandaNumberArray.push(PandaNumberArray[0] + "6");
          PandaNumberArray.shift();
        }
        break;
      case 7:
        ggbApplet.stopAnimation();
        ggbApplet.setAnimating("time", false);
        ggbApplet.setValue("time", 0);
        ggbApplet.setValue("scaleFactorBool", false);
        ggbApplet.setValue("enlargementBool", false);
        ggbApplet.setValue("reductionBool", false);
        if (PandaNumberArray.length == 0) {
          PandaNumberArray.push("7")
        } else {
          PandaNumberArray.push(PandaNumberArray[0] + "7");
          PandaNumberArray.shift();
        }
        break;
      case 8:
        ggbApplet.stopAnimation();
        ggbApplet.setAnimating("time", false);
        ggbApplet.setValue("time", 0);
        ggbApplet.setValue("scaleFactorBool", false);
        ggbApplet.setValue("enlargementBool", false);
        ggbApplet.setValue("reductionBool", false);
        if (PandaNumberArray.length == 0) {
          PandaNumberArray.push("8")
        } else {
          PandaNumberArray.push(PandaNumberArray[0] + "8");
          PandaNumberArray.shift();
        }
        break;
      case 9:
        ggbApplet.stopAnimation();
        ggbApplet.setAnimating("time", false);
        ggbApplet.setValue("time", 0);
        ggbApplet.setValue("scaleFactorBool", false);
        ggbApplet.setValue("enlargementBool", false);
        ggbApplet.setValue("reductionBool", false);
        if (PandaNumberArray.length == 0) {
          PandaNumberArray.push("9")
        } else {
          PandaNumberArray.push(PandaNumberArray[0] + "9");
          PandaNumberArray.shift();
        }
        break;
      case 10:
        ggbApplet.stopAnimation();
        ggbApplet.setAnimating("time", false);
        ggbApplet.setValue("time", 0);
        ggbApplet.setValue("scaleFactorBool", false);
        ggbApplet.setValue("enlargementBool", false);
        ggbApplet.setValue("reductionBool", false);
        PandaNumberArray = [];
        break;
      case 11:
        ggbApplet.stopAnimation();
        ggbApplet.setAnimating("time", false);
        ggbApplet.setValue("time", 0);
        ggbApplet.setValue("scaleFactorBool", true);
        ggbApplet.setValue("enlargementBool", false);
        ggbApplet.setValue("reductionBool", false);
        ggbApplet.setAnimating("time", true);
        ggbApplet.startAnimation();
        break;
      case 12:
        ggbApplet.stopAnimation();
        ggbApplet.setAnimating("time", false);
        ggbApplet.setValue("time", 0);
        ggbApplet.setValue("scaleFactorBool", false);
        ggbApplet.setValue("enlargementBool", true);
        ggbApplet.setValue("reductionBool", false);
        ggbApplet.setAnimating("time", true);
        ggbApplet.startAnimation();
        break;
      case 13:
        ggbApplet.stopAnimation();
        ggbApplet.setAnimating("time", false);
        ggbApplet.setValue("time", 0);
        ggbApplet.setValue("scaleFactorBool", false);
        ggbApplet.setValue("enlargementBool", false);
        ggbApplet.setValue("reductionBool", true);
        ggbApplet.setAnimating("time", true);
        ggbApplet.startAnimation();
        break;
      case 14:
        ggbApplet.stopAnimation();
        ggbApplet.setAnimating("time", false);
        ggbApplet.setValue("time", 0);
        ggbApplet.setValue("scaleFactorBool", false);
        ggbApplet.setValue("enlargementBool", false);
        ggbApplet.setValue("reductionBool", false);
        ggbApplet.setValue("valHun", 0);
        ggbApplet.setValue("valTen", 0);
        ggbApplet.setValue("valOne", 0);
        ggbApplet.setValue("percentBool", !ggbApplet.getValue("percentBool"));
        break;
      case 15:
        if (PandaNumberArray.length == 0) {
          PandaNumberArray.push(".")
        } else {
          PandaNumberArray.push(PandaNumberArray[0] + ".");
          PandaNumberArray.shift();
        }
        break;
    }
  }
  console.log(PandaNumberArray);
}

/*window.addEventListener('mouseup') {
    if (ggbApplet.getValue("IsInRegion(follow,hoverRegion)")) {
        start();
    } else {
        ggbApplet.setVisible("pressedButton", false);
    }
}*/

//All hover state code is below.
var ggbcanvas = document.querySelector("canvas");

//polygon is hover state function below
function polygon(event) {
  // read properties of the canvas element
  var boundingbox = ggbcanvas.getBoundingClientRect();
  var boxleft = boundingbox.left;
  var boxtop = boundingbox.top;
  var boxwidth = boundingbox.width;
  var boxheight = boundingbox.height;

  // get pixel coodinates of cursor relative to the canvas element
  var x = event.clientX - boxleft;
  var y = event.clientY - boxtop;

  // set coordinates of point follow to match cursor coordinates in the Geogebra coordinate system
  ggbApplet.setCoords("Follow", ggbApplet.getXcoord("corner4") + x * ggbApplet.getValue("xd") / boxwidth, ggbApplet.getYcoord("corner4") - y * ggbApplet.getValue("yd") / boxheight);
}