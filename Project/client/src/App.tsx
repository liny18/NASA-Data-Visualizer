import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout/Layout'
import { Dashboard } from './Pages/Dashboard'
import { About } from './Pages/About'
import './App.css'

function App() {
  return (
    <div className="App overflow-x-hidden scroll-smooth bg-gray-50">
      <Layout>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/about' element={<About />} />
            <Route path='/help' element={<div>Help</div>} />
          </Routes>
      </Layout>
    </div>
  )
}

export default App
