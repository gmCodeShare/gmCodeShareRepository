const {
  ggb1,
  separator1,
  text1,
  feedback1,
  cc_sharewithclass_06dc21f0ea57_textbox1,
  cc_sharewithclass_06dc21f0ea57_input1,
  cc_sharewithclass_06dc21f0ea57_button1,
  cc_sharewithclass_06dc21f0ea57_studentanswers1,
} = components;

//dcbmxquf

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.registerUpdateListener(moveIt);
ggb1.instance.registerClientListener(clients);

saveData({ selected: '' });

function moveIt(a) {
  if (getData('selected') == a) {
    if (ggb1.instance.getObjectType(a) == 'point' && a != 'O') {
      let prefix = a.slice(0, 2);
      let size = a.slice(2, 5);
      dilateIt(prefix, size);
    } else if (a == 'O' || a == 'littleTri') {
      dilateIt('P1', 'lil');
      dilateIt('P2', 'lil');
      dilateIt('P3', 'lil');
    } else if (a == 'largeTri') {
      dilateIt('P1', 'big');
      dilateIt('P2', 'big');
      dilateIt('P3', 'big');
    }
  } // selected == a
}

function dilateIt(prefix, size) {
  let buddySize;
  if (size == 'lil') {
    buddySize = 'big';
  } else {
    buddySize = 'lil';
  }
  ggb1.instance.setCoords(
    prefix + buddySize,
    ggb1.instance.getXcoord(prefix + size + "'"),
    ggb1.instance.getYcoord(prefix + size + "'")
  );
}

function clients(a) {
  switch (a[0]) {
    case 'select':
      saveData({ selected: a[1] });
      //console.log("selecting " + selected);
      break;
    case 'deselect':
      //console.log("deselecting " + selected);
      saveData({ selected: '' });
  } // end switch
}

function saveData(dataObj = {}, target = '') {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== 'string' || typeof dataObj !== 'object') {
    console.error(
      'saveData error: Parameters should be an object and a string!'
    );
  }
  let tarComp = !!target ? target : firstComp;
  if (!components[tarComp]?.storage) {
    components[tarComp].storage = {};
  }
  components[tarComp].storage = { ...components[tarComp].storage, ...dataObj };
}

function getData(dataName, target = '') {
  const allComps = Object.keys(components).sort();
  const firstComp = allComps[0];
  if (!firstComp) {
    return;
  } // make sure at least 1 comp exists
  if (typeof target !== 'string' || typeof dataName !== 'string') {
    console.error('getData error: Parameters should both be strings!');
  }
  let tarComp = !!target ? target : firstComp;
  return components[tarComp]?.storage?.[dataName];
}

/*
{"compTotals":{"geogebra":1,"separator":1,"textbox":2,"sharewithclass":1},"stage":"Learn","lessonInfo":"8 M3 TA L01 - Exploring Dilations","teacherView":false,"layout":"two col"}
*/
