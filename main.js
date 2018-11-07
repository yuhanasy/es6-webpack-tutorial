import { multiply, multiplyWithx } from './lib';
console.log(multiply(5,5)); // 25
console.log(multiplyWithx(6)); // 12

document.getElementById('btn-1').addEventListener('click', function() {
  document.getElementById('multiplyA-B').innerHTML = multiply(5, 5);
});

document.getElementById('btn-2').addEventListener('click', function() {
  document.getElementById('multiplyX-Y').innerHTML = multiplyWithx(6);
});