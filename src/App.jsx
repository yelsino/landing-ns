import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {

  return (
    <div className="App">
   
      <Router>
      <div style={{
        padding:'50px'
      }}>
          <Link to="/">PAGINA 1</Link>
          <Link to="/pagina2">PAGINA 2</Link>
      </div>
        <Routes>
            <Route path='/' 
              element={<p>PAGINA 1</p>}
            />
            <Route path='/pagina2' 
              element={<p>PAGINA 2</p>}
            />
           
        </Routes>
      </Router>
    </div>
  )
}

export default App
