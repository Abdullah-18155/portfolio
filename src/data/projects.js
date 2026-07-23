import taskflow from '../assets/projects-screenshots/taskflow.png';
import skycast from '../assets/projects-screenshots/skycast.png';
import netflix from '../assets/projects-screenshots/netflix.png';
import ecommerece from '../assets/projects-screenshots/e-commerece.png';

export const projects = [
  {
    name: 'TaskFlow',
    tag: 'Productivity',
    description:
      'A modern to‑do list application for organizing daily tasks — add, complete, filter, and track work with a distraction‑free interface.',
    tech: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Local Storage'],
    github: 'https://github.com/Abdullah-18155/TaskFlow-----To-Do-List-App',
    demo: 'https://task-flow-to-do-list-app.vercel.app/',
    theme: {
      from: '#3355FF',
      to: '#7C8CFF',
    },
    image: taskflow,
  },
  {
    name: 'SkyCast',
    tag: 'Weather',
    description:
      'A weather forecast application that fetches live conditions by city — current temperature, forecast details, and a clean, glanceable layout.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'REST API'],
    github: 'https://github.com/Abdullah-18155/SkyCast---Weather-App',
    demo: 'https://sky-cast-weather-app-made-by-abdull.vercel.app/',
    theme: {
      from: '#0EA5C0',
      to: '#3355FF',
    },
    image: skycast,
  },
  {
    name: 'Netflix Clone',
    tag: 'Landing Page',
    description:
      'A pixel‑conscious recreation of the Netflix landing experience — hero banner, content rows, and responsive layout built from scratch.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/Abdullah-18155/Netflix-Clone-Landing-Page',
    demo: 'https://netflix-clone-landing-page-rho.vercel.app/',
    theme: {
      from: '#E50914',
      to: '#0B0F19',
    },
    image: netflix,
  },
  {
    name: 'ShopSphere',
    tag: 'E‑commerce',
    description:
      'A multi‑page e‑commerce frontend with product listings, cart interactions, and routed pages — built with reusable, component‑driven architecture.',
    tech: ['React', 'Vite', 'React Router', 'Context API', 'Tailwind CSS'],
    github: 'https://github.com/Abdullah-18155/ShopSphere---React-E-Commerce-Frontend',
    demo: 'https://shop-sphere-react-e-commerce-fronte.vercel.app/',
    theme: {
      from: '#00C896',
      to: '#3355FF',
    },
    image: ecommerece,
  },
]
