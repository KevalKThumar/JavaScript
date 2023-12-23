const url = 'https://api.thecatapi.com/v1/images/search';
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');


function getRandomCat() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data[0].url);
            const img = document.createElement('img')
            img.src = data[0].url
            container.appendChild(img)
        })
}


btn.addEventListener('click',()=>{
    if(container.children.length > 0){
        container.children[0].remove()
    }
    getRandomCat()
})