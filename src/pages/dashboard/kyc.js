import Head from "next/head";
import {
  Avatar,
  Box,
  Card,
  Container,
  Typography,
  IconButton,
  SvgIcon,
  Stack,
  Button,
  Dialog,
  Paper,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import WarningIcon from '@mui/icons-material/Warning';
import { Layout as DashboardLayout } from "../../layouts/dashboard";
import React from "react";

const contacts = [
  {
    id: '5e887ac47eed253091be10cb',
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    name: 'Individual',
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    avatar: '/assets/avatars/avatar-fran-perez.png',
    desc: 'Company or Trust',
    name: 'Organization',
  }
];

const Page = () => {
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickContinue = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Head>
        <title>Dashboard: Company Details | Rock34x</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
        }}
      >
        <Container maxWidth="sm">
          <Typography sx={{ marginY: 2 }}>
            To comply with applicable regulations, you will be asked to submit information including your name, address, selfie, and government-issued ID image.
          </Typography>
          <Typography sx={{ marginY: 2 }}>
            Our onboarding process usually takes less than 5 minutes for most individuals, but may take longer for companies or trusts.
          </Typography>

          <Card sx={{
            px: 3, pb: 6, marginY: 4, backgroundColor: (theme) => theme.palette.mode === 'dark'
              ? 'neutral.800'
              : 'neutral.100'
          }} >
            <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center', marginY: 3 }}>
              Select your account type
            </Typography>
            <Stack spacing={3}>
              {contacts.map((contact) => (
                <Card key={contact.id}>
                  <Stack
                    alignItems="center"
                    direction="row"
                    sx={{ p: 2 }}
                    spacing={2}
                  >
                    <Avatar
                      src={contact.avatar}
                      sx={{
                        height: 60,
                        width: 60
                      }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6">
                        {contact.name}
                      </Typography>
                      <Typography variant="subtitle2">
                        {contact.desc}
                      </Typography>
                    </Box>
                    <IconButton>
                      <SvgIcon>
                        <DotsHorizontalIcon />
                      </SvgIcon>
                    </IconButton>
                  </Stack>
                </Card>
              ))}
            </Stack>
          </Card>
          <Box>
            <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{ width: '100%' }} onClick={handleClickContinue}>
              Continue
            </Button>
          </Box>
        </Container>

        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="sm"
        >
          <Paper
            elevation={12}
            sx={{ p: 3 }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: 'success.lightest',
                  color: 'warning.main',
                  mr: 2
                }}
              >
                <SvgIcon>
                  <WarningIcon />
                </SvgIcon>
              </Avatar>
              <Typography>
              Never share your account. Never use another person's account.
              </Typography>
            </Box>
            <Typography sx={{my:2}}>
            If you are being asked to create/open an account by a third-party for compensation or as part of a job application process, contact us immediately.
              </Typography>
            <Typography sx={{my:2}}>
            CoinList will never ask you to create an account as part of the job application process.
              </Typography>

              <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: 'success.lightest',
                  color: 'warning.main',
                  mr:2
                }}
              >
                <SvgIcon>
                  <SearchIcon />
                </SvgIcon>
              </Avatar>
              <Typography>
              By registering this account
              </Typography>
            </Box>
            <Box sx={{mx:2}}>
              <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: 'success.lightest',
                  color: 'warning.main',
                  m: 2
                }}
              >
                <SvgIcon>
                  <CheckIcon />
                </SvgIcon>
              </Avatar>
              <Typography>
              I agree to the Terms of Service and the Privacy Policy
              </Typography>
            </Box>
              <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: 'success.lightest',
                  color: 'warning.main',
                  m: 2
                }}
              >
                <SvgIcon>
                  <CheckIcon />
                </SvgIcon>
              </Avatar>
              <Typography>
              I agree that this account is not a foreign financial institution or foreign shell bank
              </Typography>
            </Box>
              <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: 'success.lightest',
                  color: 'warning.main',
                  m: 2
                }}
              >
                <SvgIcon>
                  <CheckIcon />
                </SvgIcon>
              </Avatar>
              <Typography>
              I agree not to fund this account from a private banking account
              </Typography>
            </Box>
              <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: 'success.lightest',
                  color: 'warning.main',
                  m: 2
                }}
              >
                <SvgIcon>
                  <CheckIcon />
                </SvgIcon>
              </Avatar>
              <Typography>
              I agree that I am not a politically exposed person (PEP) or immediate family or close associate of a politically exposed person
              </Typography>
            </Box>
              <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: 'success.lightest',
                  color: 'warning.main',
                  m: 2
                }}
              >
                <SvgIcon>
                  <CheckIcon />
                </SvgIcon>
              </Avatar>
              <Typography>
              I agree that I am not—nor is anyone in my immediate household—associated with FINRA, a FINRA-member broker-dealer, or the SEC
              </Typography>
            </Box>
            </Box>
              <Button
                fullWidth
                size="large"
                variant="contained"
                sx={{my:2}}
              >
                <CheckIcon sx={{mr:1}}/> I agree to the above terms
              </Button>
              <Button
                fullWidth
                size="large"
                variant="contained"
              >
                <CloseIcon sx={{mr:1}}/>Decline
              </Button>
          </Paper>
        </Dialog>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
