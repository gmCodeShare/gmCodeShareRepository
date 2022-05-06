const { ggb1, ggb2, ggb3, text1, text2, text3, text4 } = components;

utils.RTS.on("datachange", "slide-70413f4e7f20", (register) => {
	// Don't do anything if we don't have data
	if (!register || !register.length) {
		return;
	}
	const myAttempts = register.filter(({ info }) => info.isSelf);

	const sortedBySlides = myAttempts
		.map(({ data: { prompt, slide, attempt } }) => ({
			prompt,
			slide: slide + 1,
			attempt: { ...attempt },
		}))
		.sort((a, b) => a.slide - b.slide);

	const sortedByAttempts = myAttempts
		.map(({ data: { prompt, slide, attempt } }) => ({
			attemptName: Object.keys(attempt)[0],
			attempt: { ...attempt },
			prompt: prompt,
			slide: slide + 1,
		}))
		.sort((a, b) => a.attempt - b.attempt);
	// const sortedByAttempts = sortedBySlides.filter((attempt) => {
	//     if (attempt.attempt.explain) {
	//         console.log(attempt.attempt);
	//     }
	//})

	console.log(sortedByAttempts);
	//	console.log(sortedBySlides);
	// processAttempts(sortedBySlides);
	processAttempts(sortedByAttempts);
});

function processAttempts(attempts) {
	let slide2AResponses = [];
	let slide2BResponses = [];
	let slide3AResponses = [];
	let slide3BResponses = [];
	let slide4AResponses = [];
	let slide4BResponses = [];
	let slide5AResponses = [];
	let slide5BResponses = [];
	let visual1Attempts = [];
	let visual2Attempts = [];
	let visual3Attempts = [];
	let explainAttempts = [];
	let explain2Attempts = [];
	let quotientAttempts = [];
	let quotient2Attempts = [];
	let multExpAttempts = [];
	let multExp2Attempts = [];
	let resultAttempts = [];
	let result2Attempts = [];

	attempts.forEach((element) => {
		const { prompt, slide, attempt, attemptName } = element;
		switch (attemptName) {
			case "visual1":
				visual1Attempts.push(attempt.attemptName);
				break;
			case "visual2":
				visual2Attempts.push(attempt.attemptName);
				break;
			case "visual3":
				visual3Attempts.push(attempt.attemptName);
				break;
			case "explain":
				explainAttempts.push(attempt.attemptName);
				break;
			case "explain2":
				explain2Attempts.push(attempt.attemptName);
				break;
			case "quotient":
				quotientAttempts.push(attempt.attemptName);
				break;
			case "quotient2":
				quotient2Attempts.push(attempt.attemptName);
				break;
			case "multExp":
				multExpAttempts.push(attempt.attemptName);
				break;
			case "multExp2":
				multExp2Attempts.push(attempt.attemptName);
				break;
			case "result":
				resultAttempts.push(attempt.attemptName);
				break;
			case "result2":
				result2Attempts.push(attempt.attemptName);
				break;
			default:
				break;
		}
	});
	attempts.forEach((element) => {
		const { prompt, slide, attempt } = element;
		switch (slide) {
			case 1:
                if (element.attempt.visual1) {
                    ggb1.instance.setXML(element.attempt.visual1);
                    ggb1.instance.getAllObjectNames().forEach((element) => {
                        ggb1.instance.setFixed(element, true, false);
                    })
				}
				break;
			case 2:
				const { explain, quotient } = attempt;
				console.log(attempt, explain, quotient);
				for (let i = 0, L = explainAttempts.length; i < L; i++) {
					if (typeof explain != "undefined") {
						if (i == 0) {
							slide2AResponses.push(`Explain how to find the quotient of $\\frac{1}{5}\\div4$ using this tape diagram.  \n\n Your response: \<span class=\"handwriting student-answer\"\> ${explain}</span>`);
						} else {
							slide2AResponses.push(
								`\n\n You also responded: \<span class=\"handwriting student-answer\"\> ${explain}</span>`
							);
						}
					}
				}
				for (let i = 0, L = quotientAttempts.length; i < L; i++) {
					if (typeof quotient != "undefined") {
						if (i == 0) {
							slide2BResponses.push(
								`Find the quotient of $\\frac{1}{5}\\div4$.  \n\n Your response: \<span class=\"handwriting student-answer\"\> $${quotient}$</span>`
							);
						} else {
							slide2BResponses.push(
								`\n\n You also responded: \<span class=\"handwriting student-answer\"\> $${quotient}$</span>`
							);
						}
					}
				}
				text1.updateData({
					text:
						slide2AResponses.join(" ") +
						"\n\n" +
						slide2BResponses.join(" ") + `\n\n` + `<br></br>  `+ `Create a tape diagram that represents $\\frac{2}{5}÷4$.`,
				});
				break;
			case 3:
                if (element.attempt.visual2) {
                    ggb2.instance.setXML(element.attempt.visual2);
                    ggb2.instance.getAllObjectNames().forEach((element) => {
                        ggb2.instance.setFixed(element, true, false);
                    })
                 
				}
				const { multExp, result } = attempt;
				console.log(attempt, multExp, result);
				for (let i = 1, L = multExpAttempts.length; i < L; i++) {
					if (typeof multExp != "undefined") {
						if (slide3AResponses.length == 0) {
							slide3AResponses.push(
								`Write $\\frac{2}{5}÷4$ as a multiplication expression.\n\n Your response: \<span class=\"handwriting student-answer\"\>$${multExp}$</span>`
							);
						} else {
							slide3AResponses.push(
								`\n\n You also responded: \<span class=\"handwriting student-answer\"\> $${multExp}$</span>`
							);
						}
					}
				}
				for (let i = 0, L = resultAttempts.length; i < L; i++) {
					if (typeof result != "undefined") {
						if (slide3BResponses.length == 0) {
							slide3BResponses.push(
								`Find the value of $\\frac{2}{5}÷4$. \n\n Your response: \<span class=\"handwriting student-answer\"\> $${result}$</span>`
							);
						} else {
							slide3BResponses.push(
								`\n\n You also responded: \<span class=\"handwriting student-answer\"\> $${result}$</span>`
							);
						}
					}
				}
				text2.updateData({
					text:
						slide3AResponses.join(" ") +
						"\n\n" +
						slide3BResponses.join(" "),
				});
				break;
			case 4:
				if (element.attempt.visual3) {
                    ggb3.instance.setXML(element.attempt.visual3);
                    ggb3.instance.getAllObjectNames().forEach((element) => {
                        ggb3.instance.setFixed(element, true, false);
                    })
				}
				const { result2, explain2 } = attempt;
				console.log(attempt, result2, explain2);
				for (let i = 1, L = result2Attempts.length; i < L; i++) {
					if (typeof result2 != "undefined") {
						if (slide4AResponses.length == 0) {
							slide4AResponses.push(
								`If $\\frac{2}{3}$ of a pan of lasagna is shared by 6 friends, what fraction of the pan of lasagna does each friend get? \n\n Your response: \<span class=\"handwriting student-answer\"\> $${result2}$</span>`
							);
						} else {
							slide4AResponses.push(
								`\n\n You also responded: \<span class=\"handwriting student-answer\"\> $${result2}$</span>`
							);
						}
					}
				}
				for (let i = 0, L = explain2Attempts.length; i < L; i++) {
					if (typeof explain2 != "undefined") {
						if (slide4BResponses.length == 0) {
							slide4BResponses.push(
								`Explain how you know.  \n\n Your response: \<span class=\"handwriting student-answer\"\> ${explain2}</span>`
							);
						} else {
							slide4BResponses.push(
								`\n\n You also responded: \<span class=\"handwriting student-answer\"\> ${explain2}</span>`
							);
						}
					}
				}
				text3.updateData({
					text:
						slide4AResponses.join(" ") +
						"\n\n" +
						slide4BResponses.join(" "),
				});
				break;
			case 5:
				const { multExp2, quotient2 } = attempt;
				console.log(attempt, multExp2, quotient2);
				for (let i = 1, L = multExp2Attempts.length; i < L; i++) {
					if (typeof multExp2 != "undefined") {
						if (slide5AResponses.length == 0) {
							slide5AResponses.push(
								`Rewrite $\\frac{7}{2}÷4$ as a multiplication expression.  \n\n Your response: \<span class=\"handwriting student-answer\"\> $${multExp2}$</span>`
							);
						} else {
							slide5AResponses.push(
								`\n\n You also responded: \<span class=\"handwriting student-answer\"\>$${multExp2}$</span>`
							);
						}
					}
				}
				for (let i = 0, L = quotient2Attempts.length; i < L; i++) {
					if (typeof quotient2 != "undefined") {
						if (slide5BResponses.length == 0) {
							slide5BResponses.push(
								`Find the value of $\\frac{7}{2}\\div4$. \n\n Your response:\<span class=\"handwriting student-answer\"\> $${quotient2}$</span>`
							);
						} else {
							slide5BResponses.push(
								`\n\n You also responded: \<span class=\"handwriting student-answer\"\> $${quotient2}$</span>`
							);
						}
					}
				}
				text4.updateData({
					text:
						slide5AResponses.join(" ") +
						"\n\n" +
						slide5BResponses.join(" "),
				});
				break;

			default:
				break;
		}
	});
}
