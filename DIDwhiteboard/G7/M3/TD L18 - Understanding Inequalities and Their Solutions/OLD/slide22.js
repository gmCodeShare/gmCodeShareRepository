const {
  ggb1,
  cc_sharewithclass_25ee8a919e0c_input1: input1,
  cc_sharewithclass_25ee8a919e0c_button1: button1,
  cc_sharewithclass_25ee8a919e0c_textbox1: text1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

button1.on("click", () => {
  ggb1.instance.setValue("timeRight", 0);
  ggb1.instance.setValue("timeLeft", 0);
  // console.log(input1.data.text);
  const regex = /^([a-z]|[A-Z])(>|<|\\ge|\\le)-?\d/;
  let goodEnough = regex.test(input1.data.text);
  // console.log(goodEnough);
  let number = input1.data.text.match(/[-+]?\d/);
  // console.log("Number: " + number);
  let symbol = input1.data.text.match(/\\\D\D/);
  // console.log("Symbol: " + symbol);
  if (goodEnough) {
    if (symbol == "\\le" || symbol == "\\ge") {
      ggb1.instance.setValue("equalTo", true);
      ggb1.instance.setCoords("StudentPointOpen", number, 0);
      ggb1.instance.setCoords("StudentPointClosed", number, 0);
      // console.log(
      //   ggb1.instance.getVisible("StudentPointOpen") +
      //     "     " +
      //     ggb1.instance.getVisible("StudentPointOpen")
      // );
    }

    if (input1.data.text.includes("<") || input1.data.text.includes(">")) {
      ggb1.instance.setValue("equalTo", false);
      ggb1.instance.setCoords("StudentPointOpen", number, 0);
      ggb1.instance.setCoords("StudentPointClosed", number, 0);
      // console.log(
      //   ggb1.instance.getVisible("StudentPointOpen") +
      //     "     " +
      //     ggb1.instance.getVisible("StudentPointOpen")
      // );
    }

    if (symbol == "\\le" || input1.data.text.includes("<")) {
      ggb1.instance.setVisible("v", true);
      ggb1.instance.setVisible("u", false);
      ggb1.instance.setAnimating("timeLeft", true);
      ggb1.instance.setAnimating("timeRight", false);
      ggb1.instance.startAnimation();
      // console.log("leftStart");
    }

    if (symbol == "\\ge" || input1.data.text.includes(">")) {
      ggb1.instance.setVisible("v", false);
      ggb1.instance.setVisible("u", true);
      ggb1.instance.setAnimating("timeRight", true);
      ggb1.instance.setAnimating("timeLeft", false);
      ggb1.instance.startAnimation();
      // console.log("rightStart");
    }
  }
});
