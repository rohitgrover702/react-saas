import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, Collapse, Box, Typography, ButtonBase, Drawer, List, Divider, ListItem,
    ListItemIcon, ListItemText
}
    from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Folder from '@material-ui/icons/Folder';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import ComputerSharpIcon from '@material-ui/icons/ComputerSharp';
import LiveHelpSharpIcon from '@material-ui/icons/LiveHelpSharp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up(991)]: {
            width: 290,
        },
        [theme.breakpoints.down(991)]: {
            width: 250,
        },
        flexShrink: 0,
    },
    homeActiveDrawerItem: {
        backgroundColor: "#fdfcfc",
        "&:hover": {
            backgroundColor: "#fdfcfc"
        }
    },
    homeActiveDrawerIconAndTextStyle: {
        color: "#e49142"
    },
    drawerPaper: {
        [theme.breakpoints.up(991)]: {
            width: 290,
        },
        [theme.breakpoints.down(991)]: {
            width: 250,
        },
        backgroundColor: "#e49142",
    },
    homeScreenFormControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    homeDrawerLogo: {
        paddingTop: 7,
        paddingBottom: 15
    },
    homeListTitle: {
        fontSize: 14,
        marginLeft: 20,
        marginTop: 25,
        color: "#f8e2ce",
        textTransform: "uppercase"
    },

    homeListItemTextColor: {
        color: "white",
    },
    homeNestedList: {
        paddingLeft: theme.spacing(4),
    },
    homeBuildYourFirstProjectButton: {
        textDecoration: "underline",
        textDecorationColor: "white",
        fontSize: 15,
        fontWeight: "500",
        marginBottom: 3
    },
    homeBuildYourFirstProjectTitle: {
        fontSize: 15,
        textAlign: "center"
    },
}));

const SideDrawer = props => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [selectedItem, setSelectedItem] = React.useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Box>
            <div className={classes.root}>
                <Drawer
                    className={classes.drawer}
                    open={props.open}
                    variant={width < 767 ? "temporary" : "permanent"}
                    onClose={() => props.changeDrawerStatus(!props.open)}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Grid item container justify="center">
                        <img
                            src={require("../../assets/images/logo-transparent.png")}
                            alt="Logo"
                            className={classes.homeDrawerLogo}
                        />
                    </Grid>
                    <Divider />
                    <div>
                        <Typography className={classes.homeListTitle}>Projects</Typography>
                        <List>
                            <ListItem button onClick={() => setSelectedItem(0)} className={selectedItem === 0 ? classes.homeActiveDrawerItem : ""}>
                                <ListItemIcon className={selectedItem === 0 ? classes.homeActiveDrawerIconAndTextStyle : classes.homeListItemTextColor}>
                                    <Search />
                                </ListItemIcon>
                                <ListItemText className={selectedItem === 0 ? classes.homeActiveDrawerIconAndTextStyle : classes.homeListItemTextColor} primary="Available Jobs" />
                            </ListItem>
                            <ListItem button onClick={handleClick}>
                                <ListItemIcon className={classes.homeListItemTextColor}>
                                    <Folder />
                                </ListItemIcon>
                                <ListItemText className={classes.homeListItemTextColor} primary="My Jobs" />
                                {open ? <ExpandLess className={classes.homeListItemTextColor} /> : <ExpandMore className={classes.homeListItemTextColor} />}
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button onClick={() => setSelectedItem(1)} className={selectedItem === 1 ? classes.homeActiveDrawerItem : " " + classes.homeNestedList}>
                                        <ListItemIcon className={selectedItem === 1 ? classes.homeActiveDrawerIconAndTextStyle : classes.homeListItemTextColor}>
                                            <HourglassEmptyIcon />
                                        </ListItemIcon>
                                        <ListItemText className={selectedItem === 1 ? classes.homeActiveDrawerIconAndTextStyle : classes.homeListItemTextColor} primary="Awaiting Actions" />
                                    </ListItem>
                                    <ListItem button onClick={() => setSelectedItem(2)} className={selectedItem === 2 ? classes.homeActiveDrawerItem : " " + classes.homeNestedList}>
                                        <ListItemIcon className={selectedItem === 2 ? classes.homeActiveDrawerIconAndTextStyle : classes.homeListItemTextColor}>
                                            <ComputerSharpIcon />
                                        </ListItemIcon>
                                        <ListItemText className={selectedItem === 2 ? classes.homeActiveDrawerIconAndTextStyle : classes.homeListItemTextColor} primary="Live Projects" />
                                    </ListItem>
                                    <ListItem button onClick={() => setSelectedItem(3)} className={selectedItem === 3 ? classes.homeActiveDrawerItem : " " + classes.homeNestedList}>
                                        <ListItemIcon className={selectedItem === 3 ? classes.homeActiveDrawerIconAndTextStyle : classes.homeListItemTextColor}>
                                            <CheckCircleSharpIcon />
                                        </ListItemIcon>
                                        <ListItemText className={selectedItem === 3 ? classes.homeActiveDrawerIconAndTextStyle : classes.homeListItemTextColor} primary="Completed Projects" />
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                        <Divider />
                        <Typography className={classes.homeListTitle}>account</Typography>
                        <List>
                            <ListItem button onClick={() => setSelectedItem(4)} className={selectedItem === 4 ? classes.homeActiveDrawerItem : " " + classes.homeNestedList}>
                                <ListItemIcon className={selectedItem === 4 ? classes.homeActiveDrawerIconAndTextStyle : classes.homeListItemTextColor}>
                                    <AssignmentSharpIcon />
                                </ListItemIcon>
                                <ListItemText className={selectedItem === 4 ? classes.homeActiveDrawerIconAndTextStyle : classes.homeListItemTextColor} primary="My Proposals" />
                            </ListItem>
                            <ListItem button onClick={() => setSelectedItem(5)} className={selectedItem === 5 ? classes.homeActiveDrawerItem : " " + classes.homeNestedList}>
                                <ListItemIcon className={selectedItem === 5 ? classes.homeActiveDrawerIconAndTextStyle : classes.homeListItemTextColor}>
                                    <PersonSharpIcon />
                                </ListItemIcon>
                                <ListItemText className={selectedItem === 5 ? classes.homeActiveDrawerIconAndTextStyle : classes.homeListItemTextColor} primary="Profile" />
                            </ListItem>
                            <ListItem button onClick={() => setSelectedItem(6)} className={selectedItem === 6 ? classes.homeActiveDrawerItem : " " + classes.homeNestedList}>
                                <ListItemIcon className={selectedItem === 6 ? classes.homeActiveDrawerIconAndTextStyle : classes.homeListItemTextColor}>
                                    <LiveHelpSharpIcon />
                                </ListItemIcon>
                                <ListItemText className={selectedItem === 6 ? classes.homeActiveDrawerIconAndTextStyle : classes.homeListItemTextColor} primary="Support" />
                            </ListItem>
                            <ListItem button onClick={() => setSelectedItem(7)} className={selectedItem === 7 ? classes.homeActiveDrawerItem : " " + classes.homeNestedList}>
                                <ListItemIcon className={selectedItem === 7 ? classes.homeActiveDrawerIconAndTextStyle : classes.homeListItemTextColor}>
                                    <ExitToAppSharpIcon />
                                </ListItemIcon>
                                <ListItemText className={selectedItem === 7 ? classes.homeActiveDrawerIconAndTextStyle : classes.homeListItemTextColor} primary="Logout " />
                            </ListItem>
                        </List>
                    </div>
                    <Grid container item alignItems="center">
                        <Box mt={4} ml={3}>
                            <Typography className={classes.homeListItemTextColor + ' ' + classes.homeBuildYourFirstProjectTitle} component="span">
                                <ButtonBase className={classes.homeBuildYourFirstProjectButton}>
                                    Bid to your first project
                            </ButtonBase>
                            &nbsp;and earn +20 free projects
                        </Typography>
                        </Box>
                    </Grid>
                </Drawer>
            </div>
        </Box>

    );
}

export default SideDrawer;