import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctor from '../../../images/doctor-img2.png'
import doctorbg from '../../../images/doctor-bg1.jpg'
const LookingFor = () => {
    return (
        <Box sx={{
            backgroundImage: `url(${doctorbg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            padding: '100px 0 100px'
        }}>
            <Container>
                <Box >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box sx={{
                                backgroundColor: 'rgba(6, 59, 111, 1)',
                                borderRadius: '10px',
                                padding: '20px',
                                textAlign: 'center'
                            }}>
                                <Box
                                    sx={{
                                        height: '200px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    <Typography color="#ffffff" variant="h6" fontWeight='bold' gutterBottom component="div">
                                        ARE YOU A DOCTOR?
                                    </Typography>
                                    <Typography color="#ffffff" variant="subtitle1" fontWeight='bold' gutterBottom component="div">
                                        The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way.
                                    </Typography>
                                </Box>
                                <Box sx={{ p: 2 }}>
                                    <button class="doctor-Btn">Book Now</button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box
                                component="img"
                                sx={{
                                    height: 'auto',
                                    width: '100%',
                                    display: { xs: 'none', md: 'block' },
                                }}
                                alt="The house from the offer."
                                src={doctor}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{
                                backgroundColor: 'rgba(62, 84, 99, 1)',
                                borderRadius: '10px',
                                padding: '20px',
                                textAlign: 'center'
                            }}>
                                <Box
                                    sx={{
                                        height: '200px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    <Typography color="#ffffff" variant="h6" fontWeight='bold' gutterBottom component="div">
                                        ARE YOU A PATIENT?
                                    </Typography>
                                    <Typography color="#ffffff" variant="subtitle1" fontWeight='bold' gutterBottom component="div">
                                        The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way.
                                    </Typography>
                                </Box>
                                <Box sx={{ p: 2 }}>
                                    <button class="patient-Btn">Book Now</button>
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Container >
        </Box >
    );
};

export default LookingFor;