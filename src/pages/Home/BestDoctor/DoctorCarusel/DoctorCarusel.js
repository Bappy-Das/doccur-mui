import React from 'react';
import { Box, Button, Container, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Rating, Typography } from '@mui/material';

import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone, BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import FolderIcon from '@mui/icons-material/Folder';
import './DoctorCarusel.css'

import dortorimg from '../../../../images/doctor-03.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
// import required modules
import { FreeMode, Navigation } from "swiper";

const doctorinfo = [
    {
        name: 'abul',
        id: '1',
        expert: "medicine"
    },
    {
        name: 'abul',
        id: '1',
        expert: "medicine"
    },
    {
        name: 'abul',
        id: '1',
        expert: "medicine"
    },
    {
        name: 'abul',
        id: '1',
        expert: "medicine"
    },
    {
        name: 'abul',
        id: '1',
        expert: "medicine"
    },
    {
        name: 'abul',
        id: '1',
        expert: "medicine"
    },
    {
        name: 'abul',
        id: '1',
        expert: "medicine"
    },
    {
        name: 'abul',
        id: '1',
        expert: "medicine"
    },
]




export default function DoctorCarusel() {
    return (
        <>
            <Swiper

                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        // width: 640,
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        // width: 768,
                        slidesPerView: 3,
                    },
                }}
                // slidesPerView={3}
                spaceBetween={30}
                freeMode={true}

                navigation={true}
                modules={[FreeMode, Navigation]}
                className="mySwiper"
            >
                <Grid container spacing={2}>
                    {
                        doctorinfo.map(drinfo =>

                            <Grid item xs={12} md={4}>
                                <SwiperSlide>
                                    <Box>
                                        <Box className='doc-img' sx={{
                                            background: '#FFFFFF',
                                            // boxShadow: '0px 0px 10px rgb(0 0 0 / 11%)',
                                            borderRadius: '5px',
                                            minWidth: '100%',
                                            height: '100%',
                                            // margin: '10px',
                                            marginBottom: '20px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            overflow: 'hidden'
                                        }}>
                                            <img className='doctorimg' src={dortorimg} alt="" srcset="" />
                                        </Box>
                                        <Box sx={{
                                            textAlign: 'start'
                                        }} className='doc-content'>
                                            <Typography variant="h5" gutterBottom component="div">
                                                Deborah Angel
                                            </Typography>
                                            <Typography variant="body2" gutterBottom component="div">
                                                MBBS, MD - General Medicine, DNB - Cardiology
                                            </Typography>
                                            <Rating name="read-only" value={5} readOnly />

                                            <Box sx={{
                                                display: 'flex'
                                            }}>
                                                <FolderIcon />
                                                <Typography variant="body2" gutterBottom component="div">
                                                    Georgia, USA
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                display: 'flex'
                                            }}>
                                                <FolderIcon />
                                                <Typography variant="body2" gutterBottom component="div">
                                                    Georgia, USA
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                display: 'flex'
                                            }}>
                                                <FolderIcon />
                                                <Typography variant="body2" gutterBottom component="div">
                                                    Georgia, USA
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                display: 'flex'
                                            }}>
                                                <Button variant="contained">Contained</Button>
                                                <Button variant="contained">Contained</Button>

                                            </Box>

                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            </Grid>
                        )
                    }

                </Grid>






            </Swiper>
        </>
    );
}
