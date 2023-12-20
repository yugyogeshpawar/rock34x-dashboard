import numeral from 'numeral';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  SvgIcon,
  Typography
} from '@mui/material';

const referrals = [
  {
    color: '#455A64',
    initials: 'GT',
    name: 'Bitcoin',
    value: 53032
  },
  {
    color: '#00BCD4',
    initials: 'TW',
    name: 'Piecoin',
    value: 39551
  },
  {
    color: '#00BCD4',
    initials: 'TW',
    name: 'BTC',
    value: 39551
  },
];

export const OverviewBest = () => (
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <CardHeader 
          action={(
            <IconButton>
              <SvgIcon>
                <DotsHorizontalIcon />
              </SvgIcon>
            </IconButton>
          )}
          title="Best Buy"
        />
        <Divider />
        <List disablePadding>
          {referrals.map((referral, index) => {
            const showDivider = index < referrals.length - 1;
            const value = numeral(referral.value).format('0,0');

            return (
              <ListItem
                divider={showDivider}
                key={referral.name}
              >
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      backgroundColor: referral.color,
                      color: 'common.white',
                      fontSize: 14,
                      fontWeight: 600
                    }}
                  >
                    {referral.initials}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={referral.name}
                  primaryTypographyProps={{ variant: 'subtitle2' }}
                />
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  {value}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </Card>
);
