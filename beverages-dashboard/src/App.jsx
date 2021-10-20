import './styles/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateLayout from './layouts/PrivateLayout';
import Admin from './pages/admin/Index';
import Orders from './pages/admin/Orders';
import Products from './pages/admin/Products';
import Users from './pages/admin/Users';
import Login from './pages/Login';

function App() {
  return (
          <Router>
            <Switch>
              <Route path={['/admin' ,'/admin/Orders' , '/admin/Products', '/admin/Users']}>
                <PrivateLayout>
                <Switch>
                  <Route path='/admin/Orders'>
                    <Orders />
                  </Route>
                  <Route path='/admin/Products'>
                    <Products />
                  </Route>
                  <Route path='/admin/Users'>
                    <Users />
                  </Route>
                  <Route path='/admin'>
                    <Admin />
                  </Route>
                </Switch>
                </PrivateLayout>
              </Route>
              <Route path={['/Login' ]}>
                <Switch>
                  <Route path='/Login'>
                    <Login />
                  </Route>
                </Switch>
              </Route>
              <Route path={['/']}>
                <Route path='/'>
                  <Login />
                </Route>
              </Route>
            </Switch>
          </Router>
  );
}

export default App;
