import { Home, Services, About, Contact } from '../components'

const routes = [
  {
    path: '/Home',
    component: Home,
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
    component: Contact,
    isPrivate: false,
  },
];

export default routes;
