import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, ButtonBase, Box, Typography, Card, CardMedia, Button } from '@material-ui/core';
import ProjectDetailDrawer from '../../ProjectDetailDrawer/ProjectDetailDrawer';
// * IMAGES AND ICON IMPORT
import avatarImage from '../../../assets/images/avatar-image.png';
import heart from '../../../assets/images/heart.png';
import share from '../../../assets/images/share.png';
import rating from '../../../assets/images/rating-medium-only-full.png';
import heroImage from '../../../assets/images/garden-image.png';
import Location from '@material-ui/icons/LocationOn';



const useStyles = makeStyles((theme) => {
    return ({
        root: {
            padding: 15,
            [theme.breakpoints.down(599)]: {
                WebkitBoxShadow: "none",
                borderBottomStyle: 'solid',
                borderBottomColor: '#e0e0e0',
                borderBottomWidth: '2px',
            },
        },
        rootBackgroundColor: {
            backgroundColor: "#fcf5ee"
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        FeedCardHeader: {
            margin: 0,
            padding: 0,
            color: "#757575"
        },
        avatar: {
            width: 30,
            height: "auto",
            marginRight: 4,
            borderRadius: 100
        },
        feedCardBoldText: {
            fontWeight: "bold"
        },
        feedCardTimeStamp: {
            fontSize: 14,
            color: "#9e9e9e",
            paddingTop: 2
        },
        feedCardDescription: {
            paddingTop: 10
        },
        FeedCardLocation: {
            color: "#757575",
            paddingRight: 3
        },
        feedCardFundedButton: {
            width: 70,
            height: 25,
            borderRadius: 45,
            borderColor: "#e79c55",
            fontSize: 12,
            color: "#e79c55",
            textTransform: "capitalize",
            "&:hover": {
                backgroundColor: "transparent"
            }
        }
    })
})

const FeedCard = (props) => {
    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);

    const drawerStateHandler = (state) => {
        setDrawer(state);
    }
    return (
        <Card className={`${classes.root} ${props.funded && classes.rootBackgroundColor}`} onClick={() => !props.isFundedProjectScreen && drawerStateHandler(!drawer)}>
            {drawer &&
                <ProjectDetailDrawer drawer={drawer} setDrawer={drawerStateHandler} />
            }
            <Grid container direction="column">
                <Grid container alignItems="center" justify="space-between">
                    <Box>
                        <Typography className={classes.feedCardBoldText}>Garden decoration</Typography>
                        <Typography className={classes.feedCardTimeStamp}>Posted 31m ago</Typography>
                    </Box>
                    <Box>
                        <img
                            src={rating}
                            alt="Star Rating"
                        />
                    </Box>
                </Grid>
                <Box mt={1} mb={1}>
                    {!props.funded ?
                        <Grid container justify="space-between" alignItems="center">
                            <Box>
                                <Grid container alignItems="center">
                                    <img
                                        src={avatarImage}
                                        className={classes.avatar}
                                        alt="Avatar"
                                    />
                                    <Typography variant="body2" color="textSecondary">Jean Doe.</Typography>
                                </Grid>
                            </Box>
                            <Box>
                                <Grid container alignItems="center">
                                    <Location className={classes.FeedCardLocation} />
                                    <Typography variant="body2" color="textSecondary">Toronto, CA</Typography>
                                </Grid>
                            </Box>
                        </Grid>
                        :
                        <Grid container item justify="flex-end">
                            <Button className={classes.feedCardFundedButton} variant="outlined">funded</Button>
                        </Grid>
                    }
                </Box>
            </Grid>
            <CardMedia
                className={classes.media}
                image={heroImage}
                title="Image Title"
            />
            <Typography className={classes.feedCardDescription} variant="body2" color="textSecondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500's.
        </Typography>
            <Grid container justify={props.funded ? "flex-start" : "flex-end"}>
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
        </Card>
    );
}
export default FeedCard;