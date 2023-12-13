import PropTypes from 'prop-types';
import {Box,Button,Avatar, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { PropertyList } from '../../../components/property-list';
import { PropertyListItem } from '../../../components/property-list-item';
import { getInitials } from '../../../utils/get-initials';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ShopIcon from '@mui/icons-material/Shop';
import LinkIcon from '@mui/icons-material/Link';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';

export const CompanySummary = (props) => {
  const { company, ...other } = props;

  return (
    <Card {...other}>
      <CardContent>
        <Typography
          color="text.secondary"
          component="p"
          sx={{ mb: 2 }}
        >
          Deal Info
        </Typography>
        <PropertyList>
          <PropertyListItem
            align="Horizontal"
            label="Token Price"
            sx={{
              px: 0,
              py: 1
            }}
            value={company.tokenPrice}
          />
          <PropertyListItem
            align="horizontal"
            label="Vesting"
            sx={{
              px: 0,
              py: 1
            }}
          >
            {(company.locations || []).map((location) => (
              <Typography
                key={location}
                color="text.secondary"
                variant="body2"
              >
                {location}
              </Typography>
            ))}
          </PropertyListItem>
          <Box sx={{ marginY:2}}>
          <Button
            color="primary"
            size="small"
            variant="contained"
            sx={{ marginX: 1 }}
          >
          <ShopIcon/>
            Medium
            <OpenInNewIcon/>
          </Button>
          <Button
            color="primary"
            size="small"
            variant="contained"
            sx={{ marginX: 1 }}
          >
          <LinkIcon/>
            Website
            <OpenInNewIcon/>
          </Button>
          </Box>
          <Box>
          <Button
            color="primary"
            size="small"
            variant="contained"
            sx={{ marginX: 1 }}
          >
          <TwitterIcon/>
            Twitter
            <OpenInNewIcon/>
          </Button>
          <Button
            color="primary"
            size="small"
            variant="contained"
            sx={{ marginX: 1 }}
          >
          <TelegramIcon/>
            Telegram
            <OpenInNewIcon/>
          </Button>
          </Box>
        </PropertyList>
      </CardContent>
    </Card>
  );
};

CompanySummary.propTypes = {
  // @ts-ignore
  company: PropTypes.object.isRequired
};
