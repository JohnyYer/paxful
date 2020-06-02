import React from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Avatar,
} from '@material-ui/core';
import avatar from '../../assets/avatar.png';
import { fade } from '@material-ui/core/styles/colorManipulator';

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
    color: palette.success.main,
  },
  title: {
    fontSize: 18,
    marginLeft: 3,
  },
  pos: {
    marginBottom: 12,
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
}));

interface TraidingCardProps {
  selected?: boolean;
}

const TraidingCard: React.FC<TraidingCardProps> = ({ selected }) => {
  const classes = useStyles();

  return (
    <Card
      className={`${classes.root} ${selected && classes.selected}`}
      variant="outlined"
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
            Chanaar <span className={classes.bold}>is byuing</span>
          </Typography>
          <Typography variant="h5" component="h2">
            Amazon Gift Card
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            77 USD (0.00542345 BTC)
          </Typography>
        </div>
        <div>
          <Avatar alt="Remy Sharp" src={avatar} />
          <Typography variant="h5">Paid</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default TraidingCard;
