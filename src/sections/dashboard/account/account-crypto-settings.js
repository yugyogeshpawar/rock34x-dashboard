import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  SvgIcon,
  Divider,
  Stack,
  TextField,
  Checkbox,
  FormControlLabel,
  Box,
  Switch,
  List,
  Button,
  ListItem,
  ListItemText,
  AvatarGroup,
  Avatar,
  Link,
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
import React from "react";
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import { Scrollbar } from '../../../components/scrollbar';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AlertTriangleIcon from '@untitled-ui/icons-react/build/esm/AlertTriangle';
import CloseIcon from '@mui/icons-material/Close';



const coins = [
  {
    name: 'BTC'
  }
]


export const AccountCryptoSettings = () => {

  const [openDialog, setOpenDialog] = React.useState(false);
  const [openDialog2, setOpenDialog2] = React.useState(false);

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


  return (
    <>
      <Card sx={{ marginY: 2 }}>
        <CardHeader
          action={(
            <Button variant="contained" color="primary" sx={{ textWrap: 'nowrap' }} onClick={handleClickContinue}>
              Add an address
            </Button>
          )}
          title="Your addresses"
        />
        <Divider />
        <Scrollbar>
          <List sx={{ minWidth: 500, mx: 1 }}>
            <ListItem sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <Typography>
                Add an address to make it easier to send crypto to addresses you know and trust
              </Typography>
            </ListItem>
          </List>
        </Scrollbar>
      </Card>

      <Card sx={{ marginY: 2 }}>
        <CardHeader
          action={(
            <IconButton >
              <Button variant="contained" color="primary" sx={{ textWrap: 'nowrap' }} onClick={handleClickContinue2}>
                <AccountBalanceWalletIcon sx={{marginRight:1}} />Link non-custodial wallet
              </Button>
            </IconButton>
          )}
          title="Linked Wallets"
        />
        <Divider />
        <Scrollbar>
          <List sx={{ minWidth: 500, mx: 1 }}>
            <ListItem sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <Typography>
              </Typography>
            </ListItem>
          </List>
        </Scrollbar>
      </Card>


      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
      >
        <Stack
          sx={{ p: 3 }}
          spacing={3}
          width={400}
        >
          <TextField
            fullWidth
            label="Asset"
            select
            SelectProps={{ native: true }}
          >
            {coins.map((coin) => (
              <option
                key={coin}
                value={coin}
              >
                {coin.name}
              </option>
            ))}
          </TextField>
          <Grid
            xs={12}
            sm={6}
          >
            <TextField
              fullWidth
              label="Nickname"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
          >
            <TextField
              fullWidth
              label="Address"
            />
          </Grid>
        </Stack>
        <Box
          sx={{
            pb: 3,
            px: 3
          }}
        >
          <Button
            fullWidth
            variant="contained"
            onClick={handleCloseDialog}
          >
            Add Address
          </Button>
        </Box>
      </Dialog>




      <Dialog
        open={openDialog2}
        onClose={handleCloseDialog2}
        maxWidth="md"
      >
        
        <Stack
          sx={{ p: 3 }}
          spacing={3}
          width={400}
        >
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
        <Typography variant='h7'>
          Link Wallet
          </Typography>
        <Typography>
          <CloseIcon sx={{cursor:'pointer'}}onClick={handleCloseDialog2}/>
          </Typography>
          </Box>
          <Card sx={{px:1}}>
          <Typography sx={{my:1}} variant='subtitle2'>
          <Checkbox sx={{m:0,p:0}}></Checkbox>
            I consent to connecting my wallet. By connecting my wallet, I acknowledge I have read and accept the Privacy Policy and Terms of Service. I understand that CoinList will receive the following
            </Typography>
          <Typography variant='subtitle2'>
          Wallet Address
          </Typography>
          <Typography variant='subtitle2'>
          Signed signature request
          </Typography>
            </Card>
          <Grid
            xs={12}
            sm={6}
          >
            <TextField
              fullWidth
              label="MetaMask"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
          >
            <TextField
              fullWidth
              label="Wallet Connect"
            />
          </Grid>
        </Stack>
      </Dialog>
    </>
  )
};