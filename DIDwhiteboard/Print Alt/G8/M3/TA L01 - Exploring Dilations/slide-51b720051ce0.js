const { ggb1, feedback, textDisplay6, separator1, text1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.setVisible("button1", false);
autorun(() => {
  let chosen = ggb1.innerData["chosen"];
  //ggb1.instance.setValue("scale", ggb2.instance.getValue("scale"));
  let scaleText = "" + ggb1.instance.getValueString("scaleText");
  let fixedText = scaleText.replace("\\", "\\\\");
  if (chosen == 1) {
    fixedText = `\\frac{ 1 }{ 3 }`;
  } else if (chosen == 2) {
    fixedText = `\\frac{ 1 }{ 2 }`;
  }
  text1.updateData({
    text: `#### Center of Dilation: Point $O$ \n\n #### Scale Factor: $\\color{823F98}${fixedText}$`,
  });
});

/*ggb1.instance.registerUpdateListener(moveIt);
ggb1.instance.registerClientListener(clients);
ggb1.instance.registerObjectUpdateListener("scale", scaleIt);

// if (!getData("selected")) {
saveData({ selected: "" });
// }

function moveIt(a) {
  if (getData("selected") == a) {
    if (ggb1.instance.getObjectType(a) == "point" && a != "O") {
      let prefix = a.slice(0, 2);
      let size = a.slice(2, 5);
      dilateIt(prefix, size);
    } else if (a == "O" || a == "littleTri") {
      dilateIt("P1", "lil");
      dilateIt("P2", "lil");
      dilateIt("P3", "lil");
    } else if (a == "largeTri") {
      dilateIt("P1", "big");
      dilateIt("P2", "big");
      dilateIt("P3", "big");
    }
  } // selected == a
}

function dilateIt(prefix, size) {
  let buddySize;
  if (size == "lil") {
    buddySize = "big";
  } else {
    buddySize = "lil";
  }
  ggb1.instance.setCoords(
    prefix + buddySize,
    ggb1.instance.getXcoord(prefix + size + "'"),
    ggb1.instance.getYcoord(prefix + size + "'")
  );
}

function scaleIt() {
  setTimeout(function () {
    dilateIt("P1", "lil");
    dilateIt("P2", "lil");
    dilateIt("P3", "lil");
  }, 10);
}

function clients(a) {
  switch (a[0]) {
    case "select":
      // selected = a[1];
      saveData({ selected: a[1] });
      //console.log("selecting " + selected);
      break;
    case "deselect":
      //console.log("deselecting " + selected);
      // selected = "";
      saveData({ selected: "" });
  } // end switch
}

function saveData(dataObj = {}, target = "") {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== "string" || typeof dataObj !== "object") {
    console.error(
      "saveData error: Parameters should be an object and a string!"
    );
  }
  let tarComp = !!target ? target : firstComp;
  if (!components[tarComp]?.storage) {
    components[tarComp].storage = {};
  }
  components[tarComp].storage = { ...components[tarComp].storage, ...dataObj };
}

function getData(dataName, target = "") {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== "string" || typeof dataName !== "string") {
    console.error("getData error: Parameters should both be strings!");
  }
  let tarComp = !!target ? target : firstComp;
  return components[tarComp]?.storage?.[dataName];
}
*/

/*
{"compTotals":{"geogebra":1,"textbox":3,"separator":1},"stage":"Learn","lessonInfo":"8 M3 TA L01 - Print Alt: Exploring Dilations","teacherView":true,"layout":"two col"}
*/
