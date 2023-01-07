//BT1: Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000
// Input: number
let i = 0;
// Output:
let total = 0;
while (total < 10000) {
  i++;
  total += i;
}
document.getElementById("message").innerHTML = `Số nguyên dương nhỏ nhất: ${i}`;

//BT2: Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2+ x^3 + … + x^n (Sử dụng vòng lặp và hàm
document.getElementById("ex2").onclick = function () {
  let x = +document.getElementById("number_1").value;
  let n = +document.getElementById("number_2").value;
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += Math.pow(x, i);
  }
  document.getElementById("message_2").innerHTML = total;
};

//BT3: Nhập vào n. Tính giai thừa 1*2*...n
document.getElementById("ex3").onclick = function () {
  let n = +document.getElementById("number").value;
  let total = 1;

  for (let i = 1; i <= n; i++) {
    total *= i;
  }
  document.getElementById("message_3").innerHTML = total;
};

//BT4:
document.getElementById("ex4").onclick = function () {
  let div = "";
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      div += `<div style="background-color: red" class="p-2 rounded">Div chẵn ${i}</div>`;
    } else {
      div += `<div style="background-color: blue" class="p-2 rounded">Div lẻ ${i}</div>`;
    }
  }

  document.getElementById("add").innerHTML = div;
};
