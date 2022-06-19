import { gql } from '@apollo/client'

const getAllPosts = gql`
	query getAllPosts {
        posts {
            id
            name
            content
            genre
            author {
              id
              name
              age
              posts{
                name
              }
            }
          }
	}
`

export {getAllPosts}