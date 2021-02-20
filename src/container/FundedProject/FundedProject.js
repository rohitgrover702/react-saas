import React, { useState, useEffect } from 'react';
import Header from '../../component/Header/Header';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Box, Grid, ButtonBase, Typography, Button, TextField, Divider } from '@material-ui/core';
import SideDrawer from '../../component/SideDrawer/SideDrawer';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { grey } from '@material-ui/core/colors';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';

import FeedCard from '../../component/Feed/FeedCard/FeedCard';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import heroImage from '../../assets/images/garden-image.png';
import avatarImage from '../../assets/images/avatar-image.png';
import heart from '../../assets/images/heart.png';
import share from '../../assets/images/share.png';

import CompleteProjectModal from '../../component/Modal/CompleteProjectModal/CompleteProjectModal';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    fundedProjectBoldText: {
        fontWeight: "bold"
    },
    fundedProjectTopRightContainer: {
        padding: 5
    },
    fundedProjectTopRightTextStyle: {
        fontSize: 13,
        color: "grey",
        marginTop: 2
    },
    fundedProjectTopRightIconStyle: {
        color: grey[600]
    },
    fundedProjectTopLeftButton1: {
        borderColor: "#e79c55",
        marginRight: 10,
        minWidth: 200,
        backgroundColor: "white",
        "&:hover": {
            backgroundColor: "white"
        }
    },
    fundedProjectTopLeftButton2: {
        backgroundColor: "#e79c55",
        borderColor: "#e79c55",
        marginLeft: 5,
        minWidth: 200,
        color: "white",
        "&:hover": {
            backgroundColor: "#e79c55"
        }
    },
    fundedProjectAddress: {
        fontSize: 15,
        paddingRight: 5,
        fontWeight: 400
    },
    fundedProjectCatagoryLabel: {
        color: "#e49142",
        fontSize: 18,
        fontWeight: 500
    },
    fundedProjectTimeStamp: {
        fontSize: 14,
        color: "#9e9e9e",
        paddingTop: 2
    },
    fundedProjectVerticalLine: {
        height: 30,
        color: "lightgrey"
    },
    fundedProjectJobCompleted: {
        fontSize: 14,
        fontWeight: 400,
        color: "#9e9e9e",

    },
    fundedProjectAveragePrice: {
        fontSize: 14,
        fontWeight: 400,
        color: "#9e9e9e",
    },
    media: {
        marginTop: 20,
        marginBottom: 20,
        width: "100%",
        height: "auto"
    },
    avatar: {
        width: 50,
        height: "auto",
        marginRight: 20,
        borderRadius: 100
    },
    fundedProjectFundedButton: {
        width: 100,
        height: 25,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 45,
        borderColor: "#e79c55",
        fontSize: 12,
        color: "#e79c55",
        textTransform: "capitalize",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    projectQuestionListItem: {
        fontSize: 16,
        fontWeight: 400,
        marginTop: 7,
        marginBottom: 7,
        color: "rgba(0, 0, 0, 0.87)"
    },
    fundedProjectUnderlineStyle: {
        fontWeight: 500,
        textDecoration: "underline",
        color: "grey",
        padding: 0,
        "&:hover": {
            backgroundColor: "white",
            textDecoration: "underline",
        }
    },
    QuestiontextArea: {
        background: "white",
        margin: 20,
        marginLeft: 30,
        "&:focus": {
            backgroundColor: "green"
        }
    },
    askQuestionTitle: {
        marginTop: 30,
        marginLeft: 30
    },
    fundedProjectActiveButtonStyle: {
        border: "1px solid green"
    },
    questionSubmitButton: {
        borderColor: "#e79c55",
        backgroundColor: "white",
        minWidth: 120,
        "&:hover": {
            backgroundColor: "white"
        }
    },
    fundedProjectSocialIcon: {
        marginRight: 10,
        marginLeft: 10,
    },
    fundedProjectNotificationBadge: {
        backgroundColor: "#e79c55",
        minWidth: 15,
        minHeight: 'auto',
        borderRadius: 15,
        position: 'absolute',
        top: -5,
        right: -5
    },
    projectFundedNotificationTitle: {
        fontSize: 10
    },
    fundedProjectMessageSenderSide: {
        maxWidth: "70%",
        position: "relative",
        borderColor: "transparent",
        borderRadius: 2,
        backgroundColor: "#fbf3ea"
    },
    fundedProjectMessageReceiverSide: {
        maxWidth: "70%",
        position: "relative",
        borderColor: "transparent",
        borderRadius: 2,
        backgroundColor: "#f3f3f3",
    },
    MessagetextArea: {
        background: "white",
        margin: 20,
        maxWidth: "74%",
        "&:focus": {
            backgroundColor: "green"
        }
    },
    messageSubmitButton: {
        borderColor: "#e79c55",
        backgroundColor: "#e79c55",
        color: "white",
        minWidth: 270,
        "&:hover": {
            backgroundColor: "#e79c55"
        }
    },
    productFundedToggleButton: {
        marginLeft: 10
    },
    fundedProjectToggleButtonBorderBottom: {
        width: "100%",
    },
    reportTitltContainer: {
        position: "relative"
    },
    fundedProjectReportNotificationBadge: {
        backgroundColor: "#e79c55",
        width: 10,
        height: 10,
        borderRadius: 10,
        position: "absolute",
        bottom: 30,
        right: -15
    },
}));

const CustomButton = withStyles({
    root: {
        fontSize: 16,
        marginLeft: "10px",
        borderBottom: '2px solid #e79c55',
        borderRadius: 0,
        '&:hover': {
            backgroundColor: 'transparent',
            borderColor: '#e79c55',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: 'transparent',
            borderColor: '#e79c55',
        }
    },
})(Button);

const FundedProject = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [askQuestion, setAskQuestion] = React.useState(false);
    const [activeBorder, setActiveBorder] = React.useState("");
    const [quoteNow, setQuoteNow] = React.useState(false);
    const [completeProjectState, setCompleteProjectState] = React.useState(0);
    const [completeModal, setCompleteModal] = React.useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const changeDrawerStatusHandler = (val) => {
        setOpen(val);
    }

    const toggleCompleteModalHandler = () => {
        setCompleteModal(!completeModal)
    }

    const changeModalStateHandler = (state) => {
        setCompleteProjectState(state);
        setCompleteModal(true);
    }
    return (
        <Box>
            <Header
                type="fundedProject"
                open={open}
                changeDrawerStatus={changeDrawerStatusHandler}
                showMenu={width < 767}
            />
            {completeModal &&
                <CompleteProjectModal
                    state={completeProjectState}
                    modal={completeModal}
                    toggleModal={toggleCompleteModalHandler}
                    changeModalState={changeModalStateHandler}
                />
            }
            <div className={classes.root}>
                <SideDrawer
                    open={open}
                    changeDrawerStatus={changeDrawerStatusHandler}
                />
                <Grid container>
                    <Grid item sm={12} md={6} xs={12} lg={3}>
                        <Box border={1} borderColor="#fdfcfc">
                            <Grid container item justify="space-between" alignItems="center">
                                <Box p={2}>
                                    <SearchOutlined className={classes.fundedProjectTopRightIconStyle} color="action" />
                                </Box>
                                <Box p={2}>
                                    <Grid container>
                                        <ButtonBase>
                                            <KeyboardArrowLeftIcon className={classes.fundedProjectTopRightIconStyle} />
                                        </ButtonBase>
                                        <Typography className={classes.fundedProjectTopRightTextStyle}>2 of 10 </Typography>
                                        <ButtonBase>
                                            <KeyboardArrowRightIcon className={classes.fundedProjectTopRightIconStyle} />
                                        </ButtonBase>
                                    </Grid>
                                </Box>
                                <Box p={2}>
                                    <Grid container item>
                                        <Typography className={classes.fundedProjectTopRightTextStyle}>Sort by</Typography>
                                        <ButtonBase>
                                            <KeyboardArrowDownIcon className={classes.fundedProjectTopRightIconStyle} />
                                        </ButtonBase>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Box>
                        <FeedCard funded isFundedProjectScreen />
                        <FeedCard isFundedProjectScreen />
                        <FeedCard isFundedProjectScreen />

                    </Grid>
                    <Grid item sm={12} md={6} xs={12} lg={9}>
                        <Box pr={4} p={1.6} bgcolor="#f8f8f8">
                            {!quoteNow ?
                                <Grid container item justify="flex-end" alignItems="center">
                                    <Button variant="outlined" onClick={() => setAskQuestion(true)} className={classes.fundedProjectTopLeftButton1}>ask a question</Button>
                                    <Button variant="outlined"
                                        onClick={() => { setQuoteNow(!quoteNow); setActiveBorder("detail") }}
                                        className={classes.fundedProjectTopLeftButton2}>quote now</Button>
                                </Grid>
                                :
                                <Grid container item justify="space-between" alignItems="center">
                                    <Box>
                                        <Box>
                                            <Grid container alignItems="center">
                                                <img
                                                    src={avatarImage}
                                                    className={classes.avatar}
                                                    alt="Avatar"
                                                />
                                                <Typography variant="subtitle1" color="textSecondary">Jean Doe.</Typography>
                                                <ButtonBase className={classes.fundedProjectSocialIcon}>
                                                    <PhoneIphoneIcon htmlColor="#e79c55" />
                                                </ButtonBase>
                                                <ButtonBase className={classes.fundedProjectSocialIcon}>
                                                    <EmailIcon htmlColor="#e79c55" />
                                                </ButtonBase>
                                            </Grid>
                                        </Box>
                                    </Box>
                                    <Button
                                        variant="outlined"
                                        onClick={() => changeModalStateHandler(0)}
                                        className={classes.fundedProjectTopLeftButton2}>
                                        complete job
                                    </Button>
                                </Grid>
                            }
                            {askQuestion &&
                                <Grid container item>
                                    <Typography variant="h5" className={`${classes.fundedProjectBoldText} ${classes.askQuestionTitle}`}>Ask a Question</Typography>
                                    <TextField
                                        multiline
                                        rows={3}
                                        color="secondary"
                                        placeholder="can you tell me..."
                                        variant="outlined"
                                        fullWidth={true}
                                        className={classes.QuestiontextArea}
                                    />
                                    <Box ml={2.3}>
                                        <Button variant="outlined" className={classes.questionSubmitButton}>Submit</Button>
                                    </Box>
                                    <Box mt={0.8} ml={2}>
                                        <Button onClick={() => setAskQuestion(false)} className={classes.fundedProjectUnderlineStyle}>Cancel</Button>
                                    </Box>
                                </Grid>
                            }
                        </Box>
                        <Box p={4}>
                            <Grid container item>
                                {!askQuestion &&
                                    <Grid container alignItems="center" justify="space-between">
                                        <Box>
                                            <Typography variant="h5" className={classes.fundedProjectBoldText}>Garden decoration</Typography>
                                            <Box>
                                                <Grid container alignItems="center">
                                                    <Typography className={classes.fundedProjectAddress}>136 Brant Ave</Typography>
                                                    <Typography className="ProductDetailjobActivitySeperator">|</Typography>
                                                    <Typography className={classes.fundedProjectAddress}>Guelph, Ontario</Typography>
                                                    <Typography className="ProductDetailjobActivitySeperator">|</Typography>
                                                    <Typography className={classes.fundedProjectAddress}>N1E 6C9</Typography>
                                                </Grid>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Grid container justify="space-between" alignItems="center">
                                                <Box>
                                                    <Grid container alignItems="center">
                                                        {!quoteNow &&
                                                            <React.Fragment>
                                                                <img
                                                                    src={avatarImage}
                                                                    className={classes.avatar}
                                                                    alt="Avatar"
                                                                />
                                                                <Typography variant="subtitle1" color="textSecondary">Jean Doe.</Typography>
                                                            </React.Fragment>
                                                        }
                                                        <Button className={classes.fundedProjectFundedButton} variant="outlined">{quoteNow ? " funded" : "open"}</Button>
                                                        <ButtonBase>
                                                            <img
                                                                src={heart}
                                                                alt="Heart icon"
                                                            />
                                                        </ButtonBase>
                                                        <ButtonBase>
                                                            <img
                                                                src={share}
                                                                alt="Share Icon"
                                                            />
                                                        </ButtonBase>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                }
                                <Grid container item alignItems="center">
                                    <Box mt={3}>
                                        <Grid item>
                                            <Typography className={classes.fundedProjectCatagoryLabel} >Gardening category</Typography>
                                            <Typography className={classes.fundedProjectTimeStamp}>Posted 31m ago</Typography>
                                        </Grid>
                                    </Box>
                                    <Box m={2} mt={5} borderRight={1} className={classes.fundedProjectVerticalLine}></Box>
                                    <Box mt={3}>
                                        <Grid item>
                                            <Typography className={classes.fundedProjectCatagoryLabel} >Homeowner Stats</Typography>
                                            <Box>
                                                <Grid container alignItems="center">
                                                    <Typography className={classes.fundedProjectJobCompleted}>Jobs Completed: 2</Typography>
                                                    <Typography className="ProductDetailjobActivitySeperator">|</Typography>
                                                    <Typography className={classes.fundedProjectAveragePrice}>Avg Job: $200</Typography>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    </Box>
                                </Grid>
                                {quoteNow &&
                                    <Grid container item alignItems="center">
                                        <Box mt={5} mb={3}>
                                            {activeBorder === "detail" ?
                                                <CustomButton onClick={() => setActiveBorder("detail")}>
                                                    <Typography>Details</Typography>
                                                </CustomButton>
                                                :
                                                <Button className={classes.productFundedToggleButton} onClick={() => setActiveBorder("detail")}>
                                                    <Typography>Details</Typography>
                                                </Button>
                                            }
                                            {activeBorder === "message" ?
                                                <CustomButton onClick={() => setActiveBorder("message")}>
                                                    <Typography>Message</Typography>
                                                    <Box className={classes.fundedProjectNotificationBadge}>
                                                        <Typography className={classes.projectFundedNotificationTitle}>1</Typography>
                                                    </Box>
                                                </CustomButton>
                                                :
                                                <Button className={classes.productFundedToggleButton} onClick={() => setActiveBorder("message")}>
                                                    <Typography>Message</Typography>
                                                    <Box className={classes.fundedProjectNotificationBadge}>
                                                        <Typography className={classes.projectFundedNotificationTitle}>1</Typography>
                                                    </Box>
                                                </Button>
                                            }
                                            {activeBorder === "report" ?
                                                <CustomButton onClick={() => setActiveBorder("report")}>
                                                    <Typography>Report</Typography>
                                                    <Box className={classes.fundedProjectNotificationBadge}>
                                                        <Typography className={classes.projectFundedNotificationTitle}>1</Typography>
                                                    </Box>
                                                </CustomButton>
                                                :
                                                <Button className={classes.productFundedToggleButton} onClick={() => setActiveBorder("report")}>
                                                    <Typography>Report</Typography>
                                                    <Box className={classes.fundedProjectNotificationBadge}>
                                                        <Typography className={classes.projectFundedNotificationTitle}>1</Typography>
                                                    </Box>
                                                </Button>
                                            }
                                        </Box>
                                        <Box border={1} m={0} p={0} borderColor="lightgrey" className={classes.fundedProjectToggleButtonBorderBottom}></Box>
                                    </Grid>
                                }
                                {activeBorder === "" || activeBorder === "detail" ?
                                    <Box mt={3}>
                                        <Box>
                                            <Typography className={classes.fundedProjectCatagoryLabel} >Project Details</Typography>
                                        </Box>
                                        <img
                                            className={classes.media}
                                            src={heroImage}
                                            alt="Main Media"
                                        />
                                        <Typography className={classes.projectDetailDescription} variant="body2" color="textSecondary">
                                            Explore Mona Begeal's board "Garden decoration ideas", followed by 187 people on Pinterest. See more ideas about Garden, Garden art. Vines can do what no other plant can: Grow up!
                                            Vining plants add color and texture to your garden, but they also provide quick privacy and screening of not-so-nice features you don't want to see (goodbye, ugly concrete wall!).
                                            With their sweet scents and lovely blooms, vines are something every garden needs to round out the design.
                                            Some vines are annual, so they last one season. Others return year after year, so they're considered perennial.
                                            Make sure you choose a perennial type that can withstand winters in your USDA Hardiness Zone (find yours here).
                                        </Typography>
                                        <Box mt={4} mb={4}>
                                            <Divider />
                                        </Box>
                                        <Box mt={2}>
                                            <Typography className={classes.fundedProjectCatagoryLabel} >Contractor Questions</Typography>
                                            <Typography className={classes.projectQuestionListItem}>Hello, how much time do we have for completing this...</Typography>
                                            <Typography className={classes.projectQuestionListItem}>Question#1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </Typography>
                                            <Typography className={classes.projectQuestionListItem}>Question#2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </Typography>
                                            <Typography className={classes.projectQuestionListItem}>Question#3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </Typography>
                                            <Typography className={classes.projectQuestionListItem}>Question#4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </Typography>
                                            <Button className={classes.fundedProjectUnderlineStyle}>Read More</Button>

                                        </Box>
                                    </Box>
                                    : activeBorder === "message" ?
                                        <Box mt={3}>
                                            <Box p={2} m={3} border={1} className={`${classes.fundedProjectMessageSenderSide} `}>
                                                <Typography>Hello, i can work with your project in next 2 days.
                                         I think we will need different materials to accomplish this, or I can bring my own equipment. How much time do we have?</Typography>
                                                <Box className="fundedProjectMessageSenderSideAfter"></Box>
                                            </Box>
                                            <Box p={2} m={3} border={1} className={`${classes.fundedProjectMessageReceiverSide}  `}>
                                                <Typography>Hello, that's great! I hired you because I like your approach, I also funded the money, so I guess you can start working.</Typography>
                                                <Box className="fundedProjectMessageReceiverSideAfter"></Box>
                                            </Box>
                                            <TextField
                                                multiline
                                                rows={3}
                                                color="secondary"
                                                placeholder="Your message here..."
                                                variant="outlined"
                                                fullWidth={true}
                                                className={classes.MessagetextArea}
                                            />
                                            <Box ml={2.3}>
                                                <Button variant="outlined" className={classes.messageSubmitButton}>Message</Button>
                                            </Box>
                                        </Box>
                                        : activeBorder === "report" &&
                                        <Box>
                                            <Grid container alignItems="center" justify="space-between">
                                                <Box mt={4}>
                                                    <Box className={classes.reportTitltContainer}>
                                                        <Typography variant="h5" className={classes.fundedProjectBoldText}>Completion Request</Typography>
                                                        <Box className={classes.fundedProjectReportNotificationBadge}></Box>
                                                    </Box>
                                                    <Typography className={classes.fundedProjectTimeStamp}>Requested: September 14,2020</Typography>
                                                </Box>
                                                <Box>
                                                    <Button className={classes.fundedProjectFundedButton} variant="outlined">Approved</Button>
                                                </Box>
                                                <img
                                                    className={classes.media}
                                                    src={heroImage}
                                                    alt="Main Media"
                                                />
                                                <Box mt={1} mb={3}>
                                                    <Typography variant="body1">This was great!</Typography>
                                                </Box>
                                            </Grid>
                                            <Box>
                                                <Button
                                                    variant="outlined"
                                                    onClick={() => changeModalStateHandler(4)}
                                                    className={classes.messageSubmitButton}
                                                    endIcon={<CheckOutlinedIcon />}
                                                >Submit Review For Payment</Button>
                                            </Box>
                                        </Box>
                                }
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </Box>

    );
}

export default FundedProject;