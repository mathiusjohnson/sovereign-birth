import { Services, About } from '../components'
import ContactPage from '../pages/Contact'
import HomePage from '../components/Home/index.js'
import SingleServicePage from '../components/Services/SingleServicePage'

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
];

export default routes;
