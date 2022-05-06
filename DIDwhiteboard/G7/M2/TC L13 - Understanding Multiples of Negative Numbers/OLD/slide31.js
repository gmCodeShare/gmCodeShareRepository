const {
  ggb1,
  text1,
  text2,
  text3,
  select1,
  select2,
  cc_submit_97841450bec0_textbox1: text4,
  cc_submit_97841450bec0_input1: input4,
  cc_submit_97841450bec0_button1: button4,
} = components;

ggb1.instance.setErrorDialogsActive(false);

let problem;
let multiplier;

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    problem = ggb1.innerData["multProblem"];
    multiplier = ggb1.innerData["multiplier"];
    // console.log(problem);
    text3.updateData({ visible: false });
    select2.updateData({ visible: false });
    text4.updateData({ visible: false });
    input4.updateData({ visible: false });
    button4.updateData({ visible: false, align: "right" });
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
    text1.updateData({ align: "center", text: `$${problem}$` });
    text3.updateData({
      text: `Is the result greater or less than $${multiplier}$?`,
    });
  }
}

autorun(() => {
  if (select1.data.selected) {
    text3.updateData({ visible: true });
    select2.updateData({ visible: true });
  }
});

autorun(() => {
  if (select2.data.selected) {
    text4.updateData({ visible: true });
    input4.updateData({ visible: true });
    button4.updateData({ visible: true, align: "right" });
  }
});
