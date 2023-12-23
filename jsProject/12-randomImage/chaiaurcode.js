const baseURL = 'https://source.unsplash.com/all/400x400';

// this url gives an image. Use this and NO API calls

const content = document.querySelector('.content');


function getRandomImage() {
    const img = document.createElement('img')
    img.src = baseURL
    content.appendChild(img)
}

(() => {
    getRandomImage()
})();




