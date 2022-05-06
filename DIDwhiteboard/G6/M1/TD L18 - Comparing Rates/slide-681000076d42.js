const {
  table1,
  feedback1,
  text1,
  select1,
  cc_sharewithclass_4036897b8504_textbox1: shareText1,
  cc_sharewithclass_4036897b8504_input1: shareInput1,
  cc_sharewithclass_4036897b8504_button1: shareButton1,
  cc_sharewithclass_4036897b8504_studentanswers1,
} = components;

let id1 = 'slide-295482c1ba3e';

function getSlideNum(slideId) {
  if (
    typeof controls == 'undefined' ||
    !controls.slidesNavigationData?.length
  ) {
    return 'missing slide!';
  }
  let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
  return allIds.indexOf(slideId) + 1;
}

onInit();
function onInit() {
  if (!table1.data.init) {
    // set initial states
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    // create/update a dummy variable to keep track of whether the screen has initialized
    table1.updateData({ init: true });
  }
}

autorun(() => {
  var optionArray = ['Song 1 because ', 'Song 2 because '];
  if (select1.data.selected) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    if (select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      let sentStart = chosen.replace('.', ','); // in this example, the choices ended with periods
      shareInput1.updateData({ text: optionArray[select1.data.selected] });
      select1.updateData({ last: select1.data.selected });
    }
  }
});

let oldTable1 = getFromSlide(id1, 'table1', false) || false;
let oldTable2 = getFromSlide(id1, 'table2', false) || false;

let oldCell1 = !oldTable1.data?.rows[1][0]?.value
  ? `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(id1)}\]}$`
  : oldTable1.data.rows[1][0].value;

let oldCell2 = !oldTable2.data?.rows[1][0]?.value
  ? `$\\text\\color{707070}{\[no input yet on slide ${getSlideNum(id1)}\]}$`
  : oldTable2.data.rows[1][0].value;

table1.updateCell(0, 1, { value: oldCell1 });

table1.updateCell(1, 1, { value: oldCell2 });

/*
{"compTotals":{"table":1,"textbox":2,"radiogroup":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TD L18 - Comparing Rates","teacherView":false,"layout":"two col"}
*/
