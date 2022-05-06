const { table1, select1, buttonGroup1 } = components;

slide.on("firstload", () => {
  table1.setVisible(false);
  updateButtons();
});

buttonGroup1.on("click:1", () => {
  table1.setVisible(true);
  updateButtons();
});

buttonGroup1.on("click:2", () => {
  table1.setVisible(false);
  updateButtons();
});

function updateButtons() {
  const tableVis = table1.data.visible;
  buttonGroup1.updateSingleButton({ disabled: !!tableVis }, 1);
  buttonGroup1.updateSingleButton({ disabled: !tableVis }, 2);
}
