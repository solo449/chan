'use strict';

const { remove } = require('fs-extra')
	, uploadDirectory = require(__dirname+'/uploadDirectory.js')

module.exports = (files) => {

	//delete all the files and thumbs
	return Promise.all(files.map(async file => {
		return Promise.all([
			remove(`${uploadDirectory}/img/${file.filename}`),
			file.hasThumb ? remove(`${uploadDirectory}/img/thumb-${file.hash}${file.thumbextension}`) : void 0,
		]).catch(e => console.error);
	}));

}
