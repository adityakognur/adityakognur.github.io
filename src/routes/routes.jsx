import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/projects';
import Contact from '../components/Contact';

export const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/contact',
    element: <Contact />
  }
];