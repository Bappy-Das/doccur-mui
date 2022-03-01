import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import imageShape from '../../../images/shape-5.png'
import operation from '../../../images/operation.svg';
import medical from '../../../images/medical.svg';
import patientword from '../../../images/patient-word.svg';
import testroom from '../../../images/test-room.svg';
import icu from '../../../images/icu.svg';
import laboratory from '../../../images/laboratoryfeature.svg';
import './AvailableFeature.css'

const specialItemInfo = [
    {
        img: operation,
        title: 'Operation'
    },
    {
        img: medical,
        title: 'Medical'
    },
    {
        img: patientword,
        title: 'Patient Ward'
    },
    {
        img: testroom,
        title: 'Test Room'
    },
    {
        img: icu,
        title: 'ICU'
    },
    {
        img: laboratory,
        title: 'Laboratory'
    },
]

const AvailableFeature = () => {
    return (
        <div>
            <Container>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    p: 5,
                }}>
                    <Box
                        component="img"
                        sx={{
                            height: 'auto',
                            width: 'auto',
                            display: { xs: 'none', md: 'block' },
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                            mx: 3
                        }}
                        alt="The house from the offer."
                        src={imageShape}
                    />
                    <Box>
                        <Typography sx={{
                            fontWeight: 'bold',
                            my: 5,
                            fontSize: { xs: '1.5rem', md: '2.5rem' }
                            // color: '#6CA8F2',
                            // textAlign: 'center'
                        }} gutterBottom variant="h3" component="div">
                            Available Features in Our Clinic

                        </Typography>
                    </Box>
                    <Box
                        component="img"
                        sx={{
                            height: 'auto',
                            width: 'auto',
                            display: { xs: 'none', md: 'block' },
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                            mx: 3
                        }}
                        alt="The house from the offer."
                        src={imageShape}
                    />
                </Box>
                <Box>
                    <Grid container spacing={2}>
                        {
                            specialItemInfo.map(info => <Grid item xs={6} md={2}>
                                <Box className='link'>
                                    <Box className='allFeature'>
                                        < Box className="allFeature-img" >
                                            <img className='feature-img' src={info.img} alt="" srcset="" />
                                        </Box>
                                        <Typography sx={{
                                            mt: 5
                                        }} className='title-name' fontWeight='bold' gutterBottom variant="subtitle2" component="div">
                                            {info.title}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            )
                        }

                    </Grid >
                </Box >
            </Container >
        </div >
    );
};

export default AvailableFeature;