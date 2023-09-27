var express = require("express");
var router = express.Router();

var data = require("../data.json");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(data.posts);
});

router.get("/:id", (req, res) => {
  const postId = parseInt(req.params.id);

  const post = data.posts.find((post) => post.id === postId);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.json(post);
});

router.get("/:id/comments", (req, res) => {
  const postId = parseInt(req.params.id);

  const post = data.posts.find((post) => post.id === postId);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  const postComments = data.comments.filter(
    (comment) => comment.postId === postId
  );

  res.json(postComments);
});

module.exports = router;
