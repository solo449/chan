'use strict';

const Posts = require(__dirname+'/../../db-models/posts.js');

module.exports = async (req, res, next) => {

	let posts;
	try {
		posts = await Posts.getReports(req.params.board);
	} catch (err) {
		return next(err)
	}

	//render the page
	res.render('manage', {
		csrf: req.csrfToken(),
		posts: posts
	});

}
