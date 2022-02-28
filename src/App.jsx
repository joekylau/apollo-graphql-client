import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import AuthorSummary from './pages/AuthorSummary'
import AuthorDetail from './pages/AuthorDetail'
import AuthorCreate from './pages/AuthorCreate'
import BookCreate from './pages/BookCreate'

function App() {
  return (
    <div className="ui container">
      <h1 className="ui center aligned header" style={ { marginTop: "3em"} }>
        Welcome to GraphQL Book Store
      </h1>
      <Routes>
        <Route path="/" element={<AuthorSummary />}></Route>
        <Route path='/author/:id' element={<AuthorDetail />}></Route>
        <Route path='/author/new' element={<AuthorCreate />}></Route>
        <Route path='/author/:id/new' element={<BookCreate />}></Route>
      </Routes>
    </div>
  )
}

export default App
