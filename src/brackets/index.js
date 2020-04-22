/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let stack = [];

  const isMatch = (open, close) => {
    if (open === "{" && close === "}") {
      return true;
    } else if (open === "[" && close === "]") {
      return true;
    } else if (open === "(" && close === ")") {
      return true;
    }

    return false;
  };

  const newArr = Array.from(str);

  newArr.forEach((i) => {
    // Check for the opening brackets
    if (i === "[" || (i === "{") | (i === "(")) {
      stack.push(i);
    } else if (isMatch(stack[stack.length - 1], i)) {
      stack.pop();
    }
  });

  // return statement here
  if (stack.length > 0) {
    return "invalid";
  } else {
    return "valid";
  }
}

module.exports = isValid;
