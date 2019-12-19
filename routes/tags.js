const express = require('express');
const router = express.Router({ mergeParams: true });
const fakeTags = require('../data/tags');
const fakePosts = require('../data/posts');

router.get('/', (req, res) => {
	res.json(fakeTags);
});

router.get('/:tagsId/posts', (req, res) => {
  const tagsId = Number(req.params.tagsId);
  const foundPosts = fakePosts.filter((post) => post.tag_ids == tagsId);
  if (foundPosts.length == 0) {
		return res.status(404).json({
			error: 'Posts not found',
		});
	}
	res.json(foundPosts);
});

module.exports = router 