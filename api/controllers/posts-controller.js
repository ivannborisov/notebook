let posts = [
    { id: 11, title: 'Kude se namira', created: new Date(), from: 'ivan@abv.bg' },
    { id: 12, title: 'Narco 2' },
    { id: 13, title: 'Bombasto' },
    { id: 14, title: 'Celeritas' },
    { id: 15, title: 'Magneta' },
    { id: 16, title: 'RubberMan' },
    { id: 17, title: 'Dynama' },
    { id: 18, title: 'Dr IQ' },
    { id: 19, title: 'Magma' },
    { id: 20, title: 'Tornado' }
];


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
    posts.push(post);
    return res.status(200).json({success: true});
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
