const {
  text1,
  text2,
  select1,
  buttonGroup1,
  cc_sharewithclass_476b70c6644c_textbox1: shareText1,
  cc_sharewithclass_476b70c6644c_input1: shareInput1,
  cc_sharewithclass_476b70c6644c_button1: shareButton1,
  cc_sharewithclass_476b70c6644c_studentanswers1: shareAnswers1,
} = components;

let itemName = [
  'the Great Pyramid of Giza',
  'the Colosseum in Rome',
  'the Empire State Building in New York',
  'Lake Pontchartrain in Louisiana',
];

let itemVolume = [
  '$2,600,000$',
  '$1.32\\times10^{6}$',
  '$1.04\\times10^{6}$',
  '$6\\times10^{9}$',
];

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
    text: `Consider a life breath balloon with a volume of $344,608,992$ cubic meters, or approximately $3.45\\times10^{8}$ cubic meters.\n\nYou selected ${
      itemName[parseInt(selected.selected[0])]
    }, which has a volume of ${
      itemVolume[parseInt(selected.selected[0])]
    } cubic meters.\n\nThe life breath balloon is how much larger than ${
      itemName[parseInt(selected.selected[0])]
    }?
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
