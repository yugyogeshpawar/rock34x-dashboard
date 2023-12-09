import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";

import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Modal3 } from './modal3';
import { Modal2 } from './modal2';
import { Modal1 } from './modal1';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};


export const JobCreateForm = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "neutral.800" : "neutral.100",
        p: 3,
      }}
    >
      <Container maxWidth="lg">
        <Card>
          <CardHeader
            subheader={<Typography variant="h4">Universal Project</Typography>}
            sx={{ pb: 0 }}
            title={
              <Typography color="text.secondary"
                variant="overline">
                Fundraising
              </Typography>
            }
          />
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <Typography variant="h6">$0.01</Typography>
              <Typography color="text.secondary"
                variant="overline">
                Seed Round
              </Typography>
            </div>
            <div>
              <Typography variant="h6">$33,200/$50,000</Typography>
              <Typography color="text.secondary"
                variant="overline">
                Raised in pool Main Investors
              </Typography>
            </div>
          </CardContent>
        </Card>

        <Card sx={{ marginY: 2 }}>
          <CardHeader
            subheader={
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Invest
                <Typography
                  variant="h6"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  0x8855..87a4
                  <Button onClick={handleOpen}>Open</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                  >
                    <Box sx={style}>
                      <Modal1 />
                    </Box>
                  </Modal>
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="h6">
                Main Investors
                <Typography sx={{ display: "flex" }}>
                  <Typography variant="h6"
                    sx={{ marginRight: 2 }}>
                    Min $100.00
                  </Typography>
                  <Typography variant="h6"
                    sx={{ marginRight: 2 }}>
                    Max $10,000.00
                  </Typography>
                  <Typography variant="h6"
                    sx={{ marginRight: 2 }}>
                    Fee 10.00%
                  </Typography>
                </Typography>
              </Typography>
            </Typography>

            <Typography
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginY: 3,
              }}
            >
              <Typography variant="h6">Raised in pool</Typography>
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center" }}
              >
                $33,200.00/$50,000.00
              </Typography>
            </Typography>

            <Typography
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6">Amount</Typography>
                <Typography variant="h4">$ 0</Typography>
              </Typography>
              <Typography>
              <div>
              <Button onClick={handleOpen2}>Open Modal</Button>
              <Modal
                open={open2}
                onClose={handleClose2}
              >
                <Box sx={style}>
                <Modal2/>
                </Box>
              </Modal>
            </div>
                <Typography sx={{ display: "flex", marginX: 2 }}>
                  <Typography variant="h6">Max(t22)</Typography>
                  <Typography variant="h6">Bal 122.60</Typography>
                </Typography>
              </Typography>
            </Typography>
            <Box textAlign="center">
              <Button
                color="primary"
                size="medium"
                variant="contained"
                sx={{ paddingX: 4 }}
                onClick={handleOpen3}
              >Invest</Button>
                <Modal
                  open={open3}
                  onClose={handleClose3}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Modal3 />
                  </Box>
                </Modal>
              
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};