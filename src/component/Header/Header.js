import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Grid, IconButton, Typography, Box } from '@material-ui/core';
import logo from '../../assets/images/logo.png';
import logoTransparent from '../../assets/images/logo-transparent.png';
import { useLocation } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import avatarImage from '../../assets/images/avatar-image.png';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    headerOrangeBackgroundColor: {
        backgroundColor: "#e49142"
    },
    headerPurpleBackgroundColor: {
        backgroundColor: "#a54f79"
    },
    headerWhiteBackgroundColor: {
        backgroundColor: "white",
        height: 70
    },
    homeHeaderUserName: {
        fontWeight: "bold",
        marginRight: 10
    },
    headerAvatar: {
        width: 40,
        height: "auto",
        marginLeft: 5,
        borderRadius: 100
    },
    homeHeaderNotificationIcon: {
        marginRight: 10
    },
    notificationBadge: {
        backgroundColor: "#e31b0c",
        width: 7,
        height: 7,
        borderRadius: 7,
        position: 'absolute',
        top: 15,
        right: 15
    }

}));

const Header = props => {
    const location = useLocation();
    const classes = useStyles();
    return (
        <AppBar position="static">
            {props.type === "communityProjects" ?
                <Toolbar
                    className={classes.root + ' ' + classes.headerOrangeBackgroundColor}
                >
                    <Grid item justify="space-between" container>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <img
                            src={logoTransparent}
                            alt="Logo"
                        />
                        <IconButton edge="end" color="inherit" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Grid>
                </Toolbar>
                :
                props.type === "Home" || props.type === "fundedProject" ?
                    <Toolbar className={classes.root + ' ' + classes.headerWhiteBackgroundColor}>
                        <Grid container direction="row" justify="space-between">
                            <Box>
                                {props.showMenu &&
                                    <IconButton onClick={() => props.changeDrawerStatus(!props.open)} edge="start" color="default" aria-label="menu">
                                        <MenuIcon />
                                    </IconButton>
                                }
                            </Box>
                            <Box>
                                <Grid item alignItems="center" container>
                                    <IconButton edge="end" color="default" aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                    <IconButton className={classes.homeHeaderNotificationIcon} edge="end" color="default" aria-label="search">
                                        <NotificationsOutlinedIcon />
                                        <Box className={classes.notificationBadge}></Box>
                                    </IconButton>
                                    <Typography className={classes.homeHeaderUserName} color="textSecondary">Jean Doe</Typography>
                                    <Grid item>
                                        <img
                                            src={avatarImage}
                                            className={classes.headerAvatar}
                                            alt="Avatar"
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Toolbar>
                    :
                    <Toolbar
                        className={classes.root + ' ' + classes.headerPurpleBackgroundColor}
                    >
                        <Grid item justify="center" container>
                            <img
                                src={location.pathname === "/community-projects" ? logoTransparent : logo}
                                alt="Logo"
                            />
                        </Grid>
                    </Toolbar>
            }
        </AppBar>
    )
}

export default Header;