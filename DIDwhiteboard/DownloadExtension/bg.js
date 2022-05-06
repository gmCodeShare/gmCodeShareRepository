var tab_title = "";
function showIt(results) {
	console.log(results);
	let returnObject = results[0];
	document.querySelector("#id1").innerHTML =
		"<p>Title: " + tab_title + "</p><p> Success </p>";
	for (let i = 0, L = returnObject.length; i < L; i++) {
		setTimeout(function () {
			chrome.downloads.download({
				url: returnObject.links[i],
				filename: returnObject.names[i],
			});
		}, i * 1000);
	}
}

chrome.tabs.query({ active: true }, function (tabs) {
	var tab = tabs[0];
	tab_title = tab.title;
	chrome.tabs.executeScript(
		tab.id,
		{
			code: `
            function downloadItAll() {
            let returnObject = {
                length: 0,
                links: [],
                names: [],
            };
                //console.log("Length:"+ document.getElementsByClassName("card-title").length);
                for (let i = 0, L = document.getElementsByClassName("card-title").length; i < L; i++) {
                    var cardLink = "https://www.geogebra.org/material/download/format/file/id/" + document.getElementsByClassName("card-link")[i].href.replace("https://www.geogebra.org/m/", "");
                    var cardName = document.getElementsByClassName("card-title")[i].innerText.replace(/ /g,"").replace(/,/,"") + "-" + document.getElementsByClassName("card-link")[i].href.replace("https://www.geogebra.org/m/", "") + ".ggb";    
                    returnObject.links.push(cardLink);
                    returnObject.names.push(cardName);
                    //console.log("url: " + cardLink);
                    //console.log("name: " + cardName);
                }
                returnObject.length=document.getElementsByClassName("card-title").length;
                return returnObject;
           }; downloadItAll();
            `,
		},
		(results) => {
			showIt(results);
		}
	);
});
