const { media1, cc_submit_800f4394a190_button1: button1 } = components;

media1.on("ready", ({ data: vid }) => {
  vid.time(17);
  button1.on("click", () => {
    vid.play();
  });
  vid.bind("end", controls.next);
});
