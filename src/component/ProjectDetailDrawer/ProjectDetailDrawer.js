import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, ButtonBase, Box, Drawer, Typography, Card, CardMedia, Button, Divider, List } from '@material-ui/core';

// * IMAGES AND ICON IMPORT
import avatarImage from '../../assets/images/avatar-image.png';
import heart from '../../assets/images/heart.png';
import share from '../../assets/images/share.png';
import rating from '../../assets/images/rating-medium-only-full.png';
import heroImage from '../../assets/images/garden-image.png';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import '../../index.css';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 40,
        paddingTop: 30
    },

    BackToProjectTitle: {
        textTransform: "uppercase",
        color: "rgba(0,0,0,0.54)",
        fontWeight: "bold",
        fontSize: 16,
    },
    projectDetailTitle: {
        fontSize: 20
    },
    projectDetailCatagoryLabel: {
        color: "#e49142",
        fontSize: 14
    },
    projectDetailDescriptionLabel: {
        color: "#e49142",
        fontSize: 14,
        paddingTop: 2,
        paddingBottom: 6
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    projectDetailHeader: {
        margin: 0,
        padding: 0,
        color: "#757575"
    },
    avatar: {
        width: 40,
        height: "auto",
        marginRight: 4,
        borderRadius: 100
    },
    projectDetailUserName: {
        fontSize: 16,
        fontWeight: "bold"
    },
    projectDetailBoldText: {
        fontWeight: "bold"
    },
    projectDetailTimeStamp: {
        fontSize: 14,
        color: "#9e9e9e",
        paddingTop: 2
    },
    projectDetailDescription: {
        paddingTop: 10,
    },
    rightSideContainer: {
        marginLeft: 25
    },

    //DRAWER'S  RIGHT SIDE STYLING
    rightButtonContainer: {
        backgroundColor: "#f8f8f8",
        paddingTop: 15,
        paddingBottom: 15,
    },
    placeBidButtonStyle: {
        maxWidth: 250,
        marginLeft: 25,
        backgroundColor: "#e49142",
        borderRadius: 5,
        borderColor: "#e49142",
        color: "white",
        "&:hover": {
            backgroundColor: '#e49142c9',
        }
    },
    askQuestionButtonStyle: {
        maxWidth: 250,
        marginLeft: 25,
        borderRadius: 5,
        borderColor: "#e49142",
        marginTop: 10,
        "&:hover": {
            backgroundColor: '#f5f5f5'
        }
    },
    projectDetailJobCompleted: {
        fontSize: 13,
        fontWeight: "bold"
    },
    projectDetailAveragePrice: {
        fontSize: 13,
        fontWeight: "bold"
    },
    projectQuestionListItem: {
        fontSize: 12,
        fontWeight: "500",
        marginTop: 7,
        marginBottom: 7,
        color: "rgba(0, 0, 0, 0.87)"
    },

}));

const ProjectDetailDrawer = props => {
    const classes = useStyles();
    return (
        <Drawer
            anchor="right"
            open={props.drawer}
            transitionDuration={500}
            type="temporary"
            classes={{
                paper: "ProjetDetailDrawerPaper",
            }}
        >
            <Box p={2} ml={2}>
                <Grid container item justify="flex-start" alignItems="center">
                    <ButtonBase>
                        <ArrowBackIos />
                        <Typography className={classes.BackToProjectTitle}>back to projects</Typography>
                    </ButtonBase>
                </Grid>
            </Box>
            <Grid container>
                <Grid item xs={12} sm={12} md={8}>
                    <Card className={classes.root}>
                        <Grid container direction="column">
                            <Grid container item alignItems="center" justify="space-between">
                                <Box>
                                    <Typography className={classes.projectDetailBoldText + ' ' + classes.projectDetailTitle}>Garden decoration</Typography>
                                </Box>
                                <Box>
                                    <img
                                        src={rating}
                                        alt="Star Rating"
                                    />
                                </Box>
                            </Grid>
                            <Box mt={1} mb={1}>
                                <Grid container justify="space-between" alignItems="center">
                                    <Box>
                                        <Grid item>
                                            <Typography className={classes.projectDetailCatagoryLabel} >Gardening category</Typography>
                                            <Typography className={classes.projectDetailTimeStamp}>Posted 31m ago</Typography>
                                        </Grid>
                                    </Box>
                                    <Box>
                                        <Grid container alignItems="center">
                                            <img
                                                src={avatarImage}
                                                className={classes.avatar}
                                                alt="Avatar"
                                            />
                                            <Typography className={classes.projectDetailUserName} variant="body2" color="textSecondary">Jean Doe.</Typography>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Box>
                            <Typography className={classes.projectDetailDescriptionLabel} >Project Description</Typography>
                            <CardMedia
                                className={classes.media}
                                image={heroImage}
                                title="Image Title goes here"
                            />
                            <Typography className={classes.projectDetailDescription} variant="body2" color="textSecondary">
                                Explore Mona Begeal's board "Garden decoration ideas", followed by 187 people on Pinterest. See more ideas about Garden, Garden art. Vines can do what no other plant can: Grow up!
                                Vining plants add color and texture to your garden, but they also provide quick privacy and screening of not-so-nice features you don't want to see (goodbye, ugly concrete wall!).
                                With their sweet scents and lovely blooms, vines are something every garden needs to round out the design.
                                Some vines are annual, so they last one season. Others return year after year, so they're considered perennial.
                                Make sure you choose a perennial type that can withstand winters in your USDA Hardiness Zone (find yours here).
                            </Typography>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Box className={classes.rightButtonContainer}>
                        <Grid container direction="column" justify="center">
                            <Button className={classes.placeBidButtonStyle} variant="outlined">Place My Bid</Button>
                            <Button className={classes.askQuestionButtonStyle} variant="outlined">Ask A Question</Button>
                        </Grid>
                    </Box>
                    <Box className={classes.rightSideContainer}>
                        <Grid container >
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
                        <Typography className={classes.projectDetailCatagoryLabel} >Homeowner Stats</Typography>
                        <Box mb={3}>
                            <Grid container alignItems="center">
                                <Typography className={classes.projectDetailJobCompleted}>Jobs Completed: 2</Typography>
                                <Typography className="ProductDetailjobActivitySeperator">|</Typography>
                                <Typography className={classes.projectDetailAveragePrice}>Avg Job: $200</Typography>
                            </Grid>
                        </Box>
                        <Divider />
                        <Box mt={2}>
                            <Typography className={classes.projectDetailCatagoryLabel} >Contractor Questions</Typography>
                            <List dense={true}>
                                <Typography className={classes.projectQuestionListItem}>Hello, how much time do we have for completing this...</Typography>
                                <Typography className={classes.projectQuestionListItem}>Hello, how much time do we have for completing this...</Typography>
                                <Typography className={classes.projectQuestionListItem}>Hello, how much time do we have for completing this...</Typography>
                                <Typography className={classes.projectQuestionListItem}>Hello, how much time do we have for completing this...</Typography>
                                <Typography className={classes.projectQuestionListItem}>Hello, how much time do we have for completing this...</Typography>
                                <Typography className={classes.projectQuestionListItem}>Hello, how much time do we have for completing this...</Typography>
                                <Typography className={classes.projectQuestionListItem}>Hello, how much time do we have for completing this...</Typography>
                            </List>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Drawer>
    )
}

export default ProjectDetailDrawer;