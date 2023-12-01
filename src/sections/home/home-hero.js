import NextLink from 'next/link';
import EyeIcon from '@untitled-ui/icons-react/build/esm/Eye';
import LayoutBottomIcon from '@untitled-ui/icons-react/build/esm/LayoutBottom';
import { Box, Button, Container, Rating, Stack, SvgIcon, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { paths } from '../../paths';
import { HomeCodeSamples } from './home-code-samples';

export const HomeHero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundImage: 'url("/assets/gradient-bg.svg")',
        pt: '120px'
      }}
    >
      <Container maxWidth="lg">
        <Box maxWidth="sm">
          <Typography
            variant="h1"
            sx={{ mb: 2 }}
          >
            Empowering Your&nbsp;
            <Typography
              component="span"
              color="primary.main"
              variant="inherit"
            >
              Crypto Investments
            </Typography>
            , Every Step of the Way.
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              fontSize: 20,
              fontWeight: 500
            }}
          >
           Rock34x empowers your crypto investments by offering secure trading, staking rewards, and intuitive portfolio management. Navigate the world of cryptocurrency confidently with us, every step of the way.
          </Typography>
          <Stack
            alignItems="center"
            direction="row"
            flexWrap="wrap"
            spacing={1}
            sx={{ my: 3 }}
          >
            <Rating
              readOnly
              value={4.7}
              precision={0.1}
              max={5}
            />
            <Typography
              color="text.primary"
              variant="caption"
              sx={{ fontWeight: 700 }}
            >
              4.7/5
            </Typography>
            <Typography
              color="text.secondary"
              variant="caption"
            >
              based on (70+ reviews)
            </Typography>
          </Stack>

        </Box>
        <Box
          sx={{
            pt: '120px',
            position: 'relative'
          }}
        >
          <Box
            sx={{
              overflow: 'hidden',
              width: '90%',
              fontSize: 0,
              mt: -2,
              mx: -2,
              pt: 2,
              px: 2,
              '& img': {
                borderTopLeftRadius: (theme) => theme.shape.borderRadius * 2.5,
                borderTopRightRadius: (theme) => theme.shape.borderRadius * 2.5,
                boxShadow: 16,
                width: '100%'
              }
            }}
          >
            <img
              src={theme.palette.mode === 'dark'
                ? '/assets/home-thumbnail-dark.png'
                : '/assets/home-thumbnail-light.png'}
            />
          </Box>
          <Box
            sx={{
              maxHeight: '100%',
              maxWidth: '100%',
              overflow: 'hidden',
              position: 'absolute',
              right: 0,
              top: 40,
              '& > div': {
                height: 460,
                width: 560
              }
            }}
          >
            <HomeCodeSamples />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
