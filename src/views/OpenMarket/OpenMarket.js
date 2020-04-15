import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {Redirect } from "react-router-dom";
import { isAuthenticated} from "../../services/auth";
import { UsersToolbar, UsersTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const OpenMarket = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    isAuthenticated() ?(
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>
        <UsersTable users={users} />
      </div>
    </div>
  ): <Redirect to={{ pathname: "/", state: { from: "" } }} />
  );
};

export default OpenMarket;
