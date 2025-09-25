import React from 'react'
import Trendingcard from './Trendingcard'


const Main = () => {
  return (
    <div className='h-[88vh] w-[64%] rounded-lg bg-[#121212] text-white'>

      <div className="trending-songs">
        <h1>Trending songs</h1>
        < Trendingcard />

      </div>

      
    </div>
  )
}

export default Main
