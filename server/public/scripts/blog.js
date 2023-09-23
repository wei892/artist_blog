const renderBlog = async () => {
    const response = await fetch('/blog');
    const data = await response.json();

    const mainConent = document.getElementById('main-content');

    if (data) {
        data.map(post => {
            const card = document.createElement('div');
            card.className = 'card';

            const topContainer = document.createElement('div');
            const bottomContainer = document.createElement('div');

            const postTitle = document.createElement('h3');
            postTitle.innerHTML = post.title;
            bottomContainer.appendChild(postTitle)
            postTitle.className = 'postTitle'

            topContainer.style.backgroundImage = `url(${post.imageURL})`

            const link = document.createElement('a');
            link.textContent = 'Read More >';
            link.setAttribute('role', 'button');
            link.href = `/blog/${post.id}`;
            bottomContainer.appendChild(link);
            link.className = 'link';

            card.appendChild(topContainer);
            card.appendChild(bottomContainer);

            mainConent.appendChild(card);
        })
    }
    else{
        const message = document.createElement('h2');
        message.innerHTML = 'No posts available </3'
    }
}

// renderBlog()
const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
    window.location.href = '../404.html'
  }
  else {
    renderBlog()
  }