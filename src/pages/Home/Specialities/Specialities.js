import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import imageShape from '../../../images/shape-5.png'
import urology from '../../../images/urology.png';
import orthopedic from '../../../images/orthopedic.png';
import mri from '../../../images/mri.png';
import dentist from '../../../images/dentist.png';
import cardiologist from '../../../images/cardiologist.png';
import neurology from '../../../images/neurology.png';
import './Specialities.css'

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
]

const Specialities = () => {
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
                            Clinic and Specialities

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
                                    <Box className='bodyeee'
                                        sx={{
                                            backgroundColor: '#F8FCFF',
                                            border: '1px solid rgba(0, 113, 220, 0.18)',
                                            borderRadius: '10px',
                                            padding: '30px',
                                            height: '220px',
                                            paddingBottom: '40px',
                                            textAlign: 'center',
                                            marginBottom: '20px',
                                            position: 'relative',
                                        }}>
                                        < Box className="sp-img" sx={{
                                            background: '#FFFFFF',
                                            boxShadow: '0px 0px 20px rgb(0 0 0 / 11%)',
                                            borderRadius: '5px',
                                            minWidth: '110px',
                                            height: '110px',
                                            marginBottom: '24px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <img src={info.img} alt="" srcset="" />
                                        </Box>
                                        <Typography className='title-name' fontWeight='bold' gutterBottom variant="body2" component="div">
                                            {info.title}
                                        </Typography>
                                        <button class="offer-Btn title-btn">Consult Now</button>
                                    </Box>
                                </Box>
                            </Grid>
                                // <Grid className='up' item xs={12} md={2}>
                                //     <Box sx={{
                                //         backgroundColor: '#F8FCFF',
                                //         border: '1px solid rgba(0, 113, 220, 0.18)',
                                //         borderRadius: '5px',
                                //         padding: '30px',
                                //         paddingBottom: '40px',
                                //         textAlign: 'center',
                                //         marginBottom: '20px',
                                //         position: 'relative',
                                //     }}>
                                //         <Box sx={{
                                //             background: '#FFFFFF',
                                //             boxShadow: '0px 0px 20px rgb(0 0 0 / 11%)',
                                //             borderRadius: '5px',
                                //             minWidth: '110px',
                                //             height: '110px',
                                //             marginBottom: '24px',
                                //             display: 'flex',
                                //             justifyContent: 'center',
                                //             alignItems: 'center',
                                //         }}>
                                //             <img src={info.img} alt="" srcset="" />
                                //         </Box>
                                //         <Typography gutterBottom variant="h6" component="div">
                                //             {info.title}
                                //         </Typography>
                                //     </Box>
                                // </Grid>
                            )
                        }

                    </Grid >
                </Box >
            </Container >
        </div >
    );
};

export default Specialities;