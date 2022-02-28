import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { useMutation, useApolloClient } from '@apollo/client'
import { MUTATION_DELETEBOOK } from '../graphql/mutations'

function BookList(props) {
  const [deleteBook, { loading, error, data }] = useMutation(MUTATION_DELETEBOOK);
  const client = useApolloClient();

  async function handleDeleteBook(id) {
    await deleteBook({
      variables: {
        id
      }
    });

    await client.refetchQueries({
      include: ["Author"]
    });
  }

  return (
    props.books.map(({id, title}) => (
      <div className="ui segment" key={id}>
        {title}
        <Button floated='right' labelPosition='left' onClick={() => handleDeleteBook(id)}>
          <Icon name="trash"></Icon>
          Delete
        </Button>
      </div>
    ))
  );
}

export default BookList;