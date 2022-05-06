function ggbOnInit() {
  ggbApplet.registerObjectUpdateListener("OnesBand", "bundleOne");
  ggbApplet.registerObjectUpdateListener("TensBand", "bundleTen");
  ggbApplet.registerObjectUpdateListener("HundredsBand", "bundleHundred");
}

//global variables
var bundledOnes = [];
var bundledTens = [];
var bundledHundreds = [];

function bundleOne() {
  for (var i = 1; i < 11; i++) {
    if (ggbApplet.getValue("IsInRegion(MasterOne" + i + ",OnesBand)") == true) {
      bundledOnes.push("MasterOne" + i);
    }
  }
  if (bundledOnes.length == 10) {
    for (var i = 1; i < 11; i++) {
      ggbApplet.setCoords("MasterOne" + i, "OneBundleX", "OneBundleY");
    }
  }
}

function bundleTen() {
  for (var i = 1; i < 11; i++) {
    if (ggbApplet.getValue("IsInRegion(MasterTen" + i + ",TensBand)") == true) {
      bundledTens.push("MasterTen" + i);
    }
  }
  if (bundledTens.length == 10) {
    for (var i = 1; i < 11; i++) {
      ggbApplet.setCoords("MasterTen" + i, "TenBundleX", "TenBundleY");
    }
  }
}

function bundleHundred() {
  for (var i = 1; i < 11; i++) {
    if (ggbApplet.getValue("IsInRegion(MasterHundred" + i + ",hundredsBand)") == true) {
      bundledHundreds.push("MasterHundred" + i);
    }
  }
  if (bundledHundreds.length == 10) {
    for (var i = 1; i < 11; i++) {
      ggbApplet.setCoords("MasterHundred" + i, "HundredBundleX", "HundredBundleY");
    }
  }
}
