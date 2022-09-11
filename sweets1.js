// Варіант з while
let count = 5;
let n = count / 2;
while (count > 0) {
  let q = confirm("Ще цукерку?");
  if (q) {
    count--;
    alert(count);
  }
}


