import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import imageShape from '../../../images/shape-5.png'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { FaUserMd, FaTablets, FaVial } from "react-icons/fa";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const MainService = () => {
    return (
        <Container >
            <Box sx={{
                paddding: '50px'
            }}
            >
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
                            What are you looking for?

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
                <Box sx={{
                    padding: '30px',
                    // background: '#FFFFFF',
                    // borderRadius: '10px',
                    // padding: '20px',
                    // boxShadow: '0px 40px 50px rgb(0 113 220 / 10 %)'
                }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Item sx={{ backgroundColor: '#E5F1FB' }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mb: 2
                                }}>
                                    <Box sx={{
                                        width: '100px',
                                        height: '100px',
                                        background: '#4bc475',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: '#ffffff'
                                    }}>
                                        <FaUserMd size={60} />
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        height: '200px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    <Typography variant="h4" fontWeight='bold' gutterBottom component="div">
                                        Visit a Doctor
                                    </Typography>
                                    <Typography variant="subtitle1" fontWeight='bold' gutterBottom component="div">
                                        We hire the best specialists to deliver top-notch diagnostic services for you.
                                    </Typography>
                                </Box>
                                <Box sx={{ p: 2 }}>
                                    <button class="offer-Btn">Search</button>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Item sx={{ backgroundColor: '#E3FFEF' }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mb: 2
                                }}>
                                    <Box sx={{
                                        width: '100px',
                                        height: '100px',
                                        background: '#4bc475',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: '#ffffff'
                                    }}>

                                        <FaTablets size={60} />

                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        height: '200px'
                                    }}
                                >
                                    <Typography variant="h4" fontWeight='bold' gutterBottom component="div">
                                        Find a Pharmacy
                                    </Typography>
                                    <Typography variant="subtitle1" fontWeight='bold' gutterBottom component="div">
                                        We provide the a wide range of medical services, so every person could have the opportunity.
                                    </Typography>
                                </Box>
                                <Box sx={{ p: 2 }}>
                                    <button class="offer-Btn">Search</button>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Item sx={{ backgroundColor: '#FFF3E6' }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mb: 2
                                }}>
                                    <Box sx={{
                                        width: '100px',
                                        height: '100px',
                                        background: '#4bc475',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: '#ffffff'
                                    }}>
                                        <FaVial size={60} />
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        height: '200px'
                                    }}
                                >
                                    <Typography variant="h4" fontWeight='bold' gutterBottom component="div">
                                        Find a Lab
                                    </Typography>
                                    <Typography variant="subtitle1" fontWeight='bold' gutterBottom component="div">
                                        We use the first-class medical equipment for timely diagnostics of various diseases timely diagnostics of various diseases diseases timely diagnostics of various diseases.
                                    </Typography>
                                </Box>
                                <Box sx={{ p: 2 }}>
                                    <button class="offer-Btn">Search</button>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>

    );
};

export default MainService;