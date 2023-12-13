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

export const Modal3 = ({ handleClose3, contacts31, contacts32 }) => (
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
        maxWidth: 800,
        mx: "auto",
        p: 2,
      }}
    >
      <Typography variant="h6" sx={{ px: 6 }}>
        Contribution for Universal Project
      </Typography>
      <Box sx={{ mt: 2 }}>
        <List disablePadding sx={{ borderBottom: "2px solid grey" }}>
          {contacts31.map((contact) => {
            return (
              <ListItem disableGutters key={contact.id}>
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
                <Typography color="text.secondary" noWrap variant="caption">
                  {contact.field}
                </Typography>
              </ListItem>
            );
          })}
        </List>
        <List>
          {contacts32.map((contact) => {
            return (
              <ListItem disableGutters key={contact.id}>
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
            onClick={handleClose3}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  </Box>
);
