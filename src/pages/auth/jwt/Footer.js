import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer2() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      py={{ xs: 2, md: 4 }} // Adjusted padding for responsiveness
      sx={{ backgroundColor: 'black' }}
    >
      <Box display="flex" gap={2}>
        <FacebookRoundedIcon sx={{ color: 'white', fontSize: { xs: 24, md: 32 } }} />
        <TwitterIcon sx={{ color: 'white', fontSize: { xs: 24, md: 32 } }} />
        <InstagramIcon sx={{ color: 'white', fontSize: { xs: 24, md: 32 } }} />
        <LinkedInIcon sx={{ color: 'white', fontSize: { xs: 24, md: 32 } }} />
      </Box>
      <Typography
        variant="body2"
        mt={{ xs: 2, md: 3 }} // Adjusted margin-top for responsiveness
        fontSize={{ xs: 'xs', md: 'base' }} // Adjusted font size for responsiveness
        sx={{ color: 'white' }}
      >
        Copyright @ 2023 ROCK34X. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer2;
