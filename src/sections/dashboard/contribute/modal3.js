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
  }
];
const contacts2 = [
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
  }
];

export const Modal3 = () => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === "dark" ? "neutral.800" : "neutral.100",
      borderRadius: "5px"
    }}
  >
    <Paper
      elevation={12}
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 2,
      }}
    >
      <Typography variant="h6">Contribution for Universal Project</Typography>
      <Box sx={{ mt: 2 }}>
        <List disablePadding sx={{borderBottom:"2px solid grey"}}>
          {contacts.map((contact) => {
            return (
              <ListItem
                disableGutters
                key={contact.id}
                sx={{
                  marginX:2,
                  "&:hover, &:focus": {
                    backgroundColor: (theme) => theme.palette.action.hover,
                  },
                }}
              >
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
                  {contact.field}
                </Typography>
              </ListItem>
            );
          })}
          </List>
          <List>
          {contacts2.map((contact) => {
            return (
              <ListItem
                disableGutters
                key={contact.id}
                sx={{
                  marginX:2,
                  "&:hover, &:focus": {
                    backgroundColor: (theme) => theme.palette.action.hover,
                  },
                }}
              >
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
                  {contact.field}
                </Typography>
              </ListItem>
            );
          })}
        </List>
        {/* Cancel Button */}
        <Box textAlign="center">
        <Button
        color="primary"
        size="medium"
        variant="contained"
      >
        Cancel
      </Button>
        </Box>
      </Box>
    </Paper>
  </Box>
);
