let nameFull = document.querySelector('.name');
const arr = ["Hritik", "Ravi", "Mohit", "Himanshu"];

let end = arr.length;
let index = 0;

nameFull.addEventListener('click',function() {
     nameFull.innerText = arr[index];
     index = (index + 1) % end
})
