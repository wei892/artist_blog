const headerButton = document.querySelector('home')
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
})

const renderPost = async () => {

    
    const requestedID = parseInt(window.location.href.split('/').pop());

    const response = await fetch('/blog');
    const data = await response.json();

    let postDisplay = document.getElementById('postDisplay');
    let postContent = data.find(post => post.id === requestedID)

    if (postContent) {
        let postImg = document.getElementById('postImg');
        postImg.src = postContent.imageURL;
        let postTitle = document.getElementById('title');
        postTitle.innerHTML = postContent.title;
        let datePosted = document.getElementById('datePosted');
        datePosted.innerHTML = postContent.datePosted;
        let description = document.getElementById('description');
        description.innerHTML = postContent.description;

        document.title = 'Artist Blog: mimi\'s memory';

    }
    else {
        const message = document.createElement('h2');
        message.innerHTML = 'No data available </3';

        postDisplay.appendChild(message);
    }
}

renderPost();