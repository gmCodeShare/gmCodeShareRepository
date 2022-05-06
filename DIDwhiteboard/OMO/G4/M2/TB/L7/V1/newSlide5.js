//slide-79faa20de1c3

const { cat1, button1, text1, text2 } = components;
slide.on("firstload", () => {
	button1.updateData({ flag: false, disabled: true });
});

cat1.on("change", ({ assigned }) => {
	text2.updateData({
		text: ``,
	});
	button1.updateData({ flag: false });
	let firstCards;
	let secondCards;
	let totalCards;

	if (
		typeof assigned.category_0 != "undefined" &&
		typeof assigned.category_1 != "undefined"
	) {
		firstCards = assigned.category_0.length;
		secondCards = assigned.category_1.length;
		totalCards = firstCards + secondCards;
	} else if (typeof assigned.category_0 != "undefined") {
		totalCards = assigned.category_0.length;
	} else if (typeof assigned.category_1 != "undefined") {
		totalCards = assigned.category_1.length;
	} else {
		totalCards = 0;
	}
	button1.updateData({ disabled: totalCards != 8 && !button1.data.flag });
});

button1.on("click", () => {
	console.log(cat1.data.assigned.category_0);
	button1.updateData({ flag: true });
	button1.updateData({ disabled: button1.data.flag });
	switch (true) {
		case cat1.data.assigned.category_0.includes("0"):
			text2.updateData({
				text: `What product does the $3$ by $2$ array represent?`,
			});
			break;
		case cat1.data.assigned.category_0.includes("2"):
			text2.updateData({
				text: `How many ones are in the place value chart?`,
			});
			break;
		case cat1.data.assigned.category_0.includes("6"):
			text2.updateData({ text: `What is the value of $3\\times2$?` });
			break;
		case cat1.data.assigned.category_0.includes("7"):
			text2.updateData({
				text: `What is the area of a rectangle $3$ units wide and $2$ units long?`,
			});
			break;
		case cat1.data.assigned.category_1.includes("1"):
			text2.updateData({ text: `What is the value of $3\\times10$?` });
			break;
		case cat1.data.assigned.category_1.includes("3"):
			text2.updateData({
				text: `What product does the  $3$ by $10$ array represent?`,
			});
			break;
		case cat1.data.assigned.category_1.includes("4"):
			text2.updateData({
				text: `What is the area of a rectangle $3$ units wide and $10$ units long?`,
			});
			break;
		case cat1.data.assigned.category_1.includes("5"):
			text2.updateData({
				text: `How many tens are in the place value chart?`,
			});
			break;
		default:
			text2.updateData({
				text: ``,
			});
			setTimeout(controls.next, 1000);
			break;
	}
});
