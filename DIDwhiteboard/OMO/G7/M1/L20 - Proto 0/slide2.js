const { media1, cc_submit_b1b791c2fb51_button1: button1 } = components;

media1.on("ready", ({ data: vid }) => {
  vid.time(vid.duration());
});

button1.on("click", controls.next);
