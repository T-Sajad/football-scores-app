import { useState } from 'react'
import './App.css'
import fixturedata from '../data/get-fixtures-en.json'
console.log(fixturedata)

function App() {
  return (
    <div>
        <div>
          <h1>premier league</h1>
          <pre>{JSON.stringify(fixturedata, null, 2)}</pre>
        </div>
  </div>
  )
}

export default App
