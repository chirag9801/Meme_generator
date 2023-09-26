const generateMemeBtn = document.querySelector('.meme-generate .generate-meme-button')
const memeImg = document.querySelector('.meme-generate img')
const memeTitle = document.querySelector('.meme-generate .meme-title')
const memeAuthor = document.querySelector('.meme-generate .meme-author')


const updateDetails = function (url, title, author) {
    memeImg.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme = function () {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            updateDetails(data.url, data.title, data.author);
        });
};

generateMeme();


generateMemeBtn.addEventListener('click', generateMeme);
