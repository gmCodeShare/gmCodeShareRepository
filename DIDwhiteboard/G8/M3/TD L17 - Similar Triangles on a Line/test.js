function ggbOnInit(name, ggbObject) {
  const arialabel = 'Triangles Interactive';
  const ggbcanvasarray = document.querySelectorAll('canvas');
  for (i = 0; i < ggbcanvasarray.length; i++) {
    const parameterID = ggbcanvasarray[i]
      .closest('div.appletParameters,div.notranslate')
      .getAttribute('id');
    const canvasID = 'canvas' + parameterID;
    ggbcanvasarray[i].setAttribute('id', canvasID);
  }
  const id = 'canvas' + name;
  const ggbcanvas = document.getElementById(id);
  if (ggbcanvas) {
    ggbcanvas.setAttribute('aria-label', arialabel);
  }

  ggbObject.registerClickListener(identifyIt);
  ggbObject.registerClientListener(click);

  function click(a) {
    if (a[0] == 'select') {
      ggbObject.setValue('showText', false);
    }
  }

  function identifyIt(a) {
    console.log('a from flip it function');
    console.log(a);
    //a setLayer might be neat to keep whatever was last clicked on top
    if (a == 't1') {
      flipIt('F', 'G');
    }

    if (a == 't2') {
      flipIt('E', 'H');
    }
  }

  function flipIt(a, b) {
    let oldA = [ggbObject.getXcoord(a), ggbObject.getYcoord(a)];
    let oldB = [ggbObject.getXcoord(b), ggbObject.getYcoord(b)];
    ggbObject.setCoords(a, oldB[0], oldB[1]);
    ggbObject.setCoords(b, oldA[0], oldA[1]);
  }

  ggbObject.registerClientListener(dragit);
  document.addEventListener('keyup', keyit);

  function dragit(a) {
    if (a.type == 'dragEnd') {
      check();
    }
  }

  function keyit(event) {
    //event keys may be different depending on how object is moved with the keyboard
    if (
      event.key == '+' ||
      event.key == '-' ||
      event.key == 'ArrowLeft' ||
      event.key == 'ArrowRight' ||
      event.key == 'ArrowUp' ||
      event.key == 'ArrowDown' ||
      event.key == ' '
    ) {
      check();
    }
  }

  function check() {
    ggbObject.evalCommand('ReadText(status)');
  }

  ggbObject.registerClientListener(function (a) {
    switch (a.type) {
      case 'select':
        showSelection(a.target);
        break;
      case 'deselect':
        showSelection();
        break;
    }
  });

  function showSelection(target) {
    const color = [0, 0, 0];
    // delete previous selection poly
    const allPoints = ggbObject.getAllObjectNames('point');
    allPoints.forEach((element) => {
      if (ggbObject.getCaption(element) === 'selection') {
        ggbObject.deleteObject(element);
      }
    });

    // for (let i = 0, L = allPoints.length; i < L; i++) {
    //     const point = allPoints[i];
    //     if (ggbObject.getCaption(point) === "selection") {
    //         ggbObject.deleteObject(point);
    //     }
    // }
    if (!target) {
      return;
    }
    // create new selection poly
    const points = getVerticesString(target);
    if (!points) {
      return;
    }
    const selPoly = ggbObject.evalCommandGetLabels('Polygon({' + points + '})');
    ggbObject.setFixed(selPoly, false, false);
    ggbObject.setColor(selPoly, ...color);
    ggbObject.setFilling(selPoly, 0);
    ggbObject.setLineThickness(selPoly, 8);
    ggbObject.setLayer(selPoly, ggbObject.getLayer(target) + 1);
  }

  function getVerticesString(target) {
    // get points for selection poly depending on selected object type
    if (isPoly(target)) {
      //      const vertString = ggbObject.evalCommandGetLabels("Vertex(" + target + ")");
      const vertString = ggbObject.evalCommandGetLabels(`Vertex(${target})`);

      const vertArr = vertString.split(',');
      hidePoints(vertArr);
      return vertString;
    } else if (ggbObject.getObjectType(target) === 'image') {
      const BR = ggbObject.evalCommandGetLabels(
        `Corner(${target}, 2) + 10(xPix, -yPix)`
      );
      const TR = ggbObject.evalCommandGetLabels(
        `Corner(${target}, 3) + 10(xPix, yPix)`
      );
      const BL = ggbObject.evalCommandGetLabels(
        `Corner(${target}, 1) + 10(-xPix, -yPix)`
      );
      const TL = ggbObject.evalCommandGetLabels(
        `Corner(${target}, 4) + 10(-xPix, yPix)`
      );
      // const BR = ggbObject.evalCommandGetLabels("Corner(" + target + ", 2) + 10(xPix, -yPix)");
      // const TR = ggbObject.evalCommandGetLabels("Corner(" + target + ", 3) + 10(xPix, yPix)");
      // const BL = ggbObject.evalCommandGetLabels("Corner(" + target + ", 1) + 10(-xPix, -yPix)");
      // const TL = ggbObject.evalCommandGetLabels("Corner(" + target + ", 4) + 10(-xPix, yPix)");
      const vertArr = [BL, BR, TR, TL];
      hidePoints(vertArr);
      const vertString = vertArr.join(',');
      return vertString;
    }
  }

  function hidePoints(arr) {
    arr.forEach((el) => {
      ggbObject.setVisible(el, false);
      ggbObject.setCaption(el, 'selection');
    });
    // for (let i = 0, L = arr.length; i < L; i++) {
    //   const point = arr[i];
    //   ggbObject.setVisible(point, false);
    //   ggbObject.setCaption(point, "selection");
    // }
  }

  function isPoly(thing) {
    const polyTypes = [
      'polygon',
      'triangle',
      'quadrilateral',
      'pentagon',
      'hexagon',
    ];
    return polyTypes.includes(ggbObject.getObjectType(thing));
  }
}
