var express = require("express");
var router = express.Router();

var data = require("../data.json");

router.get("/:name", (req, res) => {
  const tagName = req.params.name;

  const filteredPosts = data.posts.filter((post) =>
    post.tags.includes(tagName)
  );

  if (filteredPosts.length === 0) {
    return res
      .status(404)
      .json({ error: "Tag not found or no posts with this tag" });
  }

  const responseData = filteredPosts.map((post) => ({
    data: {
      id: post.id,
      title: post.title,
      headline: post.headline,
      body: post.body,
      created_at: post.created_at,
      tags: post.tags,
    },
  }));

  res.json(responseData);
});

module.exports = router;
