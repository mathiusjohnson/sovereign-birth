import ServicesPage from '../pages/Services'
import AboutPage from '../pages/About'
import ContactPage from '../pages/Contact'
import HomePage from '../pages/Home.js'
import FreeBirthOffering from '../components/FreeBirthOffering'
import Login from '../components/session/Login';

const routes = [
  {
    path: '/home',
    component: HomePage,
    isPrivate: false,
  },
  {
    path: '/offerings',
    component: ServicesPage,
    isPrivate: false,
  },
  {
    path: '/offering/:id',
    component: FreeBirthOffering,
    isPrivate: false,
  },
  {
    path: '/about',
    component: AboutPage,
    isPrivate: false,
  },
  {
    path: '/contact',
    component: ContactPage,
    isPrivate: false,
  },
  {
    path: '/login',
    component: Login,
    isPrivate: false,
  }
];

export default routes;
