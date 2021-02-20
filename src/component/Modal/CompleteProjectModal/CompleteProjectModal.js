import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { Typography, Grid, Box, ButtonBase, TextField } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/styles';
import Close from '../../../assets/images/close.png';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

import uploadImage from '../../../assets/images/camera.png';
import reviewStars from '../../../assets/images/5-star1.png';
import reviewStarsSmall from '../../../assets/images/5-star2.png';
import noticedProjectCompletionImage from '../../../assets/images/noticecompletion.png';
import ProjectCompletionImage from '../../../assets/images/earn-star.png';

const useStyles = makeStyles(theme => ({
    CompleteProjectTitle: {
        fontWeight: "bold",
        fontSize: 20,
        minWidth: "50%",
        maxWidth: "80%",
        margin: "auto",
        textAlign: "center",
    },
    completeProjectPhaseTwoTitle: {
        fontWeight: "bold",
        fontSize: 20,
        minWidth: "30%",
        maxWidth: "50%",
        margin: "auto",
        lineHeight: 1.1,
        marginBottom: 10
    },

    CompleteProjectAimTitle: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10
    },
    closeCompleteProjectModalIcon: {
        margin: 10,
    },
    informationIcon: {
        marginLeft: 10
    },
    CompleteProjectsubtitle: {
        color: "rgba(0, 0, 0, 0.54)",
        fontSize: 14,
        maxWidth: "90%",
        margin: "auto",
        fontWeight: 500
    },
    CompleteProjectInformationDialog: {
        maxWidth: "85%",
        margin: 'auto',
        borderRadius: 4,
        padding: 10,
        backgroundColor: "#e9f5fe"
    },
    confirmCompletionButton: {
        backgroundColor: "#e79c55",
        minWidth: 280,
        marginTop: 15,
        color: "white",
        transform: "uppercase",
        "&:hover": {
            backgroundColor: "#e79c55",
        }
    },
    backScreenButton: {
        color: "rgba(0, 0, 0, 0.38)",
        fontSize: 15,
        transform: "uppercase",
        textDecoration: "underline",
        "&:hover": {
            backgroundColor: "transparent",
            textDecoration: "underline"
        }
    },
    uploadImageIcon: {
        width: 60,
        height: 60,
        marginTop: 30,
        marginBottom: 15,
    },
    noteTextArea: {
        background: "white",
        margin: "30px 0",
        "&:focus": {
            backgroundColor: "green"
        }
    },
    noteAddingButton: {
        borderColor: "#e79c55",
        backgroundColor: "#e79c55",
        color: "white",
        minWidth: 270,
        "&:hover": {
            backgroundColor: "#e79c55"
        }
    },
    completeProjectFinalPhaseTitle: {
        fontWeight: "bold",
        fontSize: 20,
        maxWidth: "80%",
        margin: "auto",
        lineHeight: 1.1,
        marginBottom: 10
    }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CompleteProjectModal = props => {
    const classes = useStyles();
    return (
        <Box>
            {!props.modal &&
                <Box mt={40}>
                    <Grid container item justify="center" alignContent="center">
                        <Button variant="outlined" color="primary" onClick={props.toggleModal}>
                            open earn star modal
                </Button>
                    </Grid>
                </Box>
            }
            <Dialog
                open={props.modal}
                TransitionComponent={Transition}
                style={props.state > 0 && { backgroundColor: "#e79c55" }}
                keepMounted
                disableBackdropClick={true}
                onClose={props.toggleModal}
            >
                {props.state === 0 ?
                    <Grid container direction="column" justify="center">
                        <Grid container item justify="flex-end">
                            <ButtonBase onClick={props.toggleModal}>
                                <img
                                    src={Close}
                                    className={classes.closeCompleteProjectModalIcon}
                                    alt="Close Icon"
                                />
                            </ButtonBase>
                        </Grid>
                        <Box pl={5} pr={5} pb={5} pt={1}>
                            <Typography className={classes.CompleteProjectTitle}>I have spoken to homeowner about completion</Typography>
                            <Grid item container justify="center">
                                <Button
                                    onClick={() => props.changeModalState(1)}
                                    className={classes.confirmCompletionButton
                                    }>Confirm</Button>
                            </Grid>
                        </Box>
                    </Grid>
                    : props.state === 1 ?
                        <Grid container direction="column" justify="center">
                            <Box p={3}>
                                <Typography variant="h6" className={classes.completeProjectPhaseTwoTitle}>Garden decoration project in two lines</Typography>
                                <Typography align="center" variant="subtitle1" >Time to add your 'before' picture</Typography>
                                <Grid container item justify="center">
                                    <img
                                        src={uploadImage}
                                        alt="Upload"
                                        className={classes.uploadImageIcon}
                                        onClick={() => props.changeModalState(2)}
                                    />
                                </Grid>
                                <Typography color="primary" variant="subtitle2" align="center" >Click camera icon to capture or upload</Typography>
                                <Box mt={4}>
                                    <Grid container justify="center" alignItems="center">
                                        <ButtonBase
                                            onClick={() => props.changeModalState(0)}
                                            className={classes.backScreenButton}>
                                            <KeyboardArrowLeftIcon style={{ marginTop: 3 }} />
                                    Back
                                    </ButtonBase>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                        : props.state === 2 ?
                            <Grid container direction="column" justify="center">
                                <Box p={3}>
                                    <Typography variant="h6" align="center" className={classes.completeProjectPhaseTwoTitle}>Garden decoration project in two lines</Typography>
                                    <Typography align="center" variant="subtitle1" >Leave a note for Jean Doe</Typography>
                                    <Grid container item justify="center">
                                        <TextField
                                            multiline
                                            rows={5}
                                            fullWidth={true}
                                            color="secondary"
                                            placeholder="Your message here..."
                                            variant="outlined"
                                            className={classes.noteTextArea}
                                        />
                                    </Grid>
                                    <Grid container item justify="center">
                                        <Box ml={2.3}>
                                            <Button
                                                onClick={() => props.changeModalState(3)}
                                                variant="outlined" className={classes.noteAddingButton}>Message</Button>
                                        </Box>
                                    </Grid>
                                    <Box mt={4}>
                                        <Grid container justify="center" item alignItems="center">
                                            <ButtonBase
                                                onClick={() => props.changeModalState(1)}
                                                className={classes.backScreenButton}>
                                                <KeyboardArrowLeftIcon style={{ marginTop: 3 }} />
                                    Back
                                    </ButtonBase>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                            : props.state === 3 ?
                                <Grid container direction="column" justify="center">
                                    <Box p={3}>
                                        <Grid container justify="center" item alignItems="center">
                                            <img
                                                src={noticedProjectCompletionImage}
                                                alt="Notive Project Completion"
                                            />
                                        </Grid>
                                        <Box mt={1} ml={3} mr={3}>
                                            <Box mb={4}>
                                                <Typography variant="h6" align="center" className={classes.completeProjectPhaseTwoTitle}>We notified Jean Doe about your completion</Typography>
                                            </Box>
                                            <Typography align="center" variant="subtitle1" >You are making progress!</Typography>
                                            <Typography align="center" variant="subtitle1" >One contractor has confirmed you can submit your review</Typography>
                                        </Box>
                                        <Box mt={4}>
                                            <Grid container justify="center" alignItems="center">
                                                <Button
                                                    onClick={() => props.toggleModal()}
                                                    variant="outlined"
                                                    className={classes.noteAddingButton}>back to homescreen</Button>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Grid>
                                : props.state === 4 ?
                                    <Grid container direction="column" justify="center">
                                        <Box p={3}>
                                            <Box mb={1}>
                                                <Typography variant="h6" align="center">Review Homeowner</Typography>
                                            </Box>
                                            <Box>
                                                <Typography align="center" variant="subtitle1" >Contractor Review Question 1</Typography>
                                                <Grid container item justify="center">
                                                    <img
                                                        src={reviewStars}
                                                        alt="Review Stars"
                                                    />
                                                </Grid>
                                            </Box>
                                            <Box>
                                                <Typography align="center" variant="subtitle1" >Contractor Review Question 2</Typography>
                                                <Grid container item justify="center">
                                                    <img
                                                        src={reviewStars}
                                                        alt="Review Stars"
                                                    />
                                                </Grid>
                                            </Box>
                                            <Box>
                                                <Typography align="center" variant="subtitle1" >Contractor Review Question 3</Typography>
                                                <Grid container item justify="center">
                                                    <img
                                                        src={reviewStars}
                                                        alt="Review Stars"
                                                    />
                                                </Grid>
                                            </Box>
                                            <Box>
                                                <Typography align="center" variant="subtitle1" >Contractor Review Question 4</Typography>
                                                <Grid container item justify="center">
                                                    <img
                                                        src={reviewStars}
                                                        alt="Review Stars"
                                                    />
                                                </Grid>
                                            </Box>
                                            <Box>
                                                <Typography align="center" variant="subtitle1" >Contractor Review Question 5</Typography>
                                                <Grid container item justify="center">
                                                    <img
                                                        src={reviewStars}
                                                        alt="Review Stars"
                                                    />
                                                </Grid>
                                            </Box>
                                            <Box mt={2}>
                                                <TextField
                                                    fullWidth={true}
                                                    label="Your Comment"
                                                    multiline
                                                    rows={4}
                                                    placeholder="Enter Your Comment"
                                                    variant="outlined"
                                                    color="secondary"
                                                />
                                            </Box>
                                            <Box mt={4}>
                                                <Grid container justify="center" alignItems="center">
                                                    <Button
                                                        onClick={() => props.changeModalState(5)}
                                                        variant="outlined"
                                                        className={classes.noteAddingButton}>send review</Button>
                                                </Grid>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    : props.state === 5 &&
                                    <Grid container direction="column" justify="center">
                                        <Box p={3}>
                                            <Grid container justify="center" direction="column" item alignItems="center">
                                                <img
                                                    src={ProjectCompletionImage}
                                                    alt="Project Completed"
                                                />
                                                <Box mt={2}>
                                                    <img
                                                        src={reviewStarsSmall}
                                                        alt="Review Stars"
                                                    />
                                                </Box>
                                            </Grid>
                                            <Box mt={1}>
                                                <Typography variant="h6" align="center" className={classes.completeProjectFinalPhaseTitle}>Garden decoration project completed!</Typography>
                                                <Typography align="center" variant="subtitle1" >You are getting things done.</Typography>
                                                <Box mt={1}>
                                                    <Typography align="center" variant="body2" >That feels great.</Typography>
                                                </Box>
                                            </Box>
                                            <Box mt={3}>
                                                <Grid container justify="center" alignItems="center">
                                                    <Button
                                                        onClick={() => props.toggleModal()}
                                                        variant="outlined"
                                                        className={classes.noteAddingButton}>back to homescreen</Button>
                                                </Grid>
                                            </Box>
                                        </Box>
                                    </Grid>
                }
            </Dialog>
        </Box>
    );
}

export default CompleteProjectModal;