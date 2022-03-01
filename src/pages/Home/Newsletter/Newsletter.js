import { Box, Container, Input, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react';
import newsletterBG from '../../../images/news-letter-bg.jpg'
import ExploreIcon from '@mui/icons-material/Explore';

const Newsletter = () => {
    return (
        <Box sx={{
            my: 5
        }}>
            <Container>
                <Box sx={{
                    backgroundImage: `url(${newsletterBG})`,
                    backgroundSize: 'cover',
                    height: '100%',
                    width: '100%',
                    overflow: 'hidden',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '10px',

                }}>
                    <Box sx={{
                        p: 5,
                        m: 5
                    }}>
                        <Box>
                            <Typography
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'white',
                                    fontSize: { xs: '1.5rem', md: '2.5rem' }
                                }}
                                variant="h4" gutterBottom component="div">
                                Grab Our Newsletter
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'white',

                                }}
                                variant="h6" gutterBottom component="div">
                                To receive latest offers and discounts from the shop.
                            </Typography>

                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <TextField
                                sx={{
                                    backgroundColor: '#ffffff',
                                    padding: '6px',
                                    borderRadius: '5px',
                                    width: '35%',
                                    marginRight: '20px'
                                }}
                                id="input-with-icon-textfield"
                                placeholder="Enter Your Email Address"
                                InputProps={{
                                    disableUnderline: true,

                                }}
                                variant="standard"
                            />
                            <button class="newsletter-Btn">Subscribe</button>
                        </Box>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
};

export default Newsletter;