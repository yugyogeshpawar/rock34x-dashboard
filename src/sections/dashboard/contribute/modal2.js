import React from "react";
import {
  Avatar,
  Box,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
  Button,
} from "@mui/material";

const contacts = [
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



export const Modal2 = ({ ChangeSelected2, handleClose2 }) => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === "dark" ? "neutral.800" : "neutral.100",
      borderRadius: "5px",
    }}
  >
    <Paper
      elevation={12}
      sx={{
        maxWidth: 320,
        mx: "auto",
        p: 2,
      }}
    >
      <Typography variant="h6">Select Token</Typography>
      <Box sx={{ mt: 2 }}>
        <List disablePadding>
          {contacts.map((contact) => {
            return (
              <ListItem
                disableGutters
                key={contact.id}
                sx={{
                  "&:hover, &:focus": {
                    backgroundColor: (theme) => theme.palette.action.hover,
                  },
                }}
                onClick={() => ChangeSelected2(contact)}
              >
                <ListItemAvatar>
                  <Avatar src={contact.avatar} />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Link
                      color="text.primary"
                      noWrap
                      underline="none"
                      variant="subtitle2"
                    >
                      {contact.name}
                    </Link>
                  }
                />
                <Typography
                  color="text.secondary"
                  noWrap
                  variant="caption"
                  sx={{ marginLeft: "40px" }}
                >
                  {contact.price}
                </Typography>
              </ListItem>
            );
          })}
        </List>
        {/* Cancel Button */}
        <Box textAlign="center">
          <Button color="primary" size="medium" variant="contained"
          onClick={handleClose2}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  </Box>
);
