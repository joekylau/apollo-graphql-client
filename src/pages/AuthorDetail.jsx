import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { queryAuthor } from '../graphql/queries'

function AuthorDetail() {
  const params = useParams();
  const { loading, error, data } = useQuery(queryAuthor, {
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
        {data.author.books.map(({id, title}) => (
          <div className="ui segment" key={id}>
            {title}
          </div>
        ))}
      </div>
      <Link to="/">
        <button className="ui button">
          Back
        </button>
      </Link>
    </div>
  )
}

export default AuthorDetail;
