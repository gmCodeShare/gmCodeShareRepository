const {
  ggb1,
  feedback1,
  text2,
  separator1,
  cc_sharewithclass_f578986c7e9c_textbox1,
  cc_sharewithclass_f578986c7e9c_input1,
  cc_sharewithclass_f578986c7e9c_button1,
  cc_sharewithclass_f578986c7e9c_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
let sidea = ggb1.instance.getValue("a");
let sideb = ggb1.instance.getValue("b");
let sidec = ggb1.instance.getValue("c");
text2.updateData({
  text: `$c^2=${sidea.toFixed(2)}^2+${sideb.toFixed(2)}^2\\newline c=\\sqrt{${(
    sidec * sidec
  ).toFixed(2)}}\\newline c\\approx ${sidec.toFixed(2)}$ `,
});

ggb1.instance.registerObjectUpdateListener("a", Update);
ggb1.instance.registerObjectUpdateListener("b", Update);

function Update() {
  let sidea = ggb1.instance.getValue("a");
  let sideb = ggb1.instance.getValue("b");
  let sidec = ggb1.instance.getValue("c");
  text2.updateData({
    text: `$c^2=${sidea.toFixed(2)}^2+${sideb.toFixed(
      2
    )}^2\\newline c=\\sqrt{${(sidec * sidec).toFixed(
      2
    )}}\\newline c\\approx ${sidec.toFixed(2)}$ `,
  });
}
