import React from 'react'
import { Link } from 'react-router-dom'
import AuthorList from '../components/AuthorList'

function AuthorSummary() {
  return (
    <div className="ui container">
      <div>
        <h3 className="ui center aligned header">Author List</h3>
      </div>
      <div className="ui segments">
        <AuthorList />
      </div>
      <div>
        <Link to="/author/new">
          <button className="ui primary button">
            <i class="icon user"></i>
            Add New Author
          </button>
        </Link>
      </div>
    </div>
  )
}

export default AuthorSummary;
