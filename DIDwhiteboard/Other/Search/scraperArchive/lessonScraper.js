(() => {
  const { ggb1 } = components;
  const allSlides = controls.rts.lesson.slides;
  allSlides.forEach(
    ({ layout, hideFromStudent, stage, code, slideId, contents }, slideNum) => {
      let compString = "const { ";
      let compTotals = {};
      const compArray = contents.map(({ name, type, data }) => {
        const addToString = `${name}, `;
        compString += addToString;
        const groupMatch = name.match(/_((submit)|(sharewithclass))_/);
        if (groupMatch) {
          // capture group type...
          if (type === "textbox") {
            // ... only once per group
            compTotals[groupMatch[1]] = compTotals[groupMatch[1]] + 1 || 1;
          }
        } else if (type === "image") {
          let key = data.src.includes("authoring-backend")
            ? "uploaded-image"
            : "bynder-image";
          compTotals[key] = compTotals[key] + 1 || 1;
        } else {
          compTotals[type] = compTotals[type] + 1 || 1;
        }
        return name;
      });
      compString += "} = components;\n\n";
      const { level, module, topic, lesson, title } = controls.rts.lesson;
      const searchParams = {
        compTotals,
        stage,
        lessonInfo: `${level} M${module} T${topic} L${
          lesson < 10 ? "0" + parseInt(lesson) : lesson
        } - ${title}`, // 7 M4 TA L01 - Title
        teacherView: hideFromStudent,
        layout:
          layout.length === 2
            ? "T layout"
            : layout[0].length === 1
            ? "one col"
            : "two col",
      };
      const searchComment = `\n\n/*\n${JSON.stringify(searchParams)}\n*/`;
      const regexRenamedComps =
        /(?<=(?:const|let|var)\s*{\s*[\w\s,:/]*)([\w]*): *([\w]*)(?=[\w\s,:/]*}\s*=\s*components;*)/g;
      const regexCompDeclarations =
        /(?:const|let|var)\s*{[\w\s:,/]*}\s*=\s*components;*/g;
      const regexSearchComment = /\/\*\n*\{"compTotals"[^\n]*}\n\*\//g;
      let matches;
      const renamedComps = [];
      while ((matches = regexRenamedComps.exec(code))) {
        // watch out for cases where an alias is named the same as a component
        if (compArray.includes(matches[2])) {
          console.error(
            `Danger! ${slideId} uses ${matches[2]} as both a component name and an alias!`
          );
        }
        // if an original component name matches and has an alias, add the alias
        if (compArray.includes(matches[1])) {
          // check if comp has already been renamed
          if (!renamedComps.includes(matches[1])) {
            console.log(
              `Renaming ${matches[1]} as ${matches[2]} on ${slideId}`
            );
            compString = compString.replace(
              matches[1],
              `${matches[1]}: ${matches[2]}`
            );
            renamedComps.push(matches[1]);
          } else {
            console.warn(
              `Check possible duplicate declaration of ${matches[1]} on ${slideId}`
            );
          }
        } else {
          console.warn(
            `Check component name and alias on ${slideId}: ${matches[1]}, ${matches[2]}`
          );
        }
      }
      let newCode = code;
      while ((matches = regexSearchComment.exec(newCode))) {
        console.log(`Deleting ${matches[0]} on ${slideId}`);
        newCode = newCode.replace(matches[0], "");
      }
      while ((matches = regexCompDeclarations.exec(newCode))) {
        console.log(`Deleting ${matches[0]} on ${slideId}`);
        newCode = newCode.replace(matches[0], "");
      }
      newCode = compString + newCode + searchComment;
      if (slideNum < allSlides.length - 1) {
        setTimeout(() => {
          ggb1.instance.setTextValue("jsText", newCode);
          ggb1.instance.setTextValue("jsName", slideId);
          ggb1.instance.evalCommand("RunClickScript(button1)");
        }, slideNum * 200);
      }
    }
  );
})();
