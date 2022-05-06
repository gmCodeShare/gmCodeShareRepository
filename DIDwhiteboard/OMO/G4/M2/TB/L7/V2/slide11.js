const { table1 } = components;

utils.RTS.on("datachange", "slide-3d79ba9a5cf4", (register) => {
  // Don't do anything if we don't have data
  if (!register || !register.length) {
    return;
  }
  // components.image1.updateData({ visible: false });
  const myAttempts = register.filter(({ info }) => info.isSelf);
  const sortedBySlides = myAttempts
    .map(({ data: { prompt, slide, attempt } }) => ({
      prompt,
      slide: slide + 1,
      attempt: { ...attempt },
    }))
    .sort((a, b) => a.slide - b.slide);
  processAttempts(sortedBySlides);
});

function processAttempts(attempts) {
  let slide2Responses = [];
  let slide3Responses = [];
  let slide4AResponses = [];
  let slide4BResponses = [];
  let slide5Responses = [];
  let slide7Responses = [];
  let slide8AResponses = [];
  let slide8BResponses = [];
  let slide8CResponses = [];
  let slide8DResponses = [];
  let slide8EResponses = [];
  let slide9Responses = [];

  attempts.forEach((element) => {
    const { prompt, slide, attempt } = element;
    switch (slide) {
      case 2:
        {
          // prompt 1 attempt: { selected: [], somethingElse: "" }
          const attemptNum = slide2Responses.length + 1;
          const { selected, somethingElse } = attempt;
          // selected.push("Farflefarfle farfle", "Who dat dat do dat");
          let status = `$${attemptNum}$. Selected the following:`;
          selected.forEach((sel) => {
            let newBullet = `\n\n * ${sel}`;
            if (sel.includes("something")) {
              newBullet = newBullet.replace(".", ": ");
              newBullet += `${somethingElse}`;
            }
            status += newBullet;
          });
          slide2Responses.push(status);
        }
        break;
      case 3:
        {
          // prompt 1 attempt: { noticing: "" }
          const attemptNum = slide3Responses.length + 1;
          let status = `$${attemptNum}$. ${attempt.noticing}`;
          slide3Responses.push(status);
        }
        break;
      case 4:
        {
          switch (prompt) {
            case 1:
              {
                // prompt 1 attempt: { length: 0, width: 0 }
                const attemptNum = slide4AResponses.length + 1;
                let status = `$${attemptNum}$. Length: $${attempt.length}$ units, Width: $${attempt.width}$ units`;
                slide4AResponses.push(status);
              }
              break;
            case 2:
              {
                // prompt 2 attempt: { left: 0, right: 0 }
                const attemptNum = slide4BResponses.length + 1;
                let status = `$${attemptNum}$. Decomposed into $${attempt.left}$ units and $${attempt.right}$ units`;
                slide4BResponses.push(status);
              }
              break;
          }
        }
        break;
      case 5:
        {
          // prompt 1 attempt: { assigned: { category_0: [], category_1: [] } }
          const options = [
            "$3\\times2$ array",
            "expression $3\\times10$",
            "$6$ ones in a place value chart",
            "$3\\times10$ array",
            "$3\\times10$ area model",
            "$3$ tens in a place value chart",
            "expression $3\\times2$",
            "$3\\times2$ area model",
          ];
          const {
            assigned: { category_0, category_1 },
          } = attempt;
          const thirty = category_0.map((sel) => options[sel]).join(", ");
          const six = category_1.map((sel) => options[sel]).join(", ");
          const attemptNum = slide5Responses.length + 1;
          let status = `$${attemptNum}$. Sorted by partial products as follows: \n\n * $30$: ${thirty} \n\n * $6$: ${six}`;
          slide5Responses.push(status);
        }
        break;
      case 7:
        {
          // prompt 1 attempt: { noticing: "" }
          const attemptNum = slide7Responses.length + 1;
          let status = `$${attemptNum}$. ${attempt.noticing}`;
          slide7Responses.push(status);
        }
        break;
      case 8:
        {
          switch (prompt) {
            case 1:
              {
                // prompt 1 attempt: { length: 0, width: 0 }
                const attemptNum = slide8AResponses.length + 1;
                let status = `$${attemptNum}$. Length: $${attempt.length}$ units, Width: $${attempt.width}$ units`;
                slide8AResponses.push(status);
              }
              break;
            case 2:
              {
                // prompt 2 attempt: { left: 0, right: 0 }
                const attemptNum = slide8BResponses.length + 1;
                let status = `$${attemptNum}$. Decomposed into $${attempt.left}$ units and $${attempt.right}$ units`;
                slide8BResponses.push(status);
              }
              break;
            case 3:
              {
                // prompt 3 attempt: { input1: 20, input2: 3, input3: 4, input4: 4 }
                // (input3 x input1) + (input4 x input2)
                const attemptNum = slide8CResponses.length + 1;
                let status = `$${attemptNum}$. $(${attempt.input3}\\times${attempt.input1})+(${attempt.input4}\\times${attempt.input2})$`;
                slide8CResponses.push(status);
              }
              break;
            case 4:
              {
                // prompt 4 attempt: { input5: 80, input6: 12 }
                const attemptNum = slide8DResponses.length + 1;
                let status = `$${attemptNum}$. $${attempt.input5}+${attempt.input6}$`;
                slide8DResponses.push(status);
              }
              break;
            case 5:
              {
                // prompt 5 attempt: { sum: 92 }
                const attemptNum = slide8EResponses.length + 1;
                let status = `$${attemptNum}$. $${attempt.sum}$`;
                slide8EResponses.push(status);
              }
              break;
          }
        }
        break;
      case 9:
        {
          // prompt 1 attempt: { row1: ["1", "2", "3"], row2: ["4", "5", "6", "7"], row3: ["8", "9"], row4: ["10"] }
          /*
          3 x 27 = row1[0] x (row1[1] + row1[2])
                 = (row2[0] x row2[1]) + (row2[2] x row2[3])
                 = row3[0] + row3[1]
                 = row4[0]
          */
          function paintItPurple(strNum) {
            return `\\color{823F98}{${strNum}}\\color{000000}`;
          }
          const colored1 = attempt.row1.map(paintItPurple);
          const colored2 = attempt.row2.map(paintItPurple);
          const colored3 = attempt.row3.map(paintItPurple);
          const colored4 = attempt.row4.map(paintItPurple);
          const attemptNum = slide9Responses.length + 1;
          const status = `$${attemptNum}$. $\\begin{aligned} 3\\times27 &= ${colored1[0]}\\times(${colored1[1]}+${colored1[2]}) \\\\ &= (${colored2[0]}\\times${colored2[1]})+(${colored2[2]}\\times${colored2[3]}) \\\\ &= ${colored3[0]} + ${colored3[1]} \\\\ &= ${colored4[0]} \\end{aligned}$`;
          slide9Responses.push(status);
        }
        break;
      default:
        break;
    }
  });

  const responseMatrix = [
    slide2Responses,
    slide3Responses,
    slide4AResponses,
    slide4BResponses,
    slide5Responses,
    slide7Responses,
    slide8AResponses,
    slide8BResponses,
    slide8CResponses,
    slide8DResponses,
    slide8EResponses,
    slide9Responses,
  ];
  responseMatrix.forEach((slide, index) => {
    const value = slide.join("\n\n");
    table1.updateCell(index + 1, 1, { value });
  });
}
