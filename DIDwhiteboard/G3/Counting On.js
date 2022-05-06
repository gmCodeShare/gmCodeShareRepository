function ggbOnInit() {
  ggbApplet.registerObjectUpdateListener("InputBox1", "getSet");
  ggbApplet.registerClientListener("copy");
  ggbApplet.registerObjectClickListener("button2", "organize");
  ggbApplet.registerObjectUpdateListener("time", "bundle");
  ggbApplet.registerObjectUpdateListener("time2", "bundle");
}

//sets the initial values of global variables
var click = 0;
var hundredPics = 0;
var tenPics = 0;
var onePics = 0;

//gets the value of the hundreds, tens, and ones places based on user input
function getSet() {
  hundredPics = ggbApplet.getValue("StartingHundreds");
  tenPics = ggbApplet.getValue("StartingTens");
  onePics = ggbApplet.getValue("StartingOnes");
  //starts stick creation
  createOnesSticks();
  createTensSticks();
  createHundredsSticks();
}

//stick creation
function createOnesSticks() {
  //create ones bundles that are free to move by translating the pictures in the toolbox
  for (var i = 0; i < onePics; i++) {
    ggbApplet.evalCommand("OPic" + i + "=CopyFreeObject(Translate(onePic,Vector((2*SectionWidth-5,-3),(2*SectionWidth+4Mod(" + i + ",5)+1,SectionHeight-2-4*Floor(" + i + "/5)))))");
    ggbApplet.setVisible("OPic" + i, true);
  }
  ggbApplet.setValue("time", 0);
  ggbApplet.setValue("time2", 0);
}

//stick creation
function createTensSticks() {
  //create tens bundles that are free to move by translating the pictures in the toolbox
  for (var i = 0; i < tenPics; i++) {
    ggbApplet.evalCommand("TPic" + i + "=CopyFreeObject(Translate(tenPic,Vector((SectionWidth+9,-3),(SectionWidth+4Mod(" + i + ",5)+1,SectionHeight-2-4*Floor(" + i + "/5)))))");
    ggbApplet.setVisible("TPic" + i, true);
  }
  ggbApplet.setValue("time", 0);
  ggbApplet.setValue("time2", 0);
}

//stick creation
function createHundredsSticks() {
  //create hundreds bundles that are free to move by translating the pictures in the toolbox
  for (var i = 0; i < hundredPics; i++) {
    ggbApplet.evalCommand("HPic" + i + "=CopyFreeObject(Translate(hundredPic,Vector((SectionWidth+2,-3),(4Mod(" + i + ",5)+1,SectionHeight-2-4*Floor(" + i + "/5)))))");
    ggbApplet.setVisible("HPic" + i, true);
  }
  ggbApplet.setValue("time", 0);
  ggbApplet.setValue("time2", 0);
}

//make a new copy of whatever picture is dragged once it crosses the chart line
function copy(grabbed) {
  //sets information about whatever is selected
  if (grabbed[0] == "select") {
    name = grabbed[1];
    type = ggbApplet.getObjectType(grabbed[1]);
    click = click + 1;
    //creates a point on the corner that helps it determine when it crossed the line
    ggbApplet.evalCommand("Corner" + click + "=Corner(" + name + ",1)");
    ggbApplet.setVisible("Corner" + click, false);
    var xStart = ggbApplet.getXcoord("Corner" + click);
    var yStart = ggbApplet.getYcoord("Corner" + click);
  }
  //when dragged
  if (grabbed[0] == "dragEnd") {
    type = ggbApplet.getObjectType(grabbed[1]);
    //gets coordinates of the corner point
    var xEnd = ggbApplet.getXcoord("Corner" + click);
    var yEnd = ggbApplet.getYcoord("Corner" + click);
    //if the picture dragged is a hundreds bundle and over the line
    if (name.includes("hundred") && yEnd > -1) {
      //create a new copy of the dragged image and put the old one back in the toolbox
      ggbApplet.evalCommand("HPic" + hundredPics + "=CopyFreeObject(" + name + ")");
      ggbApplet.setCoords("A_1", 23, -6);
      ggbApplet.setCoords("B_1", 26, -6);
      ggbApplet.setCoords("C_1", 23, -3);
      hundredPics = hundredPics + 1;
      //reorganizes the chart
      createHundredsSticks();
    }
    //if the picture dragged is a tens bundle and over the line
    if (name.includes("ten") && yEnd > -1) {
      //create a new copy of the dragged image and put the old one back in the toolbox
      ggbApplet.evalCommand("TPic" + tenPics + "=CopyFreeObject(" + name + ")");
      ggbApplet.setCoords("D_1", 30, -6);
      ggbApplet.setCoords("E_1", 32, -6);
      ggbApplet.setCoords("F_1", 30, -3);
      tenPics = tenPics + 1;
      //reorganize the chart
      createTensSticks();
      //if that last drag made a set of ten bundles, animate time to gather them up and exchange for a hundred bundle
      if (tenPics == 10) {
        hundredPics = hundredPics + 1;
        ggbApplet.stopAnimation();
        ggbApplet.setValue("time2", 0);
        ggbApplet.setAnimating("time2", true);
        ggbApplet.setAnimating("time", false);
        ggbApplet.startAnimation();
      }
    }
    //if the picture dragged is a ones stick and over the line
    if (name.includes("one") && yEnd > -1) {
      //create a new copy of the dragged image and put the old one back in the toolbox
      ggbApplet.evalCommand("OPic" + onePics + "=CopyFreeObject(" + name + ")");
      ggbApplet.setCoords("G_1", 37, -3);
      ggbApplet.setCoords("H_1", 37, -6);
      ggbApplet.setCoords("I_1", 37.5, -6);
      onePics = onePics + 1;
      //reorganize the chart
      createOnesSticks();
      //if that last drag made a set of one sticks, animate time to gather them up and exchange for a tens bundle
      if (onePics == 10) {
        tenPics = tenPics + 1;
        if (tenPics == 10) {
          hundredPics = hundredPics + 1;
        }
        ggbApplet.stopAnimation();
        ggbApplet.setValue("time", 0);
        ggbApplet.setAnimating("time", true);
        ggbApplet.setAnimating("time2", false);
        ggbApplet.startAnimation();
      }
    }
  }
}

//called by time and time2
function bundle() {
  for (var i = 0; i < 10; i++) {
    //for a set of ones sticks
    if (onePics == 10) {
      //hide the sticks
      ggbApplet.setVisible("OPic" + i, false);
      //create new pictures that translate along vectors
      ggbApplet.evalCommand("OTPic" + (tenPics + i) + "=Translate(OPic" + i + ",AnimT(time)*Element(OnesVectors," + (i + 1) + "))");
      //at the end of the time slider, switch the sticks for a bundle and delete the translating images
      if (ggbApplet.getValue("time") > 0.9) {
        ggbApplet.setVisible("bundledTenPic", true);
        ggbApplet.deleteObject("OTPic" + (tenPics + i));
      }
      //at the very end of the slider
      if (ggbApplet.getValue("time") > 0.98) {
        //get rid of the bundle so that the chart can be reorganized
        ggbApplet.setVisible("bundledTenPic", false);
        //make the onePics value reflect the chart
        onePics = 0;
        ggbApplet.deleteObject("OPic" + i);
        //organize
        createOnesSticks();
        createTensSticks();
        if (ggbApplet.getValue("time") == 1 && tenPics == 10) {
          ggbApplet.stopAnimation();
          ggbApplet.setAnimating("time", false);
          ggbApplet.setAnimating("time2", true);
          ggbApplet.startAnimation();
        }
      }
    }
    //for a set of tens bundles
    if (tenPics == 10 && onePics != 10) {
      //hide the bundles
      ggbApplet.setVisible("TPic" + i, false);
      //create new pictures that translate along vectors
      ggbApplet.evalCommand("THPic" + (hundredPics + i) + "=Translate(TPic" + i + ",AnimT(time2)*Element(TensVectors," + (i + 1) + "))");
      //at the end of the time slider, switch the sticks for a bundle and delete the translating images
      if (ggbApplet.getValue("time2") > 0.9) {
        ggbApplet.setVisible("bundledHundredPic", true);
        ggbApplet.deleteObject("THPic" + (hundredPics + i));
      }
      //at the very end of the slider
      if (ggbApplet.getValue("time2") > 0.98) {
        //get rid of the bundle so that the chart can be reorganized
        ggbApplet.setVisible("bundledHundredPic", false);
        //make the tenPics value reflect the chart
        ggbApplet.deleteObject("TPic" + i);
        tenPics = 0;
        //organize
        createTensSticks();
        createHundredsSticks();
      }
    }
  }
}