const { media1, cc_submit_1d93061a6cdd_button1: button1 } = components;

media1.on("ready", ({ data: vid }) => {
  vid.time(24);
  button1.on("click", () => {
    vid.play();
  });
  vid.bind("end", controls.next);
});
