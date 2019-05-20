let express = require('express');
let router = express.Router();

let postsController = require('../controllers/posts-controller');
/* GET home page. */

router.get('/posts', postsController.getPosts);

module.exports = router;
