import { gql } from '@apollo/client'

export const queryAuthors = gql`
  query Authors{
    authors {
      id
      name
    }
  }
`;

export const queryAuthor = gql`
  query Author($id: ID!) {
    author(id: $id) {
      id
      name
      age
      books {
        id
        title
      }
    }
  }
`;
