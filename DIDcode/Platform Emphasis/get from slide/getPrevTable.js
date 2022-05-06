/**
 * Get table data from an earlier slide
 *
 * OUTLINE
 * * STEP 1: declare slide id variable
 * * STEP 2: declare previous table variable
 * * STEP 3: do your coding
 * * STEP 4: copy/paste function
 * * ADVANCED FUNCTIONALITY
 */

const { table1 } = components;

/**
 * STEP 1: declare your earlier slide id as a variable
 * (optional, but a good practice)
 */

const id1 = "slide-fef056cd8367";

/**
 * STEP 2: create a variable for your previous table
 *
 * * use getPrevTable instead of getFromSlide
 *
 * * getPrevTable takes four parameters/arguments:
 *    1. slide id
 *    2. component name on previous slide as a string
 *    3. [OPTIONAL] number of rows in your previous table (not counting the headers if original table)
 *    4. [OPTIONAL] number of columns in your previous table
 */

const id1Table = getPrevTable(id1, "table1", 1, 2);

/**
 * STEP 3: use data from your previous table in your code
 */

let cellInput = id1Table.getCell(0, 1).value;

text1.updateData({
  text: `You said $${cellInput}$.`,
});

/**
 * STEP 4: copy the getPrevTable and getMixed functions and paste into your code
 * (putting them at the bottom keeps it out of the way as much as possible)
 */

function getPrevTable(
  slideID,
  compName = "table1",
  inpRows = 0,
  inpColumns = 0
) {
  // find slide num of source
  const slideNum = ((slideId) => {
    if (
      typeof controls == "undefined" ||
      !controls.slidesNavigationData?.length
    ) {
      return "missing slide!";
    }
    let allIds = controls.slidesNavigationData.map(({ slideId }) => slideId);
    return allIds.indexOf(slideId) + 1;
  })(slideID);
  // establish default in same data structure as original
  let defTable = {
    data: { columns: [], rows: [] },
  };
  const prelimTable = getFromSlide(slideID, compName, defTable) || defTable;
  const numRows = !!prelimTable.data?.rows?.length
    ? prelimTable.data.rows.length
    : inpRows;
  const numColumns = !!prelimTable.data?.rows?.[0]?.length
    ? prelimTable.data.rows[0].length
    : inpColumns;
  for (let i = 0; i < numRows; i++) {
    let newRow = [];
    for (let j = 0; j < numColumns; j++) {
      newRow.push({ value: "" });
    }
    defTable.data.rows.push([...newRow]);
  }
  // get previous data
  let prevTable = getFromSlide(slideID, compName, defTable) || defTable;
  // check previous data, fill in useful data
  prevTable.data.hasData =
    // uncomment following line for original tables where students edit headers:
    //prevTable.data.columns.some(({ value }) => value) ||
    prevTable.data.rows.some((row) =>
      row.some(({ value, mixedText }) =>
        !!getMixed(mixedText) ? getMixed(mixedText) : value
      )
    );
  prevTable.data.isComplete =
    // uncomment following line for original tables where students edit headers:
    //prevTable.data.columns.every(({ value }) => value) &&
    prevTable.data.rows.every((row) =>
      row.every(({ value, mixedText }) =>
        !!getMixed(mixedText) ? getMixed(mixedText) : value
      )
    );
  prevTable.data.goBackString = `$\\color{707070}\\text{\[no input yet on slide ${slideNum}\]}$`;
  prevTable.data.slideNum = slideNum;
  prevTable.data.flagText = prevTable.data.isComplete
    ? ""
    : prevTable.data.goBackString;
  // add some useful methods
  prevTable.getCell = function (row, col, leaveBlanks = false) {
    const emptyVal = leaveBlanks ? "" : this.data.goBackString;
    let value = this.data?.rows?.[row]?.[col]?.value
      ? this.data.rows[row][col].value
      : emptyVal;
    let mixedText = this.data?.rows?.[row]?.[col]?.mixedText
      ? [...this.data.rows[row][col].mixedText]
      : [{ children: [{ text: emptyVal }] }];
    return { ...this.data.rows[row][col], value, mixedText };
  };
  prevTable.fillCells = function (
    tableName,
    rowStart = 0,
    colStart = 0,
    leaveBlanks = false,
    cellUpdates = {}
  ) {
    const emptyVal = leaveBlanks ? "" : this.data.goBackString;
    for (let i = 0, L = numColumns; i < L; i++) {
      for (let j = 0, K = numRows; j < K; j++) {
        if (this.getCell(j, i).merged) {
          continue;
        }
        let cellVal = this.getCell(j, i, true).value
          ? this.getCell(j, i, true).value
          : emptyVal;
        const rawMixed = this.getCell(j, i, true).mixedText;
        const cellMixed = getMixed(rawMixed) ? getMixed(rawMixed) : emptyVal;
        const fillVal =
          this.getCell(j, i, true).inputType === "mixed" ? cellMixed : cellVal;
        components[tableName].updateCell(j + rowStart, i + colStart, {
          ...cellUpdates,
          value: fillVal,
        });
      }
    }
  };
  return { ...prevTable };
}

/**
 * ADVANCED FUNCTIONALITY
 *
 * The function returns useful info within the object's data property:
 *
 * * goBackString - string: LaTeX-styled "no input yet..."
 *
 * * hasData - boolean: whether the previous data retrieval was successful
 *
 * * isComplete - boolean: whether the previous table was completely filled
 *
 * * slideNum - integer: slide number of source slide
 *
 * * flagText - string: automated, empty if hasData, goBackString otherwise
 *    - useful if it's not obvious that there's missing data (i.e., numbers and points)
 *    - EX: "The instructions say, 'Here is your point from slide 1', but I skipped slide
 *      1 and so there are no points on the current slide."
 *       BECOMES
 *      "The instructions say, 'Here is your point from slide 1', but I skipped slide 1.
 *      There is a textbox above the GGB on this slide that says 'no input yet...'. When
 *      I put a point on slide 1 and return here, that textbox is gone but my point is here!"
 *
 * The function also provides some methods within the object itself
 *
 * * getCell - parameters number rows, number columns, optional leave blank boolean
 *    - works like dev API getCell
 *    - by default, cell value returned will be converted to the "no input yet..." string
 *      if it is falsy; setting the leave blank boolean to true cancels this effect
 *
 * * fillCells - parameters table name as a string, optional row start, optional column start,
 *   optional leave blank boolean, optional cell updates object
 *    - fills a table on the current slide with data from the previous table
 *    - row and column starts determine where the current table should be filled
 *    - leave blank boolean same as that of the getCell method
 *    - cell updates object contains changes you want applied to each cell filled this way
 */
