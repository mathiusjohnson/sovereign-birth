import { Services, About } from '../components'
import ContactPage from '../pages/Contact'
import HomePage from '../components/Home/index.js'
import SingleServicePage from '../components/Services/SingleServicePage'
import Login from '../components/session/Login';
import AddNumber from '../components/phonebook/AddNumber'
// import ListAllNumbers from '../components/phonebook/ListAllNumbers'

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
  {
    path: '/login',
    component: Login,
    isPrivate: false,
  },
  {
    path: '/AddNumber',
    component: AddNumber,
    isPrivate: false,
  },
  // {
  //   path: '/ListAllNumbers',
  //   component: ListAllNumbers,
  //   isPrivate: false,
  // }
];

export default routes;
