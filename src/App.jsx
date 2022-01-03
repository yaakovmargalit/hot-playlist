import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';



function App() {
  return (
    <Router>
      <div className="App">
        <main className=''>
          <HomePage/>
        </main>
      </div>
    </Router>
  );
}

export default App;
