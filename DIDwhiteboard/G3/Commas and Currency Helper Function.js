//makes integers into strings with appropriate commas
function commas(number) {
  //makes the integer a string
  var stringyNumber = String(number);
  //gets the length of the string
  var stringyLength = stringyNumber.length;
  //if it requires a comma
  if (stringyLength > 3) {
    //put a comma three places from the end
    stringyNumber = stringyNumber.slice(0, stringyLength - 3) + "," + stringyNumber.slice(-3);
    //if there's already a comma
    if (stringyNumber.indexOf(",") > -1) {
      //keep placing commas in the right spots
      for (var i = 0; i < Math.floor(stringyLength / 3) - 1; i++) {
        if ((stringyNumber.indexOf(",") - 3) != 0) {
          stringyNumber = stringyNumber.slice(0, stringyNumber.indexOf(",") - 3) + "," + stringyNumber.slice(stringyNumber.indexOf(",") - 3);
        }
      }
    }
  }
  //send back the string you want
  return stringyNumber;
}

//makes numbers into strings with appropriate commas and dollar sign
function currency(number) {
  //makes the number a string
  var stringyNumber = String(number);
  //gets the length of the string
  var stringyLength = stringyNumber.length;
  //if it doesn't have a decimal place
  if (stringyNumber.indexOf(".") == -1) {
    //put one in
    stringyNumber = stringyNumber + ".00";
    stringyLength = stringyNumber.length;
  }
  //if it doesn't have enough places, add a zero
  if (stringyNumber.indexOf(".") == stringyLength - 2) {
    stringyNumber = stringyNumber + "0";
    stringyLength = stringyNumber.length;
  }
  //if it requires a comma
  if (stringyLength > 6) {
    //put a comma six places from the end
    stringyNumber = stringyNumber.slice(0, stringyLength - 6) + "," + stringyNumber.slice(-6);
    stringyLength = stringyNumber.length;
    //if there's already a comma
    if (stringyNumber.indexOf(",") > -1) {
      //keep placing commas in the right spots
      for (var i = 0; i < Math.floor((stringyLength - 5) / 3) - 1; i++) {
        if ((stringyNumber.indexOf(",") - 3) != 0) {
          stringyNumber = stringyNumber.slice(0, stringyNumber.indexOf(",") - 3) + "," + stringyNumber.slice(stringyNumber.indexOf(",") - 3);
        }
      }
    }
  }
  //add dollar sign
  stringyNumber = "$" + stringyNumber;
  //send back the string you want
  return stringyNumber;
}