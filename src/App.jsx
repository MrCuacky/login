import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFirebaseApp } from 'reactfire'
import Auth from './Auth'

function App() {
    const firebase=useFirebaseApp();
    console.log(firebase);

  return (
    <div className="App">
      <Auth />

    </div>
  )
}

export default App
