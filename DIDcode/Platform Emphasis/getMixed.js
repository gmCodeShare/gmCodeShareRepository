// get the text from a mixed input source as a single string

function getMixed(mixedText) {
  return mixedText[0]?.children
    .map((child) => {
      if (child.text) {
        return child.text;
      } else if (child.latex) {
        return `$${child.latex}$`;
      } else {
        return "";
      }
    })
    .filter((val) => !!val)
    .join("");
}

// examples of use:
const text = getMixed(input1.data.mixedText);

const val = getMixed(table1.getCell(1, 1).mixedText);
