import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { QUERY_AUTHORS } from '../graphql/queries'
import AuthorList from '../components/AuthorList'

function AuthorSummary() {
  const { loading, error, data } = useQuery(QUERY_AUTHORS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="ui container">
      <div>
        <h3 className="ui center aligned header">Author List</h3>
      </div>
      <div className="ui segments">
        <AuthorList authors={data.authors} />
      </div>
      <div>
        <Link to="/author/new">
          <button className="ui right floated primary button">
            <i className="icon user"></i>
            Add New Author
          </button>
        </Link>
      </div>
    </div>
  )
}

export default AuthorSummary;
