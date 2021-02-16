const btnId = document.getElementById('burgerJS')
btnId.onclick = () => btnId.classList.toggle('burger-menu_active')

let arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
for (i = arr.length; i < 13; i++) {
   let newVal = arr[i-1] + arr[i - 2]
   arr.push(newVal)
   console.log(arr);
}

