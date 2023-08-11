# Projects related to DOM in Chai aur JavaScript By Hitesh Choudhary sir in Chai aur Code youtube Channal

## project link 
[Click here to show project demo](https://dom-project-chaiaurcode-1rfaej.stackblitz.io/3-DigitalClock/index.html)

# Solution code

## project 3
``` js
console.log("Keval Thumar")

const clock = document.getElementById('clock');
setInterval(() => {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```