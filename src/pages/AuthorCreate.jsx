import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import { useMutation, useApolloClient } from '@apollo/client'
import { MUTATION_ADDAUTHOR } from '../graphql/mutations'

function AuthorCreate() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [addAuthor, { data, loading, error }] = useMutation(MUTATION_ADDAUTHOR);
  const navigate = useNavigate();
  const client = useApolloClient();

  async function handleSubmit(e) {
    e.preventDefault();

    await addAuthor({
      variables: {
        author: {
          name,
          age
        }
      }
    });

    await client.refetchQueries({
      include: ["Authors"]
    })

    navigate("/");
  }

  return (
    <div>
      <h3 className="ui center aligned header">New Author</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name' defaultValue={name} onChange={(event) => setName(event.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input type="number" defaultValue={age} onChange={(event) => setAge(parseInt(event.target.value))} />
        </Form.Field>
        <Link to="/">
          <button className="ui button">
            Back
          </button>
        </Link>
        <Button className='right floated primary' type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default AuthorCreate;
