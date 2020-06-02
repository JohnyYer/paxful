import React from 'react';
import avatar from '../../assets/avatar.png';
import { makeStyles, Typography, Avatar } from '@material-ui/core';
import { Message as IMessage } from '../../store/trades/types';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: 'flex',
    width: '80%',
    float: 'right',
    padding: 15,
  },
  income: {
    float: 'left',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    '& span': {
      float: 'left',
    },
  },
  avatar: {
    margin: 10,
  },
  message: {
    border: '1px solid',
    borderColor: palette.divider,
    padding: 15,
  },
  timeStamp: {
    color: palette.text.secondary,
    fontSize: 12,
    float: 'right',
    marginTop: 3,
  },
}));

const Message: React.FC<IMessage> = ({ text, income, time }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${income && classes.income}`}>
      <div>
        <div className={classes.message}>
          <Typography>{text}</Typography>
        </div>
        <span className={classes.timeStamp}>{time}</span>
      </div>
      <Avatar alt="Remy Sharp" src={avatar} className={classes.avatar} />
    </div>
  );
};

export default Message;
