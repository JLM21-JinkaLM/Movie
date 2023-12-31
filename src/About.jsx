import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function About({ findX }) {

  let [backData, setBackData] = useState([])
  let idNumber = findX.id
  let imageUrl = `https://api.themoviedb.org/3/movie/${idNumber}?api_key=9b48421e56beff9d0381692f8b0ee7d7&language=en-US`

  let images = 'https://image.tmdb.org/t/p/original'


  useEffect(() => {
    fetch(imageUrl).then((item) => {
      return item.json()
    }).then((item) => {
      console.log(item)
      setBackData([images + item.backdrop_path, images + item.poster_path,item.budget,item.status,item.tagline,item.vote_average,item.production_companies,item.production_countries
      ])
    })

  }, [])
  let { id, original_title, overview, original_language, release_date
  } = findX

  return (
    <div>
      <div style={{ textAlign: 'center' }}>

        <Link to='/'>
          <button className='btn btn-primary' >Go Back To HomePae
          </button>
        </Link>
      </div>


      <div className='m-5'>
        <div class="container">
          <div class="container-wrap">
            <div class="row">
              <div class="col-12 my-3">
                <h3>Release-Date : {release_date}</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-xs-12">
                <img src={backData[0]} style={{ width: '75%', height: '100%' }} />
              </div>
              <div class="col-md-6 col-xs-12 text-center">
                <h4 className='text-primary'>{original_title}</h4>
                <p>{overview}</p>
                <h5>Original Language : {original_language}</h5>
              </div>
            </div>
          </div>
          <div class="container-wrap">
            <div class="row my-5">
              <div class="col-md-6 col-xs-12">
                <img src={backData[1]} style={{ width: '75%', height: '70%' }} />
              </div>
              <div class="col-md-6 col-xs-12 text-center">
                <h4 className='text-primary'>Tag-Line : <i> {backData[4]}</i></h4>
                <h5>Budget : {backData[2]}</h5>
                <h5>Status : {backData[3]}</h5>
                 <h5>Rating : {backData[5]}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>




    </div >
  )
}

export default About