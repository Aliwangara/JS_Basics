


const colors =['red','black','green','white','cream'];

let changeColor = document.getElementById('change-color');
const colorBox = document.getElementById('color-box');

changeColor.addEventListener('click', function(){
      let randomColor = Math.floor(Math.random() * colors.length)
      console.log(colors[randomColor])
      colorBox.style.background = colors[randomColor]; 
      
 
})


