const url = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');

// handle this end point with XMLHttpRequest


// handle the case of race condition

const xMLHttpRequest = new XMLHttpRequest();
btn.addEventListener('click', function () {
    xMLHttpRequest.open('GET', url);
    xMLHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            document.querySelector('#display-joke').innerHTML = data.value;
        }
    }
    xMLHttpRequest.send();
})

// handle this end point with promises

// btn.addEventListener('click', () => {
//     fetch(url)
//         .then((res) => res.json()).then((data) => {
//             document.querySelector('#display-joke').innerHTML = data.value
//         })
// })


