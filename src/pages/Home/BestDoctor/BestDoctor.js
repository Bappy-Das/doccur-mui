import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './BestDoctor.css'
import DoctorCarusel from './DoctorCarusel/DoctorCarusel';



const BestDoctor = () => {

    return (
        <Box sx={{
            background: '#f8f9fa',
            padding: "50px 0",
        }}>
            <Container>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box sx={{
                                textAlign: 'start'
                            }}>
                                <Box sx={{
                                    fontWeight: '500'
                                }}>
                                    <Typography className='doctor-head-title' variant="h4" gutterBottom component="div">
                                        Book Our Doctor
                                    </Typography>
                                    <Typography className='doctor-head-subtitle' variant="subtitle1" gutterBottom component="div">
                                        Lorem Ipsum is simply dummy text
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography className='doctor-head-subtitle2' variant="subtitle1" gutterBottom component="div">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
                                    </Typography>
                                    <Typography mt={2} className='doctor-head-subtitle2' variant="subtitle1" gutterBottom component="div">
                                        web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Box>

                                <DoctorCarusel></DoctorCarusel>

                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </Box>
    );
};

export default BestDoctor;