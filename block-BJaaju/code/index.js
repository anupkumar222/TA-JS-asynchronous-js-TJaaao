let input = document.querySelector('input');
let info = document.querySelector('.info');
let image = document.querySelector('.info img');

function fetch(url, successHandler) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => successHandler(JSON.parse(xhr.response));
    xhr.onerror = function() {
        console.error('Somthing went wrong!');
    };
    xhr.send();
}

function handleInput() {
    if(keyCode === 13 && input.value) {
        let value = input.value;

       value = '';
    }
}

input.addEventListener('keydown', handleInput);