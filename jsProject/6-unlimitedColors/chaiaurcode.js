function randomColor() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

const button = document.querySelector('#start');
const button2 = document.querySelector('#stop');
const body = document.querySelector('body');
let changeColor;
const changeColorInterval = function () {
  body.style.backgroundColor = randomColor();
};


  button.addEventListener('click', () => {
   if(!changeColor)
   {
    changeColor = setInterval(changeColorInterval, 1000);
   }
  });


button2.addEventListener('click', () => {
  clearInterval(changeColor);
  changeColor = null;
});
