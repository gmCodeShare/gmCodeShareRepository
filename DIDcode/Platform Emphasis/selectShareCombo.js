// include student's selected response in their share so that their share makes sense to other students
// for the new select component (set to SINGLE select), released 2/3/21:
const {
  select1,
  cc_sharewithclass_numbersNumbers_textbox1: shareText1,
  cc_sharewithclass_numbersNumbers_input1: shareInput1,
  cc_sharewithclass_numbersNumbers_button1: shareButton1,
} = components;

slide.on("firstload", () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

select1.on("change", () => {
  if (select1.data.selected.length) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    let chosen = select1.data.options[parseInt(select1.data.selected[0])].label;
    let sentStart = chosen.replace(".", ","); // in the example, choices were sentences
    shareInput1.updateData({ text: sentStart + " because " });
  }
});



// for the old select component:
const {
  select1,
  cc_sharewithclass_numbersNumbers_textbox1: shareText1,
  cc_sharewithclass_numbersNumbers_input1: shareInput1,
  cc_sharewithclass_numbersNumbers_button1: shareButton1,
} = components;

slide.on("firstload", () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

autorun(() => {
  if (select1.data.selected) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    if (select1.data.selected != select1.data.last) {
      let chosen = select1.data.options[parseInt(select1.data.selected)].label;
      let sentStart = chosen.replace(".", ","); // in the example, choices were sentences
      shareInput1.updateData({ text: sentStart + " because " });
      select1.updateData({ last: select1.data.selected });
    }
  }
});
