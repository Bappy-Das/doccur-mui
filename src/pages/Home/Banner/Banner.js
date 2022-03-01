import { AccountCircle } from '@mui/icons-material';
import { Box, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react';
import bannerBG from '../../../images/banner-7.jpg'
import ExploreIcon from '@mui/icons-material/Explore';
import './Banner.scss'
import { borderRadius, padding } from '@mui/system';

const Banner = () => {
    return (

        <div>

            <Grid item xs={12} md={12}>
                <Box sx={{
                    backgroundImage: `url(${bannerBG})`,
                    backgroundSize: 'cover',
                    height: '100%',
                    width: '100%',
                    overflow: 'hidden',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',

                }}>

                    <Grid
                        flexDirection='column'
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        xs={12} sx={{
                            m: 5,
                            height: 400,
                        }}>

                        <Box>
                            <Typography sx={{ color: 'white' }} variant="subtitle2" gutterBottom component="div"> World's Largest</Typography>

                            <Typography sx={{
                                fontWeight: 'bold',
                                color: 'white',
                                fontSize: { xs: '1.5rem', md: '3rem' }
                            }}
                                variant="h3" gutterBottom component="div"> Search Doctor, Make an Appointment</Typography>

                            <Typography sx={{ color: 'white' }} variant="subtitle2" gutterBottom component="div"> Discover the best doctors, clinic & hospital the city nearest to you.</Typography>

                            {/* <Box sx={{
                                backgroundColor: '#0C4072',
                                boxShadow: '0px 0px 50px rgb(0 0 0 / 25%)',
                                borderRadius: '5px',
                                maxWidth: '850px',
                                marginTop: '30px',
                                spacing: '0',
                                padding: '10px'

                            }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={10}>
                                        <Box sx={{}}>
                                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        sx={{
                                                            backgroundColor: '#ffffff',
                                                            padding: '8px',
                                                            borderRadius: '5px'
                                                        }}
                                                        id="input-with-icon-textfield"
                                                        placeholder="Search Location"
                                                        InputProps={{
                                                            disableUnderline: true,
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <ExploreIcon sx={{ fontSize: '40px' }} />
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                        variant="standard"
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        sx={{
                                                            backgroundColor: '#ffffff',
                                                            padding: '8px',
                                                            borderRadius: '5px'
                                                        }}
                                                        id="input-with-icon-textfield"
                                                        placeholder="Orthopadic"
                                                        InputProps={{
                                                            disableUnderline: true,
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <AccountCircle sx={{ fontSize: '40px' }} />
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                        variant="standard"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6} md={2}>
                                        <button class="slide">Search</button>
                                    </Grid>

                                </Grid>
                            </Box> */}

                            <Box>
                                <Box sx={{
                                    backgroundColor: '#0C4072',
                                    boxShadow: '0px 0px 50px rgb(0 0 0 / 25%)',
                                    borderRadius: '5px',
                                    maxWidth: '850px',
                                    marginTop: '30px',
                                    spacing: '0',
                                    padding: '10px'

                                }}>


                                    <Grid container>
                                        <Grid item xs={4} >
                                            <TextField
                                                sx={{
                                                    backgroundColor: '#ffffff',
                                                    padding: '8px',
                                                    borderRadius: '5px',
                                                    width: '90%'
                                                }}
                                                id="input-with-icon-textfield"
                                                placeholder="Search Location"
                                                InputProps={{
                                                    disableUnderline: true,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <ExploreIcon sx={{ fontSize: '40px' }} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                variant="standard"
                                            />
                                        </Grid>
                                        <Grid item xs={4} >
                                            <TextField
                                                sx={{
                                                    backgroundColor: '#ffffff',
                                                    padding: '8px',
                                                    borderRadius: '5px',
                                                    width: '100%'
                                                }}
                                                id="input-with-icon-textfield"
                                                placeholder="Orthopadic"
                                                InputProps={{
                                                    disableUnderline: true,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <AccountCircle sx={{ fontSize: '40px' }} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                variant="standard"
                                            />
                                        </Grid>
                                        <Grid item xs={4} >
                                            <button class="slide">Search</button>
                                        </Grid>

                                    </Grid>

                                </Box>
                            </Box>
                        </Box>

                    </Grid>
                </Box>
            </Grid >

        </div >

    );
};

export default Banner;