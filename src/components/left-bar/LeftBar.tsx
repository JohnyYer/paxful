import React from 'react';
import TraidingCard from './TraidingCard';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '87vh',
    overflowX: 'auto',
  },
}));

interface LeftBarProps {}

const LeftBar: React.FC<LeftBarProps> = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TraidingCard selected={true} />
      <TraidingCard />
      <TraidingCard />
      <TraidingCard />
    </div>
  );
};

export default LeftBar;
