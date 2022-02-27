import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import GroupIcon from '@mui/icons-material/Group';
import PaidIcon from '@mui/icons-material/Paid';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';


const DashboardLink = () => {
     let {  url } = useRouteMatch();
     return (
          <>
               <List sx={{mt:1}}>
               <Link exact to="/dashboard" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{mr:7, mb: 2 }}>
                         <GroupIcon sx={{mr:1}}></GroupIcon>
                         Users
                    </Button>
               </Link>
               <Link exact to={`${url}/transaction`} style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{mr:1, mb: 2 }}>
                         <PaidIcon sx={{mr:1}}></PaidIcon>
                         Transaction
                    </Button>
               </Link>
               <Link exact to={`${url}/subscription`} style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ mb: 2 }}>
                         <SubscriptionsIcon sx={{mr:1}}></SubscriptionsIcon>
                         Subscription
                    </Button>
               </Link>
               
               
          </List> 
          </>
     );
};

export default DashboardLink;