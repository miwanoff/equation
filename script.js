"use strict";
console.log("JavaScript");
let a = +prompt("Input a");
let b = +prompt("Input b");
let c = +prompt("Input c");
let x;
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert("Not a Number!");
} else {
  if (a === 0) {
    if (b !== 0) {
      x = -c / b;
      alert(x);
    } else {
      alert("Error");
    }
  } else {
    let d = b * b - 4 * a * c;
    if (d < 0) {
      /* todo*/
    } else if (d === 0) {
      /* todo*/
    } else {
      /* todo*/
    }
  }
}
