const {
  ggb1,
  feedback1,
  SDzoo,
  hWood,
  stearns,
  yosemite,
  gTeton,
  mRush,
  desBG,
  arbor,
  separator1,
  text1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let sources = [SDzoo, hWood, stearns, yosemite, gTeton, mRush, desBG, arbor];

function hideSources() {
  for (let i = 0, L = sources.length; i < L; i++) {
    sources[i].updateData({ visible: false });
  }
}

hideSources();

text1.updateData({ align: "center" });

autorun(() => {
  let dist = 0,
    city = "",
    sight = "";
  switch (ggb1.innerData["chosenText"]) {
    case "Dallas":
      // image1.updateData({ visible: true, src: arbor.data.src });
      hideSources();
      arbor.updateData({ visible: true });
      text1.updateData({ visible: true });
      dist = 1183;
      city = "Dallas, TX";
      sight = "Arboretum";
      break;
    case "Fresno":
      hideSources();
      yosemite.updateData({ visible: true });
      text1.updateData({ visible: true });
      dist = 229;
      city = "Fresno, CA";
      sight = "Yosemite";
      break;
    case "Jackson":
      hideSources();
      gTeton.updateData({ visible: true });
      text1.updateData({ visible: true });
      dist = 736;
      city = "Jackson, WY";
      sight = "Grand Teton";
      break;
    case "LosAngeles":
      hideSources();
      hWood.updateData({ visible: true });
      text1.updateData({ visible: true });
      dist = 55;
      city = "Los Angeles, CA";
      sight = "Hollywood Sign";
      break;
    case "Phoenix":
      hideSources();
      desBG.updateData({ visible: true });
      text1.updateData({ visible: true });
      dist = 303;
      city = "Phoenix, AZ";
      sight = "Desert Botanical Garden";
      break;
    case "RapidCity":
      hideSources();
      mRush.updateData({ visible: true });
      text1.updateData({ visible: true });
      dist = 1019;
      city = "Rapid City, SD";
      sight = "Mount Rushmore";
      break;
    case "SanDiego":
      hideSources();
      SDzoo.updateData({ visible: true });
      text1.updateData({ visible: true });
      dist = 97;
      city = "San Diego, CA";
      sight = "San Diego Zoo";
      break;
    case "SantaBarbara":
      hideSources();
      stearns.updateData({ visible: true });
      text1.updateData({ visible: true });
      dist = 139;
      city = "Santa Barbara, CA";
      sight = "Stearns Wharf";
      break;
    default:
      text1.updateData({ visible: false });
      return;
  }
  text1.updateData({
    text: `#### ${sight}, ${city}
    
  #### From San Bernardino, CA  
  #### Distance: $${dist}$ $\\text{mi}$`,
    dist,
  });
  if (text1.data.text != text1.data.last) {
    text1.updateData({ last: text1.data.text });
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":2,"uploaded-image":8,"separator":1},"stage":"Learn","lessonInfo":"8 M4 TB L11 - PA Planning a Trip","teacherView":true,"layout":"two col"}
*/
