const { text1, text2, select1, button1 } = components;

text1.updateData({ align: "center" });
button1.updateData({ align: "right" });

slide.on("firstload", () => {
  button1.updateData({ disabled: true });
});

autorun(() => {
  let choiceNum = select1.data.selected;

  if (!choiceNum) {
    text2.updateData({ text: "" });
  }
  if (choiceNum === "0") {
    text2.updateData({
      text: "This data set shows the ages of a variety of craters and the diameter of each crater’s impact area.\n\nWhat is the approximate diameter in meters of a crater that is $8$ thousand years old?",
    });
  }
  if (choiceNum === "1") {
    text2.updateData({
      text: "This data set shows the number of miles that used cars with a specific model year and name have been driven, and the prices of the cars.\n\nWhat is the approximate price of a used car in dollars that has been driven $25,000$ miles?",
    });
  }
  if (choiceNum === "2") {
    text2.updateData({
      text: "This data set shows the average outside temperatures when a sample of babies crawl for the first time.\n\nAt approximately what age in weeks will a baby crawl for the first time if the average outside temperature is $42\\degree F$?",
    });
  }
  if (choiceNum === "3") {
    text2.updateData({
      text: "This data set shows the salaries and batting averages of a sample of Major League Baseball players in 2018.\n\nWhat was the approximate batting average of a Major League Baseball player whose salary was $\\$31$ million in 2018?",
    });
  }
  if (choiceNum === "4") {
    text2.updateData({
      text: "This data set shows the prices and areas of living space of a sample of houses for sale in New York in 2010.\n\nWhat was the approximate price in dollars of a house in New York in 2010 that has $1350$ square feet of living space?",
    });
  }
});

autorun(() => {
  let entries = [select1.data.selected];
  if (!arrayEquals(entries, select1.data.last)) {
    button1.updateData({
      text: "Submit",
      disabled: !entries.some((value) => !!value),
    });
    select1.updateData({ last: [...entries] });
  }
});

button1.on("click", () => {
  button1.updateData({ text: "Submitted", disabled: true });
});

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}
