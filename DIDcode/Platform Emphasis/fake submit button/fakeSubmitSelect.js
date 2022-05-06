// keep a fake submit button updated after a select component
// note: this is for the new select component, released 2/3/21
const { select1, button1 } = components;

slide.on("firstload", () => {
  button1.updateData({
    align: "right",
    disabled: "true",
  });
});

select1.on("change", ({ selected }) => {
  button1.updateData({
    text: "Submit",
    disabled: !selected.length,
  });
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
});
