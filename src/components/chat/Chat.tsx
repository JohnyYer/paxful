import React from 'react';
import {
  makeStyles,
  Typography,
  Divider,
  TextField,
  InputAdornment,
  Button,
  Input,
  OutlinedInput,
} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Message from './Message';

interface ChatProps {}

const useStyles = makeStyles(({ palette }) => ({
  root: {
    padding: 20,
    backgroundColor: palette.action.hover,
  },
  heading: {
    textAlign: 'center',
  },
  circleIcon: {
    backgroundColor: palette.text.secondary,
    color: '#ffffff',
    borderRadius: '50%',
    padding: '8px',
    float: 'left',
    marginLeft: 20,
    cursor: 'pointer',
  },
  success: {
    color: palette.success.main,
    fontWeight: 'bold',
  },
  error: {
    color: palette.error.main,
    fontWeight: 'bold',
  },
  divider: {
    marginTop: 20,
  },
  chat: {
    marginTop: 5,
    maxHeight: '55vh',
    overflowX: 'auto',
  },
  messageInput: {
    width: '100%',
    marginTop: 22,
    backgroundColor: palette.info.contrastText,
  },
  sendButton: {
    color: palette.success.main,
  },
}));

const Chat: React.FC<ChatProps> = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <div className={classes.circleIcon}>
          <DeleteOutlineIcon fontSize="large" />
        </div>
        <div>
          <Typography variant="h4">Amazon Gift Card</Typography>
          <Typography color="textSecondary" variant="h5" gutterBottom>
            Chanaar
            <span className={classes.success}> +37 </span>/
            <span className={classes.error}> -1 </span>
          </Typography>
        </div>
        <Divider className={classes.divider} variant="middle" />
      </div>
      <div className={classes.chat}>
        <Message />
        <Message income />
        <Message income />
        <Message income />
        <Message income />
        <Message income />
        <Message income />
        <Message income />
        <Message income />
        <Message income />
        <Message income />
        <Message income />
        <Message income />
        <Message income />
        <Message income />
        <Message income />
        <Message income />
        <Message income />
        <Message income />
        <Message income />
      </div>
      <OutlinedInput
        id="outlined-basic"
        placeholder="Type your message..."
        className={classes.messageInput}
        endAdornment={
          <InputAdornment position="end">
            <Button className={classes.sendButton}>Send</Button>
          </InputAdornment>
        }
      />
    </div>
  );
};

export default Chat;
