import { Services, About } from '../components'
import ContactPage from '../pages/Contact'
import HomePage from '../components/Home/index.js'
import SingleServicePage from '../components/Services/SingleServicePage'
import Login from '../components/session/Login';

const routes = [
  {
    path: '/home',
    component: HomePage,
    isPrivate: false,
  },
  {
    path: '/offerings',
    component: Services,
    isPrivate: false,
  },
  {
    path: '/service/:id',
    component: SingleServicePage,
    isPrivate: false,
  },
  {
    path: '/about/',
    component: About,
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
