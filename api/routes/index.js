let express = require('express');
let router = express.Router();

let postsController = require('../controllers/posts-controller');


/* GET home page. */

router.get('/posts', postsController.getPosts);
router.get('/posts/:id', postsController.getPost);
router.post('/posts', postsController.createPost);
router.delete('/posts/:id', postsController.deletePost);

module.exports = router;
