import React, { useEffect, useReducer, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'
import About from './About'

let intialState = {
  data: [],
  loading: false,
  error: ''
}

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true }

    case "DATA_FETCHED":
      return { ...state, data: action.payload, loading: false }


    case "ERROR":
      return { ...state, error: action.payload, loading: false }

    default:
      return state
  }
}


function App() {
  let [state, dispatch] = useReducer(reducer, intialState)
  let [findX, setFindX] = useState([])
  let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=9b48421e56beff9d0381692f8b0ee7d7&language=en-US&page=1"

  // let imageUrl='https://api.themoviedb.org/3/movie/{movie_id}?api_key=9b48421e56beff9d0381692f8b0ee7d7&language=en-US'

  useEffect(() => {
    fetchData()
  }, [])



  function fetchData() {
    dispatch({ type: "LOADING" })
    fetch(url).then((item) => {
      return item.json()
    }).then((item) => {
      dispatch({ type: "DATA_FETCHED", payload: item.results })
    }).catch((err) => {
      dispatch({ type: "ERROR", payload: err })
    })
  }

  function moviePage(id) {
    setFindX((prev) => {
      return state.data.find((item) => {
        return item.id === id
      })
    })
  }

  return (
    <div className='m-3'>
      <div>
        <h1 style={{ color: 'rebeccapurple', textAlign: 'center' }}>Movie App</h1>
        <hr></hr>
      </div>

      <Routes>
        <Route path='/' element={<Home state={state} moviePage={moviePage}></Home>}></Route>
        <Route path='/about' element={<About findX={findX}></About>}></Route>
      </Routes>

      <div>
        <div>
          <Footer></Footer>
        </div>
      </div>

    </div>
  )
}

export default App