let input = document.querySelector('input');
let info = document.querySelector('.info');
let userImage = document.querySelector('.info img');
let userName = document.querySelector('.info h3');
let userLogin = document.querySelector('.info p');
let followersUL = document.querySelector('.followers');
let followingUL = document.querySelector('.following');

function fetch(url, successHandler) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => successHandler(JSON.parse(xhr.response));
    xhr.onerror = function() {
        console.error('Somthing went wrong!');
    };
    xhr.send();
}
// function displayFollowers(username) {
//     followersUL.innerHTML = '';
//     fetch(`https://api.github.com/${username}/followers`, function(followersList) {
//         let topFive = followersList.slice(0, 5);

//         topFive.forEach(info => {
//             let li = document.createElement('li');
//             let img = document.createElement('img');
//             img.src = info.avatar_url;
//             img.alt = info.name; 
//             li.append(img);
//             followersUL.append(li);

//         })
//     })
// }

function displayExtrainfo(url, rootElm) {
    rootElm.innerHTML = '';
    fetch(url, function(followersList) {
        let topFive = followersList.slice(0, 5);
        topFive.forEach(info => {
            let li = document.createElement('li');
            let img = document.createElement('img');
            img.src = info.avatar_url;
            img.alt = info.name; 
            li.append(img);
            rootElm.append(li);

        })
    })
}

function handleDispaly(userInfo) {
    userImage.src = userInfo.avatar_url;
    userImage.alt = userInfo.name;
    userName.innerText = userInfo.name;
    userLogin.innerText = userInfo.login;
    displayExtrainfo(`https://api.github.com/users/${userInfo.login}/followers`, followersUL);
    displayExtrainfo(`https://api.github.com/users/${userInfo.login}/following`, followingUL);

}

function handleInput(event) {
    if(event.keyCode === 13 && input.value) {
        let value = input.value;
        const url = 'https://api.github.com/users/';
        let userName = input.value;
        fetch(url + userName, handleDispaly)
        input.value = '';
    }
}

input.addEventListener('keydown', handleInput);


//random cats

let catsImage = document.querySelector(".cats img");
let catsButton = document.querySelector(".cats button");

function handleClick() {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=1&size=full`,
    function(catsInfo) {
        catsImage.src = catsInfo[0].url;
    });
}

catsButton.addEventListener('click', handleClick);