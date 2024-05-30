document.addEventListener("DOMContentLoaded", function() {
    const posts = [
        {
            title: "My First Blog Post",
            content: "This is the content of my first blog post. It's a great start to my blogging journey!"
        },
        {
            title: "Another Day, Another Post",
            content: "Here's some more content for my blog. I'm getting the hang of this!"
        }
        // Add more blog posts here
    ];

    const postsContainer = document.getElementById("posts");

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.className = "post";

        const postTitle = document.createElement("h2");
        postTitle.textContent = post.title;

        const postContent = document.createElement("p");
        postContent.textContent = post.content;

        postElement.appendChild(postTitle);
        postElement.appendChild(postContent);

        postsContainer.appendChild(postElement);
    });
});
