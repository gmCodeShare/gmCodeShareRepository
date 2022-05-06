const { media1 } = components;

media1.on("ready", ({ data: vid }) => {
  vid.play();
  vid.bind("end", controls.next);
});
