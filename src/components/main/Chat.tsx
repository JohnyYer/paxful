import React, { Fragment, useEffect, useState } from 'react';
import {
  makeStyles,
  Typography,
  Divider,
  InputAdornment,
  Button,
  Input,
  OutlinedInput,
} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Message from './Message';
import { useSelector, useDispatch } from 'react-redux';
import { selectedTrade, allTrades } from '../../store/selectors';
import { Trade } from '../../store/trades/types';
import { useParams } from 'react-router-dom';
import { selectTrade, sendMessage } from '../../store/trades/actions';

interface ChatProps {}

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  root: {
    height: '89vh',
    paddingTop: 20,
    backgroundColor: palette.action.hover,
    [breakpoints.up('md')]: {
      padding: 20,
    },
    [breakpoints.down('sm')]: {
      paddingTop: 40,
    },
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
    maxHeight: '60vh',
    minHeight: '60vh',
    overflowX: 'auto',
    [breakpoints.up('md')]: {
      maxHeight: '52vh',
      minHeight: '52vh',
    },
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
  const dispatch = useDispatch();
  const { trade } = useParams();
  const currentTradeID = useSelector(selectedTrade);
  const tradesList = useSelector(allTrades);
  const [tradeInfo, setTradeInfo] = useState<Trade | null>(null);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (trade) {
      dispatch(selectTrade(parseInt(trade)));
    }
  }, [trade]);

  useEffect(() => {
    if (currentTradeID && tradesList.length > 0) {
      const currentRate =
        tradesList.find((trade) => trade.id === currentTradeID) || null;
      setTradeInfo(currentRate);
    }
  }, [currentTradeID, tradesList]);

  const changeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onMessageSend = () => {
    if (message.length > 0) {
      const timeStamp = new Date();
      dispatch(
        sendMessage({
          income: true,
          text: message,
          time: `${timeStamp.getHours()} : ${timeStamp.getMinutes()} : ${timeStamp.getSeconds()}`,
        })
      );
      setMessage('');
    }
  };

  return (
    <div className={classes.root}>
      {tradeInfo ? (
        <Fragment>
          <div className={classes.heading}>
            <div className={classes.circleIcon}>
              <DeleteOutlineIcon fontSize="large" />
            </div>
            <div>
              <Typography variant="h4">{tradeInfo?.paymentMethod}</Typography>
              <Typography color="textSecondary" variant="h5" gutterBottom>
                Chanaar
                <span className={classes.success}> +37 </span>/
                <span className={classes.error}> -1 </span>
              </Typography>
            </div>
            <Divider className={classes.divider} variant="middle" />
          </div>
          <div className={classes.chat}>
            {tradeInfo?.chat?.map((message) => (
              <Message
                key={message.time}
                text={message.text}
                income={message.income}
                time={message.time}
              />
            ))}
          </div>
          <OutlinedInput
            id="outlined-basic"
            placeholder="Type your message..."
            className={classes.messageInput}
            onChange={changeMessage}
            value={message}
            endAdornment={
              <InputAdornment position="end">
                <Button className={classes.sendButton} onClick={onMessageSend}>
                  Send
                </Button>
              </InputAdornment>
            }
          />
        </Fragment>
      ) : (
        <Typography variant="h6" color="initial">
          No trade selected...
        </Typography>
      )}
    </div>
  );
};

export default Chat;
