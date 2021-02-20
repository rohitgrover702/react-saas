import React, { useState, useEffect } from 'react';
import Header from '../../component/Header/Header';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, Box, Typography, ButtonBase, Button
}
    from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FeedCard from '../../component/Feed/FeedCard/FeedCard';
import SideDrawer from '../../component/SideDrawer/SideDrawer';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    homeScreenDropDown: {
        minWidth: 120,
        height: 36,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
        borderColor: "lightgrey"
    },
    homeScreenDropDownCurrentValue: {
        padding: 6,
        fontSize: 15,
        fontWeight: "bold",
    },
    homeScreenDropDownIconContainer: {
        width: 52,
        height: 36,
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        borderColor: "lightgrey"
    },
    homeScreenDropDownIcon: {
        marginTop: 5
    },
    homeScreenDropDownListAnchorStyle: {
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
}));

const Home = props => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:599px)');
    const [open, setOpen] = React.useState(true);
    const [currentDropDownValue, setcurrentDropDownValue] = React.useState("DATE POSTED");
    const [toggleDropDown, setToggleDropDown] = React.useState(false);
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
    return (
        <Box>
            <Header
                type="Home"
                open={open}
                changeDrawerStatus={changeDrawerStatusHandler}
                showMenu={width < 767}
            />
            <div className={classes.root}>
                <SideDrawer
                    open={open}
                    changeDrawerStatus={changeDrawerStatusHandler}
                />
                <main className={classes.content}>
                    <Box mt={5} style={{ backgroundColor: "#fdfcfc" }}>
                        <Grid container>
                            <Grid item xs={false} sm={1}></Grid>
                            <Grid item container sm={10} spacing={matches ? 3 : 0}>
                                <Grid item container alignItems="center">
                                    <ButtonBase onClick={() => setToggleDropDown(!toggleDropDown)}>
                                        <Box border={1} className={classes.homeScreenDropDown}>
                                            <Typography className={classes.homeScreenDropDownCurrentValue}>{currentDropDownValue}</Typography>
                                        </Box>
                                        <Box border={1} className={classes.homeScreenDropDownIconContainer}>
                                            <ExpandMore className={classes.homeScreenDropDownIcon} />
                                        </Box>
                                        {toggleDropDown &&
                                            <div className="homeScreenDropDownItemContainer">
                                                <ul className="homeScreenDropDownList">
                                                    <li>
                                                        <Button className={classes.homeScreenDropDownListAnchorStyle} onClick={() => setcurrentDropDownValue("Date Posted")}>Date Posted</Button>
                                                    </li>
                                                    <li>
                                                        <Button className={classes.homeScreenDropDownListAnchorStyle} onClick={() => setcurrentDropDownValue("Star Rating")}>Star Rating</Button>
                                                    </li>
                                                    <li>
                                                        <Button className={classes.homeScreenDropDownListAnchorStyle} onClick={() => setcurrentDropDownValue("Most Recent")}>Most Recent</Button>
                                                    </li>
                                                    <li>
                                                        <Button className={classes.homeScreenDropDownListAnchorStyle} onClick={() => setcurrentDropDownValue("Community Rating")}>Community Rating</Button>
                                                    </li>
                                                </ul>
                                            </div>
                                        }
                                    </ButtonBase>
                                </Grid>
                                <Grid item sm={12} md={6} lg={4} xl={2} xs={12}>
                                    <FeedCard />
                                </Grid>
                                <Grid item sm={12} md={6} lg={4} xl={2} xs={12}>
                                    <FeedCard />
                                </Grid>
                                <Grid item sm={12} md={6} lg={4} xl={2} xs={12}>
                                    <FeedCard />
                                </Grid>
                                <Grid item sm={12} md={6} lg={4} xl={2} xs={12}>
                                    <FeedCard />
                                </Grid>
                            </Grid>
                            <Grid item xs={false} sm={1}></Grid>
                        </Grid>
                    </Box>
                </main>
            </div>
        </Box>

    );
}

export default Home;