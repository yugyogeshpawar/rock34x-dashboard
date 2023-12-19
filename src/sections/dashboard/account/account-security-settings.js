import { useCallback, useState } from 'react';
import React from "react";
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import CheckIcon from '@untitled-ui/icons-react/build/esm/Check';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Avatar,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Dialog,
  Paper,
  Tab, Tabs,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Scrollbar } from '../../../components/scrollbar';
import AlertTriangleIcon from '@untitled-ui/icons-react/build/esm/AlertTriangle';




const tabs = [
  { label: 'Step 1', value: 'step1' },
  { label: 'STEP 2', value: 'step2' },
  { label: 'STEP 3', value: 'step3' },
];

export const AccountSecuritySettings = (props) => {
  const { loginEvents } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [currentTab, setCurrentTab] = useState('step1');

  const [openDialog, setOpenDialog] = React.useState(false);
  const [openDialog2, setOpenDialog2] = React.useState(false);


  const handleTabsChange = useCallback((event, value) => {
    setCurrentTab(value);
  }, []);

  const handleClickContinue = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleClickContinue2 = () => {
    setOpenDialog2(true);
  };

  const handleCloseDialog2 = () => {
    setOpenDialog2(false);
  };


  const handleEdit = useCallback(() => {
    setIsEditing((prevState) => !prevState);
  }, []);

  return (
    <Stack spacing={4}>
      <Card>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              xs={12}
              md={4}
            >
              <Typography variant="h6">
                Change password
              </Typography>
            </Grid>
            <Grid
              xs={12}
              sm={12}
              md={8}
            >
              <Stack
                alignItems="center"
                direction="row"
                spacing={3}
              >
                <TextField
                  disabled={!isEditing}
                  label="Password"
                  type="password"
                  defaultValue="Thebestpasswordever123#"
                  sx={{
                    flexGrow: 1,
                    ...(!isEditing && {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderStyle: 'dotted'
                      }
                    })
                  }}
                />
                <Button onClick={handleEdit}>
                  {isEditing ? 'Save' : 'Edit'}
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Multi Factor Authentication" />
        <CardContent sx={{ pt: 0 }}>
          <Grid
            container
            spacing={4}
          >
            <Grid
              xs={12}
              sm={6}
            >
              <Card
                sx={{ height: '100%' }}
                variant="outlined"
              >
                <CardContent>
                  <Box
                    sx={{
                      display: 'block',
                      position: 'relative'
                    }}
                  >
                    <Box
                      sx={{
                        '&::before': {
                          backgroundColor: 'error.main',
                          borderRadius: '50%',
                          content: '""',
                          display: 'block',
                          height: 8,
                          left: 4,
                          position: 'absolute',
                          top: 7,
                          width: 8,
                          zIndex: 1
                        }
                      }}
                    >
                      <Typography
                        color="error"
                        sx={{ pl: 3 }}
                        variant="body2"
                      >
                        Off
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    sx={{ mt: 1 }}
                    variant="subtitle2"
                  >
                    Authenticator App
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ mt: 1 }}
                    variant="body2"
                  >
                    Use an authenticator app to generate one time security codes.
                  </Typography>
                  <Box sx={{ mt: 4 }}>
                    <Button
                      endIcon={(
                        <SvgIcon>
                          <ArrowRightIcon />
                        </SvgIcon>
                      )}
                      variant="outlined"
                      onClick={handleClickContinue2}
                    >
                      Set Up
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              sm={6}
              xs={12}
            >
              <Card
                sx={{ height: '100%' }}
                variant="outlined"
              >
                <CardContent>
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      sx={{
                        '&::before': {
                          backgroundColor: 'error.main',
                          borderRadius: '50%',
                          content: '""',
                          display: 'block',
                          height: 8,
                          left: 4,
                          position: 'absolute',
                          top: 7,
                          width: 8,
                          zIndex: 1
                        }
                      }}
                    >
                      <Typography
                        color="error"
                        sx={{ pl: 3 }}
                        variant="body2"
                      >
                        Off
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    sx={{ mt: 1 }}
                    variant="subtitle2"
                  >
                    Text Message
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ mt: 1 }}
                    variant="body2"
                  >
                    Use your mobile phone to receive security codes via SMS.
                  </Typography>
                  <Box sx={{ mt: 4 }}>
                    <Button
                      endIcon={(
                        <SvgIcon>
                          <ArrowRightIcon />
                        </SvgIcon>
                      )}
                      variant="outlined"
                    >
                      Set Up
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          title="Login history"
          subheader="Your recent login activity"
        />
        <Scrollbar>
          <Table sx={{ minWidth: 500 }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  Login type
                </TableCell>
                <TableCell>
                  IP Address
                </TableCell>
                <TableCell>
                  Client
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loginEvents.map((event) => {
                const createdAt = format(event.createdAt, 'HH:mm a MM/dd/yyyy');

                return (
                  <TableRow
                    key={event.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>
                      <Typography variant="subtitle2">
                        {event.type}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="body2"
                      >
                        on {createdAt}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {event.ip}
                    </TableCell>
                    <TableCell>
                      {event.userAgent}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

        </Scrollbar>
      </Card>
      <Card>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              xs={12}
              md={4}
            >
              <Typography variant="h6">
                Delete Account
              </Typography>
            </Grid>
            <Grid
              xs={12}
              md={8}
            >
              <Stack
                alignItems="flex-start"
                spacing={3}
              >
                <Typography variant="subtitle1">
                  Delete your account and all of your source data. This is irreversible.
                </Typography>
                <Button
                  color="error"
                  variant="outlined"
                  onClick={handleClickContinue}
                >
                  Delete account
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>





      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
      >
        <Paper elevation={12}>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: 'flex',
              p: 3
            }}
          >
            <Avatar
              sx={{
                backgroundColor: 'error.lightest',
                color: 'error.main'
              }}
            >
              <SvgIcon>
                <AlertTriangleIcon />
              </SvgIcon>
            </Avatar>
            <div>
              <Typography variant="h5">
                Delete account
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ mt: 1 }}
                variant="body2"
              >
                Are you sure you want to delete your account? All of
                your data will be permanently removed.
                This action cannot be undone.
              </Typography>
            </div>
          </Stack>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              pb: 3,
              px: 3
            }}
          >
            <Button
              color="inherit"
              sx={{ mr: 2 }}
              onClick={handleCloseDialog}
            >
              Cancel
            </Button>
            <Button
              sx={{
                backgroundColor: 'error.main',
                '&:hover': {
                  backgroundColor: 'error.dark'
                }
              }}
              variant="contained"
            >
              Delete
            </Button>
          </Box>
        </Paper>
      </Dialog>



      <Dialog
        open={openDialog2}
        onClose={handleCloseDialog2}
        maxWidth="sm"
      >
        <Paper
          elevation={12}
          sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box>
            <Tabs
              indicatorColor="primary"
              onChange={handleTabsChange}
              scrollButtons="auto"
              textColor="primary"
              value={currentTab}
              variant="scrollable"
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab.value}
                  label={tab.label}
                  value={tab.value}
                />
              ))}
            </Tabs>
          </Box>
          {currentTab === 'step1' && (
            <>
            <Typography variant="h6" sx={{ mt: 2 }}>
            Get an authentication app
            </Typography>
            <Typography
            color="text.secondary"
            sx={{ mt: 2 }}
            variant="body2"
            >
            Download and install<br />
            Google Authenticator (Android · iOS),<br />
            Duo Mobile (Android · iOS), or<br />
            Microsoft Authenticator (Android · iOS)<br />
            for your phone or tablet.<br />
            </Typography>
            </>
            )}
            {currentTab === 'step2' && (
              <>
              <Typography variant="h6" sx={{ mt: 2 }}>
              Scan this QR code
              </Typography>
              <Typography
              color="text.secondary"
              sx={{ mt: 2 }}
              variant="body2"
              >
              Open the authentication app, tap the "+" icon in <br/>the top right of the app, and scan this QR code<br/> image with your phone camera.
              </Typography>

              </>
              )}
              {currentTab === 'step3' && (
                <>
                <Typography variant="h6" sx={{ mt: 2 }}>
                Enter code generated by your app
                </Typography>
                <Typography
                color="text.secondary"
                sx={{ mt: 2 }}
                variant="body2"
                >
                Once the QR code is scanned, enter the 6-digit <br/> code generated by your authentication app.
                </Typography>
                <Typography variant="h8" sx={{ mt: 2 }}>
                AUTHENTICATION CODE
                </Typography>
                <Box maxWidth="sm">
                  <Grid
                    xs={12}
                    sm={6}
                  >
                    <TextField
                      
                      label="Code"
                    />
                  </Grid>
              </Box>
                <Button
                fullWidth
                size="large"
                sx={{ mt: 4 }}
                variant="contained"
                onClick={handleCloseDialog2}
                >
                Enable
                </Button>
                </>
                )}
            </Paper>
      </Dialog>
    </Stack>



  );
};

AccountSecuritySettings.propTypes = {
  loginEvents: PropTypes.array.isRequired
};
