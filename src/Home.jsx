import React from 'react'
import Spinner from './Spinner'
import {Link } from 'react-router-dom'



function Home({ state,moviePage }) {
  let { data, loading, error } = state
  return (
    <div>
      <div className="row d-flex justify-content-evenly m-5">
        {loading && <div> <Spinner /> </div>}
        {!loading && error && <h1>somthing wrong...</h1>}
        {data.length > 0 && data.map((item, i) => {
          let { id, original_title, overview } = item
          return (
            <>
              <div className="col-md-4" key={id}>
                <div className="card my-3" key={i}>
                  <div className="card-header">
                    <h4 className='text-primary'>{original_title}</h4>
                  </div>
                  <div className="card-body">
                    <div>
                      <p>{overview.slice(0, 200) + '...'}</p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <Link to='/about'>
                      <button className='btn btn-primary' onClick={()=>{moviePage(id)}}>Show More...
                      </button>
                    </Link>

                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
     
    </div>
  )
}

export default Home