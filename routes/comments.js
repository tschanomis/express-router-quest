const express = require('express');
const router = express.Router({ mergeParams: true });
const fakeComments = require('../data/comments');

router.get('/', (req, res) => {
	const postId = Number(req.params.postId);
	const postComments = fakeComments.filter((comment) => comment.post_id === postId);
	if (postComments.length == 0) {
		return res.status(404).json({
			error: 'Posts not found',
		});
	}
	res.json(postComments);
});

module.exports = router