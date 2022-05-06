const { ggb1, buttonGroup1, input1 } = components;

buttonGroup1.on("click:1", () => {
  ggb1.instance.setValue("StartingNum", input1.data.text);
  getSet();
});

buttonGroup1.on("click:2", () => {
  reset();
});

autorun(() => {
  if (input1.data.text == "") {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  } else {
    buttonGroup1.updateSingleButton({ disabled: false }, 1);
  }
});

var hundredClicked;
var tenClicked;
var oneClicked;
var storedGrabbed = [];

ggb1.instance.registerClientListener(copy);
ggb1.instance.registerObjectUpdateListener("time", bundle);
ggb1.instance.registerObjectClickListener("hundredPic_1", hundredFunction);
ggb1.instance.registerObjectClickListener("tenPic_1", tenFunction);
ggb1.instance.registerObjectClickListener("onePic_1", oneFunction);

function hundredFunction() {
  console.log("storedGrabbed in hundredFunction:", storedGrabbed);
  hundredClicked = true;
  copy(storedGrabbed);
}

function tenFunction() {
  console.log("storedGrabbed in tenFunction:", storedGrabbed);
  tenClicked = true;
  copy(storedGrabbed);
}

function oneFunction() {
  console.log("storedGrabbed in oneFunction:", storedGrabbed);
  oneClicked = true;
  copy(storedGrabbed);
}

//sets the initial values of global variables
var click = 0;
var hundredPics = 0;
var tenPics = 0;
var onePics = 0;

//gets the value of the hundreds, tens, and ones places based on user input
function getSet() {
  hundredPics = ggb1.instance.getValue("StartingHundreds");
  tenPics = ggb1.instance.getValue("StartingTens");
  onePics = ggb1.instance.getValue("StartingOnes");
  //starts stick creation
  createOnesSticks();
  createTensSticks();
  createHundredsSticks();
}

//stick creation
function createHundredsSticks() {
  //create hundreds bundles that are free to move by translating the pictures in the toolbox
  for (var i = 0; i < hundredPics; i++) {
    ggb1.instance.evalCommand(
      "HPic" + i + "=CopyFreeObject(Translate(hundredPic,Vector((SectionWidth+2,-3),(4Mod(" + i + ",5)+1,SectionHeight-2-4*floor(" + i + "/5)))))"
    );
    ggb1.instance.setVisible("HPic" + i, true);
  }
  ggb1.instance.setValue("time", 0);
}

function createTensSticks() {
  //create tens bundles that are free to move by translating the pictures in the toolbox
  for (var i = 0; i < tenPics; i++) {
    ggb1.instance.evalCommand(
      "TPic" + i + "=CopyFreeObject(Translate(tenPic,Vector((SectionWidth+9,-3),(SectionWidth+4Mod(" + i + ",5)+1,SectionHeight-2-4*floor(" + i + "/5)))))"
    );
    ggb1.instance.setVisible("TPic" + i, true);
  }
  ggb1.instance.setValue("time", 0);
}

function createOnesSticks() {
  //create ones bundles that are free to move by translating the pictures in the toolbox
  for (var i = 0; i < onePics; i++) {
    ggb1.instance.evalCommand(
      "OPic" + i + "=CopyFreeObject(Translate(onePic,Vector((2*SectionWidth-5,-3),(2*SectionWidth+4Mod(" + i + ",5)+1,SectionHeight-2-4*floor(" + i + "/5)))))"
    );
    ggb1.instance.setVisible("OPic" + i, true);
  }
  ggb1.instance.setValue("time", 0);
}

//make a new copy of whatever picture is dragged once it crosses the chart line
function copy(grabbed) {
  console.log("grabbed:", grabbed);
  //sets information about whatever is selected
  if (grabbed.type == "select") {
    objName = grabbed.target;
    console.log("objName:", objName);
    storedGrabbed = grabbed;
    console.log("storedGrabbed in copy function", storedGrabbed);
    type = ggb1.instance.getObjectType(objName);
    console.log("type:", type);
    click = click + 1;
    //creates a point on the corner that helps it determine when it crossed the line
    ggb1.instance.evalCommand("Corner" + click + "=Corner(" + objName + ",1)");
    ggb1.instance.setVisible("Corner" + click, false);
    var xStart = ggb1.instance.getXcoord("Corner" + click);
    console.log("xStart:", xStart);
    var yStart = ggb1.instance.getYcoord("Corner" + click);
    console.log("yStart:", yStart);
  }
  //everthing works the same up to this point when clicked or when tabbed to. Need to find a way to make the next if statement happen for spacebar too
  //when dragged
  if (grabbed.type == "dragEnd" || hundredClicked || tenClicked || oneClicked) {
    type = ggb1.instance.getObjectType(objName);
    //gets coordinates of the corner point
    var xEnd = ggb1.instance.getXcoord("Corner" + click);
    var yEnd = ggb1.instance.getYcoord("Corner" + click);
    console.log("yEnd");
    console.log(yEnd);
    //if the picture dragged is a hundreds bundle and over the line
    if (objName.includes("hundred") && (yEnd > -1 || hundredClicked)) {
      //create a new copy of the dragged image and put the old one back in the toolbox
      ggb1.instance.evalCommand("HPic" + hundredPics + "=CopyFreeObject(" + objName + ")");
      ggb1.instance.setCoords("A_1", 23, -6);
      ggb1.instance.setCoords("B_1", 26, -6);
      ggb1.instance.setCoords("C_1", 23, -3);
      hundredPics = hundredPics + 1;
      //reorganizes the chart
      createHundredsSticks();
    }
    //if the picture dragged is a tens bundle and over the line
    if (objName.includes("ten") && (yEnd > -1 || tenClicked)) {
      //create a new copy of the dragged image and put the old one back in the toolbox
      ggb1.instance.evalCommand("TPic" + tenPics + "=CopyFreeObject(" + objName + ")");
      ggb1.instance.setCoords("D_1", 31, -6);
      ggb1.instance.setCoords("E_1", 33, -6);
      ggb1.instance.setCoords("F_1", 31, -3);
      tenPics = tenPics + 1;
      //reorganize the chart
      createTensSticks();
      //if that last drag made a set of ten bundles, animate time to gather them up and exchange for a hundred bundle
      if (tenPics == 10) {
        hundredPics = hundredPics + 1;
        ggb1.instance.setValue("time", 0);
        ggb1.instance.setAnimating("time", true);
        ggb1.instance.startAnimation();
      }
    }
    //if the picture dragged is a ones stick and over the line
    if (objName.includes("one") && (yEnd > -1 || oneClicked)) {
      //create a new copy of the dragged image and put the old one back in the toolbox
      ggb1.instance.evalCommand("OPic" + onePics + "=CopyFreeObject(" + objName + ")");
      ggb1.instance.setCoords("G_1", 38, -3);
      ggb1.instance.setCoords("H_1", 38, -6);
      ggb1.instance.setCoords("I_1", 38.5, -6);
      onePics = onePics + 1;
      //reorganize the chart
      createOnesSticks();
      //if that last drag made a set of one sticks, animate time to gather them up and exchange for a tens bundle
      if (onePics == 10) {
        tenPics = tenPics + 1;
        if (tenPics == 10) {
          hundredPics = hundredPics + 1;
        }
        ggb1.instance.setValue("time", 0);
        ggb1.instance.setAnimating("time", true);
        ggb1.instance.startAnimation();
      }
    }
  }
  hundredClicked = false;
  tenClicked = false;
  oneClicked = false;
}

//called by time
function bundle() {
  for (var i = 0; i < 10; i++) {
    //for a set of ones sticks
    if (onePics == 10) {
      //hide the sticks
      ggb1.instance.setVisible("OPic" + i, false);
      //create new pictures that translate along vectors
      ggb1.instance.evalCommand("OTPic" + (tenPics + i) + "=Translate(OPic" + i + ",AnimT(time)*Element(OnesVectors," + (i + 1) + "))");
      //at the end of the time slider, switch the sticks for a bundle and delete the translating images
      if (ggb1.instance.getValue("time") > 0.9) {
        ggb1.instance.setVisible("bundledTenPic", true);
        ggb1.instance.setLayer("bundledTenPic", 3);
        ggb1.instance.deleteObject("OTPic" + (tenPics + i));
      }
      //at the very end of the slider
      if (ggb1.instance.getValue("time") > 0.98) {
        //get rid of the bundle so that the chart can be reorganized
        ggb1.instance.setVisible("bundledTenPic", false);
        //make the onePics value reflect the chart
        onePics = 0;
        ggb1.instance.deleteObject("OPic" + i);
        //organize
        createTensSticks();
        createOnesSticks();
        if (tenPics == 0) {
          createHundredSticks();
        }
      }
    }
    //for a set of tens bundles
    if (tenPics == 10 && onePics != 10) {
      //hide the bundles
      ggb1.instance.setVisible("TPic" + i, false);
      //create new pictures that translate along vectors
      ggb1.instance.evalCommand("THPic" + (hundredPics + i) + "=Translate(TPic" + i + ",AnimT(time)*Element(TensVectors," + (i + 1) + "))");
      //at the end of the time slider, switch the sticks for a bundle and delete the translating images
      if (ggb1.instance.getValue("time") > 0.9) {
        ggb1.instance.setVisible("bundledHundredPic", true);
        ggb1.instance.setLayer("bundledHundredPic", 3);
        ggb1.instance.deleteObject("THPic" + (hundredPics + i));
      }
      //at the very end of the slider
      if (ggb1.instance.getValue("time") > 0.98) {
        //get rid of the bundle so that the chart can be reorganized
        ggb1.instance.setVisible("bundledHundredPic", false);
        //make the tenPics value reflect the chart
        ggb1.instance.deleteObject("TPic" + i);
        tenPics = 0;
        //organize
        createHundredsSticks();
        createTensSticks();
      }
    }
  }
}

function reset() {
  let keeper = ["bundledHundredPic", "bundledTenPic", "hundredPic", "hundredPic_1", "onePic", "onePic_1", "tenPic", "tenPic_1"];
  input1.updateData({ text: "" });
  let trashCan = ggb1.instance.getAllObjectNames("image");
  for (let i = 0, L = trashCan.length; i < L; i++) {
    if (!keeper.includes(trashCan[i])) {
      ggb1.instance.deleteObject(trashCan[i]);
    }
  }
  //adding this in here so that starting values go back to 0 when reset.
  hundredPics = 0;
  tenPics = 0;
  onePics = 0;
}
boxBin();
function boxBin() {
  ggb1.instance.evalCommand("binHeight = 2");
  ggb1.instance.evalCommand("binWidth = 2");
  ggb1.instance.evalCommand("xFromPix = (x(Corner(3)) - x(Corner(1))) / x(Corner(5))");
  ggb1.instance.evalCommand("yFromPix = (y(Corner(3)) - y(Corner(1))) / y(Corner(5))");
  ggb1.instance.evalCommand("BLbin = Corner(1) + 5(xFromPix, yFromPix)");
  ggb1.instance.setVisible("BLbin", false);
  ggb1.instance.evalCommand("bin = Polygon({(SectionWidth, -2), (2SectionWidth, -2), (2SectionWidth, -7), (SectionWidth, -7)})");
  ggb1.instance.setLineStyle("bin", 2);
  ggb1.instance.setFilling("bin", 0.15);
  ggb1.instance.setColor("bin", 160, 160, 160);
  ggb1.instance.setFixed("bin", false, false);
  // if you need a full opacity bin, RGB 235, 235, 235 is virtually indistinguishable
  // if you go that route, don't forget to fiddle with the segments on the poly!
}
