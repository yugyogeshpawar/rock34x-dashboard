import { formatDistanceToNowStrict, subDays, subHours, subMinutes } from 'date-fns';
import {
  Avatar,
  Box,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography
} from '@mui/material';
import { Presence } from '../../../components/presence';

const now = new Date();

const contacts = [
  {
    id: '5e8877da9a65442b11551975',
    avatar: '/assets/avatars/avatar-iulia-albu.png',
    lastActivity: now.getTime(),
    name: 'B-USDT'
  },
  {
    id: '5e8680e60cba5019c5ca6fda',
    avatar: '/assets/avatars/avatar-nasimiyu-danai.png',
    lastActivity: now.getTime(),
    name: 'B-USDC'
  },
  {
    id: '5e8680e60cba5019c5ca6fda',
    avatar: '/assets/avatars/avatar-nasimiyu-danai.png',
    lastActivity: now.getTime(),
    name: 'BUSD'
  }
];

export const Modal2 = () => (
  <Box
    sx={{
      backgroundColor: (theme) => theme.palette.mode === 'dark'
        ? 'neutral.800'
        : 'neutral.100',
      borderRadius: '5px'
    }}
  >
    <Paper
      elevation={12}
      sx={{
        maxWidth: 320,
        mx: 'auto',
        p: 2
      }}
    >
      <Typography variant="h6">
        Select Token
      </Typography>
      <Box sx={{ mt: 2 }}>
        <List disablePadding>
          {contacts.map((contact) => {
            const lastActivity = !contact.isActive && contact.lastActivity
              ? formatDistanceToNowStrict(contact.lastActivity)
              : undefined;
            return (
              <ListItem
                disableGutters
                key={contact.id}
              >
                <ListItemAvatar>
                  <Avatar src={contact.avatar} />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={(
                    <Link
                      color="text.primary"
                      noWrap
                      underline="none"
                      variant="subtitle2"
                    >
                      {contact.name}
                    </Link>
                  )}
                />
                {lastActivity && (
                  <Typography
                    color="text.secondary"
                    noWrap
                    variant="caption"
                  >
                    {lastActivity}
                    {' '}
                    ago
                  </Typography>
                )}
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Paper>
  </Box>
);
