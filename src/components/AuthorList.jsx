import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { queryAuthors } from '../graphql/queries'

function AuthorList() {
  const { loading, error, data } = useQuery(queryAuthors);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.authors.map(({id, name}) => (
    <div className="ui segment" key={id}>
      <Link to={`/author/${id}`}>
        {name}
      </Link>
    </div>
  ))
}

export default AuthorList;
