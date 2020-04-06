import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { CardHeader,Divider,Button } from '@material-ui/core';

import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const UsersToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
      <CardHeader
       title="Mercado Aberto"
        subheader="Abertura segunda feira as 09:00"
      />
      <Divider />
        <span className={classes.spacer} />
        <Button
          color="primary"
          variant="contained"
        >
          Add Carteira
        </Button>
      </div>
      <div className={classes.row}>
      
        <SearchInput
          className={classes.searchInput}
          placeholder="Pesquisar"
        />
      </div>
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string
};

export default UsersToolbar;
