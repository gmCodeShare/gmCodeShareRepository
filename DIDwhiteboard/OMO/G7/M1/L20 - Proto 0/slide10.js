const { media1 } = components;

media1.on("ready", ({ data: vid }) => {
  vid.bind("end", controls.next);
});
