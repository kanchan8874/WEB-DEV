import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Hello react</h1>
      <button style={{ backgrounColor: 'black', color: 'white', padding: 10 }}>Home Button</button>

      <button className="submit-btn">home button</button>
      <button className="btn">other btn</button>

      <img src="/sicssors.avif" alt="" />
    </div>
  )
}

export default Home;