const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
	name: {
		type: String
	},
	content: {
		type: String
	},
    genre:{
        type: String
    },
	authorId: {
		type: String
	}
})

module.exports = mongoose.model('posts', PostSchema)
