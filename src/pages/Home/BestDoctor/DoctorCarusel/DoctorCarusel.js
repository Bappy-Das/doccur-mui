import React from 'react';
import { Box, Grid, Rating, Typography } from '@mui/material';

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
import { Autoplay, FreeMode, Navigation } from "swiper";

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
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, FreeMode, Navigation]}
                className="mySwiper"
            >
                <Grid container spacing={2}>
                    {
                        doctorinfo.map(drinfo =>

                            <Grid item xs={12} md={4}>
                                <SwiperSlide>
                                    <Box sx={{
                                        color: '#757575'
                                    }}>
                                        <Box className='doc-img' sx={{
                                            background: '#FFFFFF',
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

                                            <Box sx={{
                                                display: 'flex',
                                                alignContent: 'center',
                                                my: 2
                                                // justifyContent: 'center'
                                            }}>
                                                <Rating name="read-only" value={5} readOnly />
                                                <Typography variant="body2" gutterBottom component="div">
                                                    (17)
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
                                                    Available on Fri, 22 Mar
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                display: 'flex'
                                            }}>
                                                <FolderIcon />
                                                <Typography variant="body2" gutterBottom component="div">
                                                    $300-$500
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'space-evenly',
                                                padding: '10px'
                                            }}>
                                                <Box className='doctor-btn'><span className='btn-text'>View Profile</span></Box>
                                                <Box className='doctor-btn'><span className='btn-text'>Book Now</span></Box>
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
