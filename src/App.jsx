import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Router from './routes/Router';
import About from './components/About';
import Projects from './components/projects';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex-col">
        <Navbar />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;