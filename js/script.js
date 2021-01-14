const minus = document.querySelector('.btn-minus');
const plus = document.querySelector('.btn-plus');
const count = document.querySelector('.counter__count');
let number = Number(count.textContent);

plus.addEventListener('click', function () {
   number++;
   count.textContent = number;
});
minus.addEventListener('click', function () {
   if (number > 1) {
      number--;
} else {
   number = 1;
}
count.textContent = number;

})



