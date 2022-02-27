import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'

function AuthorCreate() {
  return (
    <div>
      <h3 className="ui center aligned header">New Author</h3>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name' />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input type="number" />
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
