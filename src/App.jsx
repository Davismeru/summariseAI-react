import React from 'react'
import Hero from './components/Hero'
import Demo from './components/Demo'

function App() {
  return (
    <main className='bg-gradient-to-r from-gray-50 via-yellow-50 to-gray-50 md:min-h-full lg:mx-64'>
      <Hero/>
      <Demo/>
    </main>
  )
}

export default App