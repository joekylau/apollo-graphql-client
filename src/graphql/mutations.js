import { gql } from '@apollo/client'

export const MUTATION_ADDAUTHOR = gql`
  mutation AddAuthor($author: AuthorInput) {
    addAuthor(author: $author) {
      id
    }
  }
`;

export const MUTATION_DELETEAUTHOR = gql`
  mutation DeleteAuthor($id: ID) {
    deleteAuthor(id: $id)
  }
`;