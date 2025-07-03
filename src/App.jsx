import { HashRouter  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Router from './routes/router';
import About from './components/About';
import Projects from './components/projects';
import Contact from './components/Contact';

function App() {
  return (
    <HashRouter >
      <div className="min-h-screen flex-col">
        <Navbar />
        <Router />
      </div>
    </HashRouter >
  );
}

export default App;