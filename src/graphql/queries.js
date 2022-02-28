import { gql } from '@apollo/client'

export const QUERY_AUTHORS = gql`
  query Authors{
    authors {
      id
      name
    }
  }
`;

export const QUERY_AUTHOR = gql`
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
