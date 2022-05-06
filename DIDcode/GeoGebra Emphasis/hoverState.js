// make some GGB objects using the input bar
// Execute({"corner2 = Corner(2)","corner4 = Corner(4)","xd = x(corner2) - x(corner4)","yd = y(corner4) - y(corner2)","Follow = (0,0)"})

//hover code with closure allowing for multiple applets
function ggbOnInit(name, ggbObject) {
    //pair canvas elements with material IDs
    var ggbcanvasarray = document.querySelectorAll("canvas");
    for (i = 0; i < ggbcanvasarray.length; i++) {
        var parameterID = ggbcanvasarray[i].closest("div.appletParameters,div.notranslate").getAttribute("id");
        var canvasID = "canvas" + parameterID;
        if (canvasID) {
            ggbcanvasarray[i].setAttribute("id", canvasID);
        };
    };
    var id = "canvas" + name;
    var ggbcanvas = document.getElementById(id);
    if (ggbcanvas) {
        ggbcanvas.setAttribute("aria-label", "Hover Interactive");
        ggbcanvas.addEventListener("mousemove", function(e) {
            hover(e);
        });
        ggbcanvas.addEventListener(
            "touchmove",
            function(e) {
                var touch = e.touches[0];
                var mouseEvent = new MouseEvent("mousemove", {
                    clientX: touch.clientX,
                    clientY: touch.clientY,
                });
                ggbcanvas.dispatchEvent(mouseEvent);
            },
            false
        );
    }
    function hover(event) {
        var boundingbox = ggbcanvas.getBoundingClientRect();
        var boxleft = boundingbox.left;
        var boxtop = boundingbox.top;
        var boxwidth = boundingbox.width;
        var boxheight = boundingbox.height;
        var x = event.clientX - boxleft;
        var y = event.clientY - boxtop;
        ggbObject.setCoords("Follow",ggbObject.getXcoord("corner4") + (x * ggbObject.getValue("xd")) / boxwidth,ggbObject.getYcoord("corner4") - (y * ggbObject.getValue("yd")) / boxheight);
    }
}



// old versions below
var canvasarray = document.querySelectorAll("canvas");
var ggbcanvas;
for (var i = 0; i < canvasarray.length; i++) {
  if (i == 0) {
    ggbcanvas = canvasarray[i];
    ggbcanvas.style.zIndex = "1";
  } else {
    canvasarray[i].style.zIndex = "0";
  }
}

function ggbOnInit() {
  ggbcanvas.addEventListener("mousemove", function (e) {
    hover(e);
  });
  ggbcanvas.addEventListener(
    "touchmove",
    function (e) {
      var touch = e.touches[0];
      var mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY,
      });
      ggbcanvas.dispatchEvent(mouseEvent);
    },
    false
  );
}

function hover(event) {
  // read properties of the canvas element
  var boundingbox = ggbcanvas.getBoundingClientRect();
  var boxleft = boundingbox.left;
  var boxtop = boundingbox.top;
  var boxwidth = boundingbox.width;
  var boxheight = boundingbox.height;

  // get pixel coodinates of cursor relative to the canvas element
  var x = event.clientX - boxleft;
  var y = event.clientY - boxtop;

  // set coordinates of point Follow to match cursor coordinates in the Geogebra coordinate system
  ggbApplet.setCoords(
    "Follow",
    ggbApplet.getXcoord("corner4") + (x * ggbApplet.getValue("xd")) / boxwidth,
    ggbApplet.getYcoord("corner4") - (y * ggbApplet.getValue("yd")) / boxheight
  );
}

/**
 * Closure version:
 */

function ggbOnInit(name, ggbItem) {
  var canvasarray = document.querySelectorAll("canvas");
  var ggbcanvas;

  for (var i = 0; i < canvasarray.length; i++) {
    if (i == 0) {
      ggbcanvas = canvasarray[i];
      ggbcanvas.style.zIndex = "1";
    } else {
      canvasarray[i].style.zIndex = "0";
    }
  }

  ggbcanvas.addEventListener("mousemove", function (e) {
    hover(e);
  });

  ggbcanvas.addEventListener(
    "touchmove",
    function (e) {
      var touch = e.touches[0];
      var mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY,
      });
      ggbcanvas.dispatchEvent(mouseEvent);
    },
    false
  );

  function hover(event) {
    // read properties of the canvas element
    var boundingbox = ggbcanvas.getBoundingClientRect();
    var boxleft = boundingbox.left;
    var boxtop = boundingbox.top;
    var boxwidth = boundingbox.width;
    var boxheight = boundingbox.height;
    // get pixel coodinates of cursor relative to the canvas element
    var x = event.clientX - boxleft;
    var y = event.clientY - boxtop;
    // set coordinates of point Follow to match cursor coordinates in the Geogebra coordinate system
    ggbItem.setCoords(
      "Follow",
      ggbItem.getXcoord("corner4") + (x * ggbItem.getValue("xd")) / boxwidth,
      ggbItem.getYcoord("corner4") - (y * ggbItem.getValue("yd")) / boxheight
    );
  }
}
