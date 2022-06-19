import {gql} from '@apollo/client'
const addSinglePost = gql`
	mutation addSinglePostMutation(
		$name: String
        $content: String
		$genre: String
		$authorId: ID!
	) {
		createPost(name: $name,content: $content, genre: $genre, authorId: $authorId) {
			id
			name
		}
	}
`

const addSingleAuthor = gql`
	mutation addSingleAuthorMutation($name: String, $age: Int) {
		createAuthor(name: $name, age: $age) {
			id
			name
		}
	}
`

export { addSinglePost, addSingleAuthor }
