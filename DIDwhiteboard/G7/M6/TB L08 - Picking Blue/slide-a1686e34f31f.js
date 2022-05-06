const {
  ggb1,
  feedback1,
  cc_sharewithclass_266dde9717be_textbox1,
  cc_sharewithclass_266dde9717be_input1,
  cc_sharewithclass_266dde9717be_button1,
  cc_sharewithclass_266dde9717be_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
components.cc_sharewithclass_266dde9717be_button1.updateData({
  align: 'right',
});

// let defGGB = { innerData: false };

const id1 = `slide-c6fdb0296a2d`;

let defPrevGGB1 = {
  innerData: {
    prob1: 0,
    prob2: 0,
    prob3: 0,
    prob4: 0,
    prob5: 0,
    prob6: 0,
    prob7: 0,
    prob8: 0,
    prob9: 0,
    prob10: 0,
    count: 1,
  },
};

let data = getFromSlide(id1, 'ggb1', false) || false; // don't forget to change slide id

let id1HasData = !data
  ? false
  : !Object.keys(data).includes('innerData')
  ? false
  : !Object.keys(data.innerData).length
  ? false
  : true;

if (!id1HasData) {
  data = defPrevGGB1;
}

// let data = getFromSlide(`slide-c6fdb0296a2d`, "ggb1", defGGB) || defGGB;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue('yP1', 0);
    ggb1.instance.setValue('yP2', 0);
    ggb1.instance.setValue('yP3', 0);
    ggb1.instance.setValue('yP4', 0);
    ggb1.instance.setValue('yP5', 0);
    ggb1.instance.setValue('yP6', 0);
    ggb1.instance.setValue('yP7', 0);
    ggb1.instance.setValue('yP8', 0);
    ggb1.instance.setValue('yP9', 0);
    ggb1.instance.setValue('yP10', 0);
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

if (data.innerData) {
  ggb1.instance.setValue('yP1', data.innerData['prob1']);
  ggb1.instance.setValue('yP2', data.innerData['prob2']);
  ggb1.instance.setValue('yP3', data.innerData['prob3']);
  ggb1.instance.setValue('yP4', data.innerData['prob4']);
  ggb1.instance.setValue('yP5', data.innerData['prob5']);
  ggb1.instance.setValue('yP6', data.innerData['prob6']);
  ggb1.instance.setValue('yP7', data.innerData['prob7']);
  ggb1.instance.setValue('yP8', data.innerData['prob8']);
  ggb1.instance.setValue('yP9', data.innerData['prob9']);
  ggb1.instance.setValue('yP10', data.innerData['prob10']);
  ggb1.instance.setValue('count', data.innerData['count'] - 1);
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M6 TB L08 - Picking Blue","teacherView":false,"layout":"two col"}
*/
