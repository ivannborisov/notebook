let posts = require('../mock-data/posts').posts;


function generateID () {
    return Math.floor((Math.random() * 100000000) + 1);
};

function getPosts (req, res) {
   return res.status(200).json(posts);
}

function createPost (req, res) {
    let post = req.body;
    post.id = generateID();
    post.created = new Date();
    post.comments = [];
    posts.push(post);
    return res.status(200).json(post);
}

function deletePost (req, res) {
    let postId = req.params.id;
    let postIndex = posts.findIndex(el => { return el.id == postId});
    if (postIndex) {
        posts.splice(postIndex, 1);
        return res.status(200).json({success: true});
    }
    else 
        return res.status(404).json({success:false, message: 'Post not found.'});
}

function getPost (req, res) {
    let postId = req.params.id;

    let post = posts.find(el => { return el.id == postId});
    if (post) {
        return res.status(200).json(post);
    }
    else 
        return res.status(404).json({success:false, message: 'Post not found.'});
    
}

module.exports.getPosts = getPosts;
module.exports.getPost = getPost;
module.exports.deletePost = deletePost;
module.exports.createPost = createPost;
