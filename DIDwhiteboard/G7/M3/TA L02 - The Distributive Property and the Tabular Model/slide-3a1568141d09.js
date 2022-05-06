const {
  ggb1,
  feedback,
  text1,
  cc_submit_534c41130bec_textbox1,
  cc_submit_534c41130bec_input1,
  cc_submit_534c41130bec_button1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

cc_submit_534c41130bec_button1.updateData({ align: 'right' });

const id2 = `slide-e294b19da756`;

let defPrevGGB1 = {
  innerData: {
    WL5: [4.8, 0.95],
    WL4: [4.8, 0.95],
    WL3: [4.8, 0.95],
    WL2: [4.8, 0.95],
    WL1: [4.8, 0.95],
    CL5: [10.8, 0.95],
    CL4: [10.8, 0.95],
    CL3: [10.8, 0.95],
    CL2: [10.8, 0.95],
    CL1: [10.8, 0.95],
    TL5: [15.8, 0.95],
    TL4: [15.8, 0.95],
    TL3: [15.8, 0.95],
    TL2: [15.8, 0.95],
    TL1: [15.8, 0.95],
  },
};

let data2 = getFromSlide(id2, 'ggb1', false) || false; // don't forget to change slide id

let id1HasData2 = !data2
  ? false
  : !Object.keys(data2).includes('innerData')
  ? false
  : !Object.keys(data2.innerData).length
  ? false
  : true;

if (!id1HasData2) {
  data2 = defPrevGGB1;
}

// let data2 = getFromSlide(`slide-e294b19da756`, "ggb1");

function setCoordinates() {
  ggb1.instance.setCoords(
    'WL5',
    data2.innerData['WL5'][0],
    data2.innerData['WL5'][1]
  );
  ggb1.instance.setCoords(
    'WL4',
    data2.innerData['WL4'][0],
    data2.innerData['WL4'][1]
  );
  ggb1.instance.setCoords(
    'WL3',
    data2.innerData['WL3'][0],
    data2.innerData['WL3'][1]
  );
  ggb1.instance.setCoords(
    'WL2',
    data2.innerData['WL2'][0],
    data2.innerData['WL2'][1]
  );
  ggb1.instance.setCoords(
    'WL1',
    data2.innerData['WL1'][0],
    data2.innerData['WL1'][1]
  );
  ggb1.instance.setCoords(
    'CL5',
    data2.innerData['CL5'][0],
    data2.innerData['CL5'][1]
  );
  ggb1.instance.setCoords(
    'CL4',
    data2.innerData['CL4'][0],
    data2.innerData['CL4'][1]
  );
  ggb1.instance.setCoords(
    'CL3',
    data2.innerData['CL3'][0],
    data2.innerData['CL3'][1]
  );
  ggb1.instance.setCoords(
    'CL2',
    data2.innerData['CL2'][0],
    data2.innerData['CL2'][1]
  );
  ggb1.instance.setCoords(
    'CL1',
    data2.innerData['CL1'][0],
    data2.innerData['CL1'][1]
  );
  ggb1.instance.setCoords(
    'TL5',
    data2.innerData['TL5'][0],
    data2.innerData['TL5'][1]
  );
  ggb1.instance.setCoords(
    'TL4',
    data2.innerData['TL4'][0],
    data2.innerData['TL4'][1]
  );
  ggb1.instance.setCoords(
    'TL3',
    data2.innerData['TL3'][0],
    data2.innerData['TL3'][1]
  );
  ggb1.instance.setCoords(
    'TL2',
    data2.innerData['TL2'][0],
    data2.innerData['TL2'][1]
  );
  ggb1.instance.setCoords(
    'TL1',
    data2.innerData['TL1'][0],
    data2.innerData['TL1'][1]
  );
}
if (data2.innerData) {
  setCoordinates();
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"submit":1},"stage":"Learn","lessonInfo":"7 M3 TA L02 - The Distributive Property and the Tabular Model","teacherView":false,"layout":"two col"}
*/
