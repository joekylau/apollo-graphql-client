import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { QUERY_AUTHOR } from '../graphql/queries'
import BookList from '../components/BookList'

function AuthorDetail() {
  const params = useParams();
  const { loading, error, data } = useQuery(QUERY_AUTHOR, {
    variables: {
      id: params.id
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h3 className="ui center aligned header">{data.author.name}</h3>
      <div className="ui segments">
        <BookList books={data.author.books} />
      </div>
      <Link to="/">
        <button className="ui button">
          Back
        </button>
      </Link>
      <Link to={`/author/${params.id}/new`}>
        <button className="ui right floated primary button">
          <i className='icon book'></i>
          Add New Book
        </button>
      </Link>
    </div>
  )
}

export default AuthorDetail;
