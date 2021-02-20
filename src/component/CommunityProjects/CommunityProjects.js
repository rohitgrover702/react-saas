import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Feed from '../Feed/Feed';
import Header from '../Header/Header';



const useStyles = makeStyles(theme => ({

    CommunityProjectsTitle: {
        fontSize: 30,
        fontWeight: "400"
    },
    mobileVersionButtonContainer: {
        borderWidth: 1,
        borderColor: "orange"
    },
    mobileVersionActiveButtonText: {
        color: "#dd994c"
    },
    communityProjectMobileBoxStyle: {
        padding: 0,
        margin: 0
    }
}));

const CommunityProjects = () => {
    const classes = useStyles();
    const [activeMobileButtonStyle, setActiveMobileButtonStyle] = useState(0);

    return (
        <Box>
            <Header type="communityProjects" />
            <Box mt={3}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography className={classes.CommunityProjectsTitle} align="center">Projects</Typography>
                    </Grid>
                    <Box className={classes.communityProjectMobileBoxStyle + " CommunityProjectsMobileVersionToggle"}>
                        <Grid container className={classes.mobileVersionButtonContainer}>
                            <Grid item xs={6} container justify="center" >
                                <Button
                                    fullWidth={true}
                                    className={classes.mobileVersionConstructorButton}
                                    onClick={() => setActiveMobileButtonStyle(0)}>
                                    <Typography className={activeMobileButtonStyle === 0 ? classes.mobileVersionActiveButtonText : ""}>
                                        my feed
                        </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={6} container justify="center">
                                <Button
                                    fullWidth={true}
                                    className={classes.mobileVersionConstructorButton}
                                    onClick={() => setActiveMobileButtonStyle(1)}>
                                    <Typography className={activeMobileButtonStyle === 1 ? classes.mobileVersionActiveButtonText : ""}>
                                        saved
                        </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className={activeMobileButtonStyle === 0 ? "communityProjects_mobileVersionBorderBottomLeft CommunityProjectsMobileVersionToggle" : "communityProjects_mobileVersionBorderBottomRight CommunityProjectsMobileVersionToggle"}></Box>
                    <Grid container>
                        <Feed />
                    </Grid>
                </Grid>
            </Box>
        </Box>

    )
}


export default CommunityProjects;