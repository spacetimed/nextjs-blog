export function getPostsJson() {
    const posts = [
        {
            'id': '0',
            'title': 'My first post!',
            'author' : 'lambda',
            'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            'id': '1',
            'title': 'My second post!',
            'author' : 'lambda',
            'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl. Pharetra sit amet aliquam id. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Ut eu sem integer vitae justo eget magna fermentum. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Senectus et netus et malesuada. Odio Dui sapien eget mi proin sed. Convallis a cras semper auctor neque.'
        }
    ]
    return (posts);
}

export function getFrontFeed() {
    const frontFeedPosts = getPostsJson();
    const maxContentSize = 120;
    return frontFeedPosts.map( ({id, title, author, content}) => {
        return {
            id: id,
            title: title,
            author: author,
            content: content.substring(0, maxContentSize) + "...",
        }
    });
}

export function getAllPostParams() {
    const allPosts = getPostsJson();
    return allPosts.map(({ id, title }) => {
        return {
            params: {
                id: id,
            },
        };
    });
}

export function getPostData() {
    return("Some title.");
}