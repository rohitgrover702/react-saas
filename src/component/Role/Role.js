import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import constructorImage from '../../assets/images/constructor.png';
import houseOwnerImage from '../../assets/images/owner.png';
import successIcon from '../../assets/images/success.png';
import './role.css';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "20px"
    },
    primary: {
        backgroundColor: "#a54f79",
        borderRadius: 5
    },
    secondary: {
        backgroundColor: "#dd994c",
        borderRadius: 5
    },
    roleBoldFont: {
        fontWeight: "bold"
    },
    roleButtonStyle: {
        padding: 5,
        minWidth: 300,
        color: "white"
    },
    mobileVersionButtonContainer: {
        borderWidth: 1,
        borderColor: "orange"
    },
    mobileVersionActiveButtonTextConctractor: {
        color: "#dd994c"
    },
    mobileVersionActiveButtonTextHomeOwner: {
        color: "#a54f79"
    }
}));

const Role = () => {
    const classes = useStyles();
    const [activeMobileButtonStyle, setActiveMobileButtonStyle] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    return (
        <Box>
            <Header />
            <Box mt={5} pb={2}>
                <Grid container direction="column">
                    <Box mb={2}>
                        <Typography variant="h5" className="welcome" align="center">Welcome to the Adventure!</Typography>
                        <Typography variant="h5" align="center" className={classes.roleBoldFont}>Choose Your Role</Typography>
                    </Box>
                    <Box pb={1} className="mobileVersionToggle" >
                        <Grid container className={classes.mobileVersionButtonContainer}>
                            <Grid item xs={6} container justify="center" >
                                <Button
                                    fullWidth={true}
                                    onClick={() => setActiveMobileButtonStyle(0)}>
                                    <Typography className={activeMobileButtonStyle === 0 ? classes.mobileVersionActiveButtonTextConctractor : ""}>
                                        Contractor
                            </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={6} container justify="center">
                                <Button
                                    fullWidth={true}
                                    onClick={() => setActiveMobileButtonStyle(1)}>
                                    <Typography className={activeMobileButtonStyle === 1 ? classes.mobileVersionActiveButtonTextHomeOwner : ""}>
                                        Homeowner
                            </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className={activeMobileButtonStyle === 0 ? "mobileVersionBorderBottomLeft mobileVersionToggle" : "mobileVersionBorderBottomRight mobileVersionToggle"}></Box>
                    <Grid container mt={20}>
                        <Grid item xs={false} md={2}></Grid>
                        <Grid container item md={8}>
                            <Grid item justify="center" xs={12} container md={4}>
                                {width < 958 ?
                                    activeMobileButtonStyle === 0 &&
                                    <Grid>
                                        <img
                                            src={constructorImage}
                                            alt="Constructor"
                                        />
                                        <Typography variant="h6" align="center" className={classes.roleBoldFont}>Contractor</Typography>
                                        <Box className="role-benefits">
                                            <Grid direction="column" container>
                                                <Grid className="benefit-list-item" item container alignItems="center">
                                                    <img
                                                        className="success-icon-style"
                                                        src={successIcon}
                                                        alt="Success Icon"
                                                    />
                                                    <Typography variant="caption" className={classes.roleBoldFont}>Place bids on Projects</Typography>
                                                </Grid>
                                                <Grid className="benefit-list-item" item container alignItems="center">
                                                    <img
                                                        className="success-icon-style"
                                                        src={successIcon}
                                                        alt="Success Icon"
                                                    />
                                                    <Typography variant="caption" className={classes.roleBoldFont}>Help People</Typography>
                                                </Grid>
                                                <Grid className="benefit-list-item" item container alignItems="center">
                                                    <img
                                                        className="success-icon-style"
                                                        src={successIcon}
                                                        alt="Success Icon"
                                                    />
                                                    <Typography variant="caption" className={classes.roleBoldFont}>Earn Money</Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Button className={classes.root + ' ' + classes.primary + ' ' + classes.roleButtonStyle}>
                                            become a constractor
                                    </Button>
                                    </Grid>
                                    :
                                    <Grid>
                                        <img
                                            src={constructorImage}
                                            alt="Constructor"
                                        />
                                        <Typography variant="h6" align="center" className={classes.roleBoldFont}>Contractor</Typography>
                                        <Box className="role-benefits">
                                            <Grid direction="column" container>
                                                <Grid className="benefit-list-item" item container alignItems="center">
                                                    <img
                                                        className="success-icon-style"
                                                        src={successIcon}
                                                        alt="Success Icon"
                                                    />
                                                    <Typography variant="caption" className={classes.roleBoldFont}>Place bids on Projects</Typography>
                                                </Grid>
                                                <Grid className="benefit-list-item" item container alignItems="center">
                                                    <img
                                                        className="success-icon-style"
                                                        src={successIcon}
                                                        alt="Success Icon"
                                                    />
                                                    <Typography variant="caption" className={classes.roleBoldFont}>Help People</Typography>
                                                </Grid>
                                                <Grid className="benefit-list-item" item container alignItems="center">
                                                    <img
                                                        className="success-icon-style"
                                                        src={successIcon}
                                                        alt="Success Icon"
                                                    />
                                                    <Typography variant="caption" className={classes.roleBoldFont}>Earn Money</Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Button className={classes.root + ' ' + classes.primary + ' ' + classes.roleButtonStyle}>
                                            become a constractor
                            </Button>
                                    </Grid>
                                }
                            </Grid>
                            <Grid container justify="center" item xs={12} md={4}>
                                <Box className="role-choice-flag-container">
                                    <Box className="role-choice-top"></Box>
                                    <Typography className="role-choice">
                                        or
                            </Typography>
                                    <Box className="role-choice-bottom"></Box>
                                </Box>
                            </Grid>
                            <Grid item justify="center" container xs={12} md={4}>
                                {width < 958 ?
                                    activeMobileButtonStyle === 1 &&
                                    <Box className="homeowner-container">
                                        <Grid>
                                            <img
                                                style={{ imageRendering: "pixelated" }}
                                                src={houseOwnerImage}
                                                alt="House Owner"
                                            />
                                            <Typography variant="h6" align="center" className={classes.roleBoldFont}>Homeowner</Typography>
                                            <Box className="role-benefits-owner">
                                                <Grid direction="column" container >
                                                    <Grid className="benefit-list-item" item container alignItems="center">
                                                        <img
                                                            className="success-icon-style"
                                                            src={successIcon}
                                                            alt="Success Icon"
                                                        />
                                                        <Typography variant="caption" className={classes.roleBoldFont}>Find best Contractors for your Projects</Typography>
                                                    </Grid>
                                                    <Grid className="benefit-list-item" item container alignItems="center">
                                                        <img
                                                            className="success-icon-style"
                                                            src={successIcon}
                                                            alt="Success Icon"
                                                        />
                                                        <Typography variant="caption" className={classes.roleBoldFont}>Save money and time</Typography>
                                                    </Grid>
                                                    <Grid className="benefit-list-item" item container alignItems="center">
                                                        <img
                                                            className="success-icon-style"
                                                            src={successIcon}
                                                            alt="Success Icon"
                                                        />
                                                        <Typography variant="caption" className={classes.roleBoldFont}>Create as much Projects you like</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <Button className={classes.root + ' ' + classes.secondary + ' ' + classes.roleButtonStyle}>
                                                become a houseowner
                                        </Button>
                                        </Grid>
                                    </Box>
                                    :
                                    <Box className="homeowner-container">
                                        <Grid>
                                            <img
                                                style={{ imageRendering: "pixelated" }}
                                                src={houseOwnerImage}
                                                alt="House Owner"
                                            />
                                            <Typography variant="h6" align="center" className={classes.roleBoldFont}>Homeowner</Typography>
                                            <Box className="role-benefits-owner">
                                                <Grid direction="column" container >
                                                    <Grid className="benefit-list-item" item container alignItems="center">
                                                        <img
                                                            className="success-icon-style"
                                                            src={successIcon}
                                                            alt="Success Icon"
                                                        />
                                                        <Typography variant="caption" className={classes.roleBoldFont}>Find best Contractors for your Projects</Typography>
                                                    </Grid>
                                                    <Grid className="benefit-list-item" item container alignItems="center">
                                                        <img
                                                            className="success-icon-style"
                                                            src={successIcon}
                                                            alt="Success Icon"
                                                        />
                                                        <Typography variant="caption" className={classes.roleBoldFont}>Save money and time</Typography>
                                                    </Grid>
                                                    <Grid className="benefit-list-item" item container alignItems="center">
                                                        <img
                                                            className="success-icon-style"
                                                            src={successIcon}
                                                            alt="Success Icon"
                                                        />
                                                        <Typography variant="caption" className={classes.roleBoldFont}>Create as much Projects you like</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <Button className={classes.root + ' ' + classes.secondary + ' ' + classes.roleButtonStyle}>
                                                become a houseowner
                                        </Button>
                                        </Grid>
                                    </Box>
                                }
                            </Grid>
                        </Grid>
                        <Grid item xs={false} md={2}></Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Role;