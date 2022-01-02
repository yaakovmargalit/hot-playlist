import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ImageContainer } from './pages/ImageContainer';


function App() {
  return (
    <Router>
      <div className="App">
        <main className=''>
          <Switch>
            <Route component={ImageContainer} path={'/player'}/>
            <Route component={HomePage} path={'/'} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
