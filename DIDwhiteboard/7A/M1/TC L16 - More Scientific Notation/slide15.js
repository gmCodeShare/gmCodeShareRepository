const { text1, text2, select1, buttonGroup1, cc_sharewithclass_476b70c6644c_textbox1: shareText1, cc_sharewithclass_476b70c6644c_input1: shareInput1, cc_sharewithclass_476b70c6644c_button1: shareButton1, cc_sharewithclass_476b70c6644c_studentanswers1: shareAnswers1 } = components;

let itemName = ['a typical heart', 'a carbon dioxide molecule', 'the moon', 'the sun'];

let itemName2 = ['A typical heart', 'A carbon dioxide molecule', 'The moon', 'The sun'];

let itemVolume = ['$0.00028$', '$1.95×10^{-29}$', '$2.1968\\times10^{10}$', '$1.409\\times10^{18}$'];

let itemUnit = ['meters', 'meters', 'kilometers', 'kilometers'];

onInit();
function onInit() {
  if (!text1.data.init) {
    // set initial states
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    buttonGroup1.updateSingleButton(
      {
        disabled: 'true',
      },
      1
    );
    buttonGroup1.updateSingleButton(
      {
        disabled: 'true',
        outline: 'true',
      },
      2
    );
    // create/update a dummy variable to keep track of whether the slide has initialized
    text1.updateData({ init: true });
  }
}

select1.on('change', (selected) => {
  shareText1.updateData({
    text: `Consider a life breath balloon with a volume of $344,608,992$ cubic meters, or approximately $3.45\\times10^{8}$ cubic meters.\n\nYou selected ${itemName[parseInt(selected.selected[0])]}, which has a volume of ${itemVolume[parseInt(selected.selected[0])]} cubic ${itemUnit[parseInt(selected.selected[0])]}.\n\n${selected.selected[0] == 0 || selected.selected[0] == 1 ? 'The life breath balloon' : itemName2[parseInt(selected.selected[0])]} is how many times as large as ${selected.selected[0] == 0 || selected.selected[0] == 1 ? itemName[parseInt(selected.selected[0])] : 'the life breath balloon'}?
  `,
  });
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    2
  );
});

buttonGroup1.on('click:1', () => {
  select1.setDisabled(true);
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    2
  );
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

buttonGroup1.on('click:2', () => {
  select1.setDisabled(false);
  buttonGroup1.updateSingleButton(
    {
      disabled: false,
    },
    1
  );
  buttonGroup1.updateSingleButton(
    {
      disabled: true,
    },
    2
  );
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});
