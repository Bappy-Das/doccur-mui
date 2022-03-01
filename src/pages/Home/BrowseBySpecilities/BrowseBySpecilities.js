import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import imageShape from '../../../images/shape-5.png'
import urology from '../../../images/urology.png';
import orthopedic from '../../../images/orthopedic.png';
import mri from '../../../images/mri.png';
import dentist from '../../../images/dentist.png';
import cardiologist from '../../../images/cardiologist.png';
import neurology from '../../../images/neurology.png';
import laboratory from '../../../images/laboratory.svg';
import primaryCheck from '../../../images/primarycheckup.svg';
import './BrowseBySpecilities.css'
import { FaArrowRight } from "react-icons/fa";
const specialItemInfo = [
    {
        img: urology,
        title: 'Urology'
    },
    {
        img: orthopedic,
        title: 'Orthopedic'
    },
    {
        img: mri,
        title: 'MRI Scans'
    },
    {
        img: dentist,
        title: 'Dentist'
    },
    {
        img: cardiologist,
        title: 'Cardiologist'
    },
    {
        img: neurology,
        title: 'Neurology'
    },
    {
        img: laboratory,
        title: 'Laboratory'
    },
    {
        img: primaryCheck,
        title: 'Primary Checkup'
    },
]

const BrowseBySpecilities = () => {
    return (
        <Box>
            <Container>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    padding: '30px',
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
                            Browse by Specialities

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
                            specialItemInfo.map(info =>
                                <Grid item xs={12} md={3}>
                                    <Box className='browseSpecilities' sx={{
                                        marginBottom: '20px',
                                    }}>
                                        <Box className='full-body' sx={{

                                        }}>
                                            <Box className='specilities-img' >
                                                <img src={info.img} alt="" srcset="" />
                                            </Box>
                                            <Box className='browseSpecilities-name'>
                                                <Typography sx={{
                                                    width: '100px'
                                                }} fontWeight='bold' gutterBottom variant="subtitle2" component="div">
                                                    {info.title}
                                                </Typography>
                                            </Box>
                                            <Box className='arrow-right'>
                                                <FaArrowRight />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                        }

                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default BrowseBySpecilities;