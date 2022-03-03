import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Doctors.css'

const Doctors = () => {
    return (
        <Box>
            <Container>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            xs=6 md=8
                        </Grid>
                        <Grid item xs={12} md={8}>
                            xs=6 md=4
                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </Box>
    );
};

export default Doctors;