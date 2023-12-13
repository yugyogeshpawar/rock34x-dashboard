import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { Box, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Logo } from '../../components/logo';
import { paths } from '../../paths';
import Navbar from '../../pages/auth/jwt/Topbar';
import Footer2 from '../../pages/auth/jwt/Footer';

const TOP_NAV_HEIGHT = 64;

const LayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center',
  backgroundImage: 'url("/assets/gradient-bg.svg")',
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  height: '100%'
}));

export const Layout = (props) => {
  const { children } = props;

  return (
    <LayoutRoot>
      <Navbar/>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          flex: '1 1 auto'
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            py: {
              xs: '60px',
              md: '120px'
            }
          }}
        >
          {children}
        </Container>
      </Box>
      <Footer2/>
    </LayoutRoot>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};
