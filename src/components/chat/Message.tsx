import React from 'react';
import avatar from '../../assets/avatar.png';
import { makeStyles, Typography, Avatar } from '@material-ui/core';
import LeftBar from '../left-bar/LeftBar';

interface MessageProps {
  income?: boolean;
}

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

const Message: React.FC<MessageProps> = ({ income }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${income && classes.income}`}>
      <div>
        <div className={classes.message}>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
            accusantium minus error facere et impedit autem aspernatur nostrum
            reiciendis, obcaecati praesentium rem sunt quod repellat est natus
            eligendi quia ut.
          </Typography>
        </div>
        <span className={classes.timeStamp}>14:20</span>
      </div>
      <Avatar alt="Remy Sharp" src={avatar} className={classes.avatar} />
    </div>
  );
};

export default Message;
