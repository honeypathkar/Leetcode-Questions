var hollowRectanglePattern = function (n) {
  // create a function that will print this
  /* *****
   ** **
   * * *
   ** **
   ***** */
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      if (
        i === 0 ||
        i === n - 1 ||
        j === 0 ||
        j === n - 1 ||
        i === j ||
        j === n - 1 - i
      ) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
};

hollowRectanglePattern(10);
