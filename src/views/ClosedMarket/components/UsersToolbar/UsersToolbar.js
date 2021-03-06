import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { CardHeader,Button,Divider } from '@material-ui/core';

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
       title="Mercado Fechado"
        subheader="Encerramento Sexta feira as 19:00"
      />
      <Divider />
        <span className={classes.spacer} />
        <Button
          color="primary"
          variant="contained"
        >
          Exportar
        </Button>
      </div>
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string
};

export default UsersToolbar;
