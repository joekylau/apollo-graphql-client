import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import { useMutation, useApolloClient } from '@apollo/client'
import { MUTATION_ADDBOOK } from '../graphql/mutations'

function BookCreate() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [addBook, { data, loading, error }] = useMutation(MUTATION_ADDBOOK);
  const navigate = useNavigate();
  const params = useParams();
  const client = useApolloClient();

  async function handleSubmit(e) {
    e.preventDefault();

    await addBook({
      variables: {
        book: {
          title,
          price,
          authorId: params.id
        }
      }
    });

    await client.refetchQueries({
      include: ["Author"]
    })

    navigate(`/author/${params.id}`);
  }

  return (
    <div>
      <h3 className="ui center aligned header">New Book</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Title</label>
          <input placeholder='Title' defaultValue={title} onChange={(event) => setTitle(event.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <input type="number" defaultValue={price} onChange={(event) => setPrice(parseInt(event.target.value))} />
        </Form.Field>
        <Link to={`/author/${params.id}`}>
          <button className="ui button">
            Back
          </button>
        </Link>
        <Button className='right floated primary' type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default BookCreate;
