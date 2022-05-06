const {
  textDisplay2,
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  separator1,
  ggb1,
  feedback,
  textDisplay1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on("firstload", () => {
  ggb1.instance.setValue("showBar", false);
  ggb1.instance.setValue("time", 1);
  ggb1.instance.showToolBar(false);
  button2.updateData({ visible: false });
  button3.updateData({ visible: false });
  button4.updateData({ visible: false });
  button5.updateData({ visible: false });
  button6.updateData({ visible: false });
  textDisplay1.updateData({ visible: false });
});

button1.on("click", () => {
  ggb1.instance.setAnimating("time1", true);
  ggb1.instance.startAnimation();
  textDisplay1.updateData({ visible: true });
  textDisplay1.updateData({
    text: `$\\large{f(t) = \\begin{cases}
   \\textcolor{#007FAF}{24}, &\\text{for } \\textcolor{#007FAF}{0 \\le t < 2}
\\end{cases}}$`,
  });
  button1.updateData({ visible: false });
  button2.updateData({ visible: true });
});

button2.on("click", () => {
  ggb1.instance.setAnimating("time2", true);
  ggb1.instance.startAnimation();
  textDisplay1.updateData({ visible: true });
  textDisplay1.updateData({
    text: `$\\large{f(t) = \\begin{cases}
   \\textcolor{#007FAF}{24}, &\\text{for } \\textcolor{#007FAF}{0 \\le t < 2} \\\\
   \\textcolor{#DA291C}{-1.5t+27}, &\\text{for } \\textcolor{#DA291C}{2 \\le t < 6} 
\\end{cases}}$`,
  });
  button2.updateData({ visible: false });
  button3.updateData({ visible: true });
});

button3.on("click", () => {
  ggb1.instance.setAnimating("time3", true);
  ggb1.instance.startAnimation();
  textDisplay1.updateData({ visible: true });
  textDisplay1.updateData({
    text: `$\\large{f(t) = \\begin{cases}
   \\textcolor{#007FAF}{24}, &\\text{for } \\textcolor{#007FAF}{0 \\le t < 2} \\\\
   \\textcolor{#DA291C}{-1.5t+27}, &\\text{for } \\textcolor{#DA291C}{2 \\le t < 6} \\cr
  \\textcolor{#008139}{18}, &\\text{for } \\textcolor{#008139}{6 \\le t < 9.3}
\\end{cases}}$`,
  });
  button3.updateData({ visible: false });
  button4.updateData({ visible: true });
});

button4.on("click", () => {
  ggb1.instance.setAnimating("time4", true);
  ggb1.instance.startAnimation();
  textDisplay1.updateData({ visible: true });
  textDisplay1.updateData({
    text: `$\\large{f(t) = \\begin{cases}
   \\textcolor{#007FAF}{24}, &\\text{for } \\textcolor{#007FAF}{0 \\le t < 2} \\\\
   \\textcolor{#DA291C}{-1.5t+27}, &\\text{for } \\textcolor{#DA291C}{2 \\le t < 6} \\cr
  \\textcolor{#008139}{18}, &\\text{for } \\textcolor{#008139}{6 \\le t < 9.3} \\cr
   \\textcolor{#F26A36}{-3t+45.9}, &\\text{for } \\textcolor{#F26A36}{9.3 \\le t < 11.3}
\\end{cases}}$`,
  });
  button4.updateData({ visible: false });
  button5.updateData({ visible: true });
});

button5.on("click", () => {
  ggb1.instance.setAnimating("time5", true);
  ggb1.instance.startAnimation();
  textDisplay1.updateData({ visible: true });
  textDisplay1.updateData({
    text: `$\\large{f(t) = \\begin{cases}
   \\textcolor{#007FAF}{24}, &\\text{for } \\textcolor{#007FAF}{0 \\le t < 2} \\\\
   \\textcolor{#DA291C}{-1.5t+27}, &\\text{for } \\textcolor{#DA291C}{2 \\le t < 6} \\cr
  \\textcolor{#008139}{18}, &\\text{for } \\textcolor{#008139}{6 \\le t < 9.3} \\cr
   \\textcolor{#F26A36}{-3t+45.9}, &\\text{for } \\textcolor{#F26A36}{9.3 \\le t < 11.3} \\cr
   \\textcolor{#823F98}{12}, &\\text{for } \\textcolor{#823F98}{11.3 \\le t \\le 16}
\\end{cases}}$`,
  });
  button5.updateData({ visible: false });
  button6.updateData({ visible: true });
});

button6.on("click", () => {
  ggb1.instance.setAnimating("time1", false);
  ggb1.instance.setAnimating("time2", false);
  ggb1.instance.setAnimating("time3", false);
  ggb1.instance.setAnimating("time4", false);
  ggb1.instance.setAnimating("time5", false);
  ggb1.instance.setValue("time1", 0.135);
  ggb1.instance.setValue("time2", 0.195);
  ggb1.instance.setValue("time3", 0.435);
  ggb1.instance.setValue("time4", 0.605);
  ggb1.instance.setValue("time5", 0.705);
  textDisplay1.updateData({ visible: false });
  button6.updateData({ visible: false });
  button1.updateData({ visible: true });
});

/*
{"compTotals":{"textbox":3,"button":6,"separator":1,"geogebra":1},"stage":"Learn","lessonInfo":"9 M3 TC L13 - Print Alternate Slide Deck for Modeling Elevation as a Function of Time","teacherView":true,"layout":"T layout"}
*/
