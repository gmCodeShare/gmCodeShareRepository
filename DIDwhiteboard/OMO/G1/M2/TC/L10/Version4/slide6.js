const { media9 } = components;

media9.on("ready", ({data: vid}) => {
    vid.play();
    vid.bind("end", () => {
		controls.next();
	});
});


