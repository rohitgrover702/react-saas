import React from 'react';
import Button from '@material-ui/core/Button';
import Header from '../../Header/Header';
import Dialog from '@material-ui/core/Dialog';
import { Typography, Grid, Box, ButtonBase } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/styles';
import Close from '../../../assets/images/close.png';
import Information from '../../../assets/images/info.png';
import StarImage from '../../../assets/images/earn-star.png';

const useStyles = makeStyles(theme => ({

    earnStarTitle: {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
    },
    earnStarAimTitle: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10
    },
    closeEarnStarModalIcon: {
        margin: 10,
    },
    informationIcon: {
        marginLeft: 10
    },
    earnStarsubtitle: {
        color: "rgba(0, 0, 0, 0.54)",
        fontSize: 14,
        maxWidth: "90%",
        margin: "auto",
        fontWeight: 500
    },
    earnStarInformationDialog: {
        maxWidth: "85%",
        margin: 'auto',
        borderRadius: 4,
        padding: 10,
        backgroundColor: "#e9f5fe"
    },
    watchVideoButtonStyle: {
        backgroundColor: "#a54f79",
        marginTop: 15,
        color: "white",
        transform: "uppercase",
        "&:hover": {
            backgroundColor: "#a54f79",
        }
    },
    maybeLaterButtonStyle: {
        color: "rgba(0, 0, 0, 0.38)",
        marginTop: 5,
        transform: "uppercase",
        textDecoration: "underline",
        "&:hover": {
            backgroundColor: "transparent",
            textDecoration: "underline"
        }
    }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const EarnStar = () => {
    const [modal, setModal] = React.useState(true);
    const classes = useStyles();

    const toggleModalHandler = () => {
        setModal(!modal);
    };

    return (
        <Box>
            <Header />
            {!modal &&
                <Box mt={40}>
                    <Grid container item justify="center" alignContent="center">
                        <Button variant="outlined" color="primary" onClick={toggleModalHandler}>
                            open earn star modal
                </Button>
                    </Grid>
                </Box>
            }
            <Dialog
                open={modal}
                TransitionComponent={Transition}
                keepMounted
                onClose={toggleModalHandler}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <Grid container direction="column" justify="center" >
                    <Grid container item justify="flex-end">
                        <ButtonBase onClick={toggleModalHandler}>
                            <img
                                src={Close}
                                className={classes.closeEarnStarModalIcon}
                                alt="Close Icon"
                            />
                        </ButtonBase>
                    </Grid>
                    <Typography className={classes.earnStarTitle}>Earn Stars</Typography>
                    <Grid container item justify="center">
                        <img
                            src={StarImage}
                            alt="Aim For Star"
                        />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.earnStarTitle + ' ' + classes.earnStarAimTitle}>
                            Let’s Aim for the Stars
                </Typography>
                        <Typography align="center" className={classes.earnStarsubtitle}>
                            For a smooth start, we would like to walk you through our demo helper video to guide you with project creation.
                </Typography>
                    </Grid>
                    <Box className={classes.earnStarInformationDialog}>
                        <Grid container>
                            <Grid item xs={1}>
                                <img
                                    src={Information}
                                    className={classes.informationIcon}
                                    alt="Information Icon"
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <Typography className={classes.earnStarsubtitle}>
                                    Please keep in mind that unless you have achieved 3 stars your project is ineligible for viewing by contractors.
                        </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Grid item container justify="center">
                        <Button className={classes.watchVideoButtonStyle}>watch the demo</Button>
                    </Grid>
                    <Grid item container justify="center">
                        <Button
                            onClick={toggleModalHandler}
                            className={classes.maybeLaterButtonStyle}>
                            maybe later
                        </Button>
                    </Grid>
                </Grid>
            </Dialog>
        </Box>
    );
}

export default EarnStar;