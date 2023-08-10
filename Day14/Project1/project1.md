# Projects related to DOM in Chai aur JavaScript By Hitesh Choudhary sir in Chai aur Code youtube Channal

## project link 
[Click here to show project demo](https://dom-project-chaiaurcode-ujqczh.stackblitz.io/1-colorChanger/index.html)

# Solution code

## project 1
```javaScript
console.log("Keval Thumar")

  const buttons = document.querySelectorAll('.button');
  const body = document.querySelector('body');
  // console.log(buttons);

  buttons.forEach((button) => {
    // console.log(button);
    button.addEventListener('click', (e) => {
      //when we press a color div then in e it store mouseClick event and in e.target it store perticular one HTMLSpanElement
      switch (e.target.id) {
        case 'grey':
          body.style.backgroundColor = e.target.id;
          body.style.color = 'white';
          break;
        case 'white':
          body.style.backgroundColor = e.target.id;
          body.style.color = '#212121';
          break;
        case 'blue':
          body.style.backgroundColor = e.target.id;
          body.style.color = 'white';
          break;
        case 'yellow':
          body.style.backgroundColor = e.target.id;
          body.style.color = 'red';
          break;
        default:
          body.style.backgroundColor = 'white';
          break;
      }
    });
  });

```