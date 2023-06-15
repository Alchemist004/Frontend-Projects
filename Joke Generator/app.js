let btn = document.querySelector('.generate');
let jokep = document.querySelector('.joke');
let url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political&type=single';
let getjoke = () => {
    fetch(url)
        .then(data => data.json())
        .then(item => jokep.textContent = `${item.joke}`);
}

btn.addEventListener('click', getjoke);