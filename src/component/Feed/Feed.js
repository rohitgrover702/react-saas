import React from 'react';
import { Grid, Box } from '@material-ui/core';
import FeedCard from './FeedCard/FeedCard';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Feed = props => {
    const matches = useMediaQuery('(min-width:599px)');
    return (
        <Box mt={5}>
            <Grid container >
                <Grid item xs={false} sm={1}></Grid>
                <Grid item container sm={10} spacing={matches ? 3 : 0}>
                    <Grid item sm={6} md={4} lg={3} xs={12}>
                        <FeedCard />
                    </Grid>
                    <Grid item sm={6} md={4} lg={3} xs={12}>
                        <FeedCard />
                    </Grid>
                    <Grid item sm={6} md={4} lg={3} xs={12}>
                        <FeedCard />
                    </Grid>
                    <Grid item sm={6} md={4} lg={3} xs={12}>
                        <FeedCard />
                    </Grid>
                </Grid>
                <Grid item xs={false} sm={1}></Grid>
            </Grid>
        </Box>
    )
}

export default Feed;