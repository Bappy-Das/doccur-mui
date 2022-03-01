import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import footerBG from '../../../images/footer-bg5.jpg'
import footerLogo from '../../../images/footer-logo.png'
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone, BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
const Footer = () => {
    return (
        <Box sx={{
            backgroundImage: `url(${footerBG})`,
            backgroundSize: 'cover',
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            {/* <Container> */}
            <Box sx={{
                p: 5,
                m: 5,
                textAlign: 'start',
                color: '#E0E0E0',
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Box>
                            <Box>
                                <img src={footerLogo} alt="" srcset="" />
                            </Box>
                            <Box>
                                <Typography variant="body1" gutterBottom component="div">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                            </Box>
                            <Box p={2}>
                                <Box sx={{ display: 'flex' }}>
                                    <BsFacebook size={20} />
                                    <Typography ml={2} fontWeight="bold" variant="subtitle2" gutterBottom component="div">
                                        Facebook
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    <BsTwitter size={20} />
                                    <Typography ml={2} fontWeight="bold" variant="subtitle2" gutterBottom component="div">
                                        Twitter
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    <BsLinkedin size={20} />
                                    <Typography ml={2} fontWeight="bold" variant="subtitle2" gutterBottom component="div">
                                        LinkedIn
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    <BsInstagram size={20} />
                                    <Typography ml={2} fontWeight="bold" variant="subtitle2" gutterBottom component="div">
                                        Instagram
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography fontWeight="bold" variant="h5" gutterBottom component="div">
                            Contact US
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                        }}>
                            <GoLocation size='30px' sx={{
                                color: '#ffffff',

                            }} />
                            <Typography px={1} fontWeight="bold" variant="subtitle2" gutterBottom component="div">
                                3556 Beech Street, San Francisco,
                                California, CA
                                94108
                            </Typography>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                        }}>
                            <BsTelephone size='25px' sx={{
                                color: '#ffffff',

                            }} />
                            <Typography p={1} fontWeight="bold" variant="subtitle2" gutterBottom component="div">
                                +1 315 369 5943
                            </Typography>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                        }}>
                            <AiOutlineMail size='30px' sx={{
                                color: '#ffffff'
                            }} />
                            <Typography p={1} fontWeight="bold" variant="subtitle2" gutterBottom component="div">
                                doccure@example.com
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography fontWeight="bold" variant="h5" gutterBottom component="div">
                            For Patients
                        </Typography>
                        <Typography fontWeight="bold" variant="subtitle2" gutterBottom component="div">
                            Search for Doctors
                        </Typography>
                        <Typography fontWeight="bold" variant="subtitle2" gutterBottom component="div">
                            login
                        </Typography>
                        <Typography fontWeight="bold" variant="subtitle2" gutterBottom component="div">
                            Register
                        </Typography>
                        <Typography fontWeight="bold" variant="subtitle2" gutterBottom component="div">
                            Booking
                        </Typography>
                        <Typography fontWeight="bold" variant="subtitle2" gutterBottom component="div">
                            Patient Dashboard
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography fontWeight="bold" variant="h5" gutterBottom component="div">
                            For Doctors
                        </Typography>
                        <Typography fontWeight="bold" variant="subtitle2" gutterBottom component="div">
                            Appointments
                        </Typography>
                        <Typography fontWeight="bold" variant="subtitle2" gutterBottom component="div">
                            Chat
                        </Typography>
                        <Typography fontWeight="bold" variant="subtitle2" gutterBottom component="div">
                            Login
                        </Typography>
                        <Typography fontWeight="bold" variant="subtitle2" gutterBottom component="div">
                            Register
                        </Typography>
                        <Typography fontWeight="bold" variant="subtitle2" gutterBottom component="div">
                            Doctor Dashboard
                        </Typography>
                    </Grid>

                </Grid>
                <Divider color={'white'} />
                <Box mt={5}>
                    <Typography fontWeight="bold" variant="subtitle2" gutterBottom component="div">
                        &copy; 2022 Doccure. All rights reserved.
                    </Typography>
                </Box>
            </Box>



            {/* </Container> */}
        </Box>
    );
};

export default Footer;