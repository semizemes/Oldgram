const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const container = document.getElementById("container");

function createPosts(arr) {
  for (let i = 0; i < arr.length; i++) {
    container.innerHTML += `
        <article>
                <img class="post-avatar" src="${arr[i].avatar}" >
                <h1>${arr[i].name}</h1>
                <p class="post-location">${arr[i].location}</p>
                <img class="post-img" src="${arr[i].post}">
                <img class="action-img icon-heart" src="images/icon-heart.png" >
                <img class="action-img icon-comment" src="images/icon-comment.png" >
                <img class="action-img icon-dm" src="images/icon-dm.png" >
                <h2>${arr[i].likes} likes</h2>
                
                <p class="comment-text"><span class="comment-username">${arr[i].username} </span>${arr[i].comment}</p>
            </article>`;
  }
}

createPosts(posts);