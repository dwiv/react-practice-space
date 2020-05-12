import React from 'react';
import { Card, CardContent, Typography, Grid, GridList } from '@material-ui/core';

import styles from './LocationPicker.module.css';

const LocationPicker = (props) => {
    if(props === undefined | props.data[0] === undefined )
    {
        return(
            <div>
                ...loading
            </div>
        )
    }
    console.log('location picker props: ', props.data);
    
    const wifiSites = props.data.map(site => {
        const address_line = JSON.parse(site.location_1.human_address).address;
        console.log('i hate this so much: ', address_line);
        return (
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {site.school_name}
            </Typography>
            <Typography variant="h5">{address_line}</Typography>
            <Typography color="textSecondary">Distance</Typography>
          </CardContent>
          </Grid>
        );
    })
    console.log('wifi sites: ', wifiSites);

    return (
        <div className={styles.container}>
            <h2></h2>
            <GridList className={styles.locationGrid} container spacing={3} justify='center' cols={1}>

                    {wifiSites}

            </GridList>
        </div>
    )
}

export default LocationPicker