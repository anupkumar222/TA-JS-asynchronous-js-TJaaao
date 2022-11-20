const url = `https://api.unsplash.com/photos/?client_id=_vTCAzNMbDBy8voHYD6f4Y0PZDOTKlb6-SEmHhOnaS4`;

const getSearchUrl = (query) => `https://api.unsplash.com/search/collections?query=${query}&client_id=_vTCAzNMbDBy8voHYD6f4Y0PZDOTKlb6-SEmHhOnaS4`;
// console.log(getSearchUrl);
const root = document.querySelector('.images');
const searchElm = document.querySelector('input');

function fetch(url, successHandler) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => successHandler(JSON.parse(xhr.response));
    xhr.onerror = function() {
        console.error('Somthing went wrong!');
    };
    xhr.send();
}

function displayImages(images) {
        root.innerHTML = '';
        images.forEach(image => {                                                                            
            let li = document.createElement('li');
            let img = document.createElement('img');
            img.src = image.urls.thumb;
            li.append(img);
            root.append(li);
        })
    
}

fetch(url, displayImages)

function handleSearch(event) {
    if(event.keyCode === 13 && searchElm.value) {
        fetch(getSearchUrl(searchElm.value), (searchResult) => {
            displayImages(searchResult.results);
        })
    }
}

searchElm.addEventListener('keyup', handleSearch)