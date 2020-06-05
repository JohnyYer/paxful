import React, { Fragment, useEffect, useState } from 'react';
import {
    makeStyles,
    Typography,
    Divider,
    InputAdornment,
    Button,
    OutlinedInput,
} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Message from './Message';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsSeller, selectCurrentTrade } from '../../store/selectors';
import { useParams, useHistory } from 'react-router-dom';
import {
    selectTrade,
    sendMessage,
    deleteTrade,
} from '../../store/trades/actions';

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
        maxHeight: '57vh',
        minHeight: '57vh',
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

const Chat: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { trade } = useParams();
    const isSeller = useSelector(selectIsSeller);
    const [message, setMessage] = useState<string>('');
    const history = useHistory();
    const currentTrade = useSelector(selectCurrentTrade);

    useEffect(() => {
        if (trade) {
            dispatch(selectTrade(parseInt(trade)));
        }
    }, [trade, dispatch]);

    const changeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const onMessageSend = () => {
        if (message.length > 0) {
            const timeStamp = new Date();
            dispatch(
                sendMessage({
                    income: !isSeller,
                    text: message,
                    time: `${timeStamp.getHours()} : ${timeStamp.getMinutes()} : ${timeStamp.getSeconds()}`,
                })
            );
            setMessage('');
        }
    };

    return (
        <div className={classes.root}>
            {currentTrade ? (
                <Fragment>
                    <div className={classes.heading}>
                        <div className={classes.circleIcon}>
                            <DeleteOutlineIcon
                                fontSize="large"
                                onClick={() => {
                                    dispatch(deleteTrade(currentTrade.id));
                                    history.push('/');
                                }}
                            />
                        </div>
                        <div>
                            <Typography variant="h4">
                                {currentTrade.paymentMethod}
                            </Typography>
                            <Typography
                                color="textSecondary"
                                variant="h5"
                                gutterBottom
                            >
                                {currentTrade.buyerName}
                                <span className={classes.success}> +37 </span>/
                                <span className={classes.error}> -1 </span>
                            </Typography>
                        </div>
                        <Divider className={classes.divider} variant="middle" />
                    </div>
                    <div className={classes.chat}>
                        {currentTrade.chat.messages.map((message) => (
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
                                <Button
                                    className={classes.sendButton}
                                    onClick={onMessageSend}
                                >
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
