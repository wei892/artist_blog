const body = document.getElementsByTagName("BODY")[0];

const header = document.querySelector('header');

const headerContainer = document.createElement('div');
headerContainer.className ='header-container';

const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

const wordContainer = document.createElement('div');
wordContainer.className = 'word-container'

const headerTitle = document.createElement('div');
headerTitle.innerHTML = `Artist's Blog`;
headerTitle.className = 'header-title'

const headerSub = document.createElement('div');
headerSub.innerHTML = 'mimi\'s memory';
headerSub.className ='header-sub'

wordContainer.appendChild(headerTitle);
wordContainer.appendChild(headerSub);

// const headerButton = document.querySelector('home')
// headerButton.addEventListener('click', function handleClick(event) {
//   window.location = '/'
// })

// body.appendChild(headerButton)
const heart = document.createElement('div');
heart.className = 'heart';
headerContainer.appendChild(heart);
headerContainer.appendChild(wordContainer);
header.appendChild(headerContainer);

