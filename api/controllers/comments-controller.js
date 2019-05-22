let posts = require('../mock-data/posts').posts;

function generateID () {
    return Math.floor((Math.random() * 100000000) + 1);
};

function pushCommentToPost (comment, postId) { 
    console.log(postId)
    let post = posts.find(el => { return el.id == postId});
    post.comments.push(comment);
    return post;
}

function createComment (req, res) {
    let reqData = req.body;
    console.log(reqData)
    let comment = {
        id: generateID(),
        content: reqData.content,
        from: reqData.from,
        created: new Date()
    };
    pushCommentToPost(comment, reqData.postId); 

    return res.status(200).json(comment);
}


module.exports.createComment = createComment;