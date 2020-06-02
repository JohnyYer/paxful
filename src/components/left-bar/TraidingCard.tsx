import React, { useEffect } from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Avatar,
} from '@material-ui/core';
import avatar from '../../assets/avatar.png';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Trade } from '../../store/trades/types';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { allTrades, selectedTrade } from '../../store/selectors';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    cursor: 'pointer',
    '&:hover': {
      background: fade(palette.primary.main, 0.2),
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 0,
  },
  dot: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(3)',
    color: palette.text.disabled,
  },
  title: {
    fontSize: 18,
    marginLeft: 3,
  },
  pos: {
    marginBottom: 12,
  },
  success: {
    color: palette.success.main,
  },
  bold: {
    fontWeight: 'bold',
  },
  selected: {
    '&:hover': {
      backgroundColor: fade(palette.primary.main, 0.2),
    },
    backgroundColor: fade(palette.primary.main, 0.2),
    border: '2px solid',
    borderColor: palette.primary.main,
  },
  status: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: 42,
  },
}));

interface TraidingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  tradeInfo: Trade;
}

const TraidingCard: React.FC<TraidingCardProps> = ({ selected, tradeInfo }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card
      className={`${classes.root} ${selected && classes.selected}`}
      variant="outlined"
      onClick={() => {
        history.push(`/${tradeInfo.id}`);
      }}
    >
      <CardContent className={classes.content}>
        <div>
          <span className={classes.dot}>•</span>
        </div>
        <div>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {tradeInfo.buyerName}{' '}
            <span className={classes.bold}>is byuing</span>
          </Typography>
          <Typography variant="h5" component="h2">
            {tradeInfo.paymentMethod}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {tradeInfo.amount}
          </Typography>
        </div>
        <div className={classes.status}>
          <Avatar alt="Remy Sharp" src={avatar} />
          {tradeInfo.isPaid ? (
            <Typography variant="h6" className={classes.success}>
              PAID
            </Typography>
          ) : (
            <Typography variant="h6" color="textSecondary">
              NOT PAID
            </Typography>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TraidingCard;
