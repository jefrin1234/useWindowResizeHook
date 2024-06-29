import React from 'react'
import useWindowResize from '.'

function UseWindowResizeTest() {
  
  const windowSize = useWindowResize()
  const {width , height} = windowSize

  return (
    <div>
      <h1>use window resize hook</h1>
      <p>
        width is {width}
      </p>
      <p>
        height is {height}
      </p>
    </div>
  )
}

export default UseWindowResizeTest
