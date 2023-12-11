import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import * as React from "react";
import Modal from "@mui/material/Modal";
import { Modal3 } from "./modal3";
import { Modal2 } from "./modal2";
import { Modal1 } from "./modal1";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
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

  const contacts31 = [
    {
      id: "5e8877da9a65442b11551975",
      name: "Total amount",
      field: "100 B-USDT",
    },
    {
      id: "5e8680e60cba5019c5ca6fda",
      name: "Receipient",
      field: "Universal Project",
    },
    {
      id: "5e8680e60cba5019c5ca6fda",
      name: "Receiving wallet",
      field: "0x8855..87a4",
    },
  ];
  const contacts32 = [
    {
      id: "5e8877da9a65442b11551975",
      name: "Network",
      field: "Binance Smart Chain",
    },
    {
      id: "5e8680e60cba5019c5ca6fda",
      name: "Token",
      field: "B-USDT",
    },
    {
      id: "5e8680e60cba5019c5ca6fda",
      name: "From Wallet",
      field: "0x8855..87a4",
    },
  ];

  const contacts = [
    {
      id: "5e8877da9a65442b11551975",
      avatar: "/assets/avatars/avatar-iulia-albu.png",
      name: "Ethereum",
    },
    {
      id: "5e8680e60cba5019c5ca6fda",
      avatar: "/assets/avatars/avatar-nasimiyu-danai.png",
      name: "Binance Smart Chain",
    },
  ];

  const contacts2 = [
    {
      id: "5e8877da9a65442b11551975",
      avatar: "/assets/avatars/avatar-iulia-albu.png",
      price: 122.8,
      name: "B-USDT",
    },
    {
      id: "5e8680e60cba5019c5ca6fda",
      avatar: "/assets/avatars/avatar-nasimiyu-danai.png",
      price: 0.97,
      name: "B-USDC",
    },
    {
      id: "5e8680e60cba5019c5ca6fda",
      avatar: "/assets/avatars/avatar-nasimiyu-danai.png",
      price: 1.01,
      name: "BUSD",
    },
  ];

  const [seleced1, setSelected] = React.useState(contacts[0]);

  const [seleced2, setSelected2] = React.useState(contacts2[0]);

  console.log(seleced1.name);

  const ChangeSelected1 = (set) => {
    setSelected(set);
    handleClose();
  };
  const ChangeSelected2 = (set) => {
    setSelected2(set);
    handleClose2();
  };

  return (
    <Box
      sx={{
        marginTop: 3,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "neutral.800" : "neutral.100",
      }}
    >
      <Container maxWidth="lg">
        <Card>
          <CardHeader
            subheader={<Typography variant="h4">Universal Project</Typography>}
            sx={{ pb: 0 }}
            title={
              <Typography color="text.secondary" variant="overline">
                Fundraising
              </Typography>
            }
          />
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Box>
              <Typography variant="h6">$0.01</Typography>
              <Typography color="text.secondary" variant="overline">
                Seed Round
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6">$33,200/$50,000</Typography>
              <Typography color="text.secondary" variant="overline">
                Raised in pool Main Investors
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ marginY: 2 }}>
          <CardHeader
            subheader={
              <Typography
                variant="h4"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                Invest
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>0x8855..87a4</Box>
                  <Button
                    color="primary"
                    size="small"
                    variant="contained"
                    sx={{ marginX: 2 }}
                    onClick={handleOpen}
                  >
                    {seleced1.name}
                    <ArrowDropDownIcon />
                  </Button>
                  <Modal open={open}>
                    <Box sx={style}>
                      <Modal1
                        ChangeSelected1={ChangeSelected1}
                        handleClose={handleClose}
                      />
                    </Box>
                  </Modal>
                </Typography>
              </Typography>
            }
          />
          <CardContent sx={{}}>
            <Typography
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="h8">
                Main Investors
                <Typography sx={{ display: "flex",flexWrap: "wrap", }}>
                  <Typography variant="h8" sx={{ marginRight: 2 }}>
                    Min $100.00
                  </Typography>
                  <Typography variant="h8" sx={{ marginRight: 2 }}>
                    Max $10,000.00
                  </Typography>
                  <Typography variant="h8" sx={{ marginRight: 2 }}>
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
                flexWrap: "wrap",
              }}
            >
              <Typography variant="h8">Raised in pool</Typography>
              <Typography
                variant="h8"
                sx={{ display: "flex", alignItems: "center" }}
              >
                $33,200.00/$50,000.00
              </Typography>
            </Typography>

            <Typography
              sx={{ display: "flex", justifyContent: "space-between",flexWrap: "wrap" }}
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
                  <Button
                    color="primary"
                    size="small"
                    variant="contained"
                    onClick={handleOpen2}
                  >
                    {seleced2.name}
                    <ArrowDropDownIcon />
                  </Button>
                  <Modal open={open2}>
                    <Box sx={style}>
                      <Modal2
                        ChangeSelected2={ChangeSelected2}
                        handleClose2={handleClose2}
                      />
                    </Box>
                  </Modal>
                <Typography sx={{ display: "flex",flexWrap: "wrap" }}>
                  <Typography variant="h8">Max(t22)</Typography>
                  <Typography variant="h8">Bal 122.60</Typography>
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
              >
                Invest
              </Button>
              <Modal
                open={open3}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Modal3
                    handleClose3={handleClose3}
                    contacts31={contacts31}
                    contacts32={contacts32}
                  />
                </Box>
              </Modal>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};
