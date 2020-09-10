import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'app/shared/auth/private-route';
import { AUTHORITIES } from 'app/config/constants';
import Dataset1 from './Dataset1';
import Dataset2 from './Dataset2';

 // eslint - disable - next - line @typescript-eslint / no - unused - vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

const Routes = ({ match }) => (
  <div>
    <Switch>
      <PrivateRoute path='/upload/dataset1' component={Dataset1} hasAnyAuthorities={[AUTHORITIES.ADMIN]} />
      <PrivateRoute path='/upload/dataset2' component={Dataset2} hasAnyAuthorities={[AUTHORITIES.ADMIN]} />
 </Switch>
  </div>
);

export default Routes;
