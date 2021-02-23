import { Home, Services, About } from '../components'
import ContactPage from '../pages/Contact'
import HomePage from '../pages/Home'


const routes = [
  {
    path: '/home',
    component: HomePage,
    isPrivate: false,
  },
  {
    path: '/services',
    component: Services,
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
];

export default routes;
