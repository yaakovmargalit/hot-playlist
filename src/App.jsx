import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';



function App() {
  return (
    <Router>
      <div className="App">
        <main className=''>
          {/* <Switch>
            <Route component={HomePage} path={'/'} />
          </Switch> */}
          <HomePage/>
        </main>
      </div>
    </Router>
  );
}

export default App;
