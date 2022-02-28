import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'
import { useMutation, useApolloClient } from '@apollo/client'
import { MUTATION_DELETEAUTHOR } from '../graphql/mutations'

function AuthorList(props) {
  const [deleteAuthor, { loading, error, data }] = useMutation(MUTATION_DELETEAUTHOR);
  const client = useApolloClient();

  async function handleDeleteAuthor(id) {
    await deleteAuthor({
      variables: {
        id
      }
    });

    await client.refetchQueries({
      include: ["Authors"]
    });
  }

  return props.authors.map(({id, name}) => (
    <div className="ui segment" key={id}>
      <Link to={`/author/${id}`}>
        {name}
      </Link>
      <Button floated='right' labelPosition='left' onClick={() => handleDeleteAuthor(id)}>
        <Icon name="trash"></Icon>
        Delete
      </Button>
    </div>
  ))
}

export default AuthorList;
