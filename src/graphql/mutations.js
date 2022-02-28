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

export const MUTATION_ADDBOOK = gql`
  mutation AddBook($book: BookInput) {
    addBook(book: $book) {
      id
    }
  }
`;

export const MUTATION_DELETEBOOK = gql`
  mutation DeleteBook($id: ID) {
    deleteBook(id: $id)
  }
`;