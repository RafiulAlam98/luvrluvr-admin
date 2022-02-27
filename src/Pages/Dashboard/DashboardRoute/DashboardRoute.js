import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Users from '../../Users/Users/Users';
import Transactions from '../../Transactions/Transactions/Transactions';
import Subscription from './../../Subscriptions/Subscription/Subscription';


const DashboardRoute = () => {
     let { path } = useRouteMatch();
     return (
          <>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                         <Switch>
                              <Route exact path="/dashboard">
                                   <Users></Users>
                              </Route>
                              <Route exact path={`${path}/transaction`}>
                                   <Transactions></Transactions>
                              </Route>
                              <Route exact path={`${path}/subscription`}>
                                  <Subscription></Subscription>
                              </Route>
                         </Switch>
                    </Grid>
               </Grid> 
          </>
     );
};

export default DashboardRoute;