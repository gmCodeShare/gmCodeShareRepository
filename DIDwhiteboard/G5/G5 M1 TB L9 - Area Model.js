const { ggb1, select1 } = components;

//.instance.evalCommand("RunClickScript(button2)");
select1.selectOption("1");

select1.on("change", () => {
	ggb1.instance.evalCommand("RunClickScript(button2)");
});
