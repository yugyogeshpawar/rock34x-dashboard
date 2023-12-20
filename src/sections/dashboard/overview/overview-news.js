// Import necessary modules
import { formatDistanceToNowStrict, subHours } from 'date-fns';
import { Avatar, Box, Card, CardHeader, Link, Stack, Typography } from '@mui/material';

// Get the current date
const now = new Date();

// Sample crypto news data
const cryptoNews = [
  {
    id: '1',
    author: {
      avatar: '/assets/deal-icon/icon.png',
      name: 'Jane Doe'
    },
    headline: 'Major Blockchain Conference Scheduled for Next Month',
    createdAt: subHours(now, 1).getTime()
  },
  {
    id: '2',
    author: {
      avatar: '/assets/deal-icon/icon2.png',
      name: 'John Smith'
    },
    headline: 'New Decentralized Finance (DeFi) Protocol Launches on Ethereum',
    createdAt: subHours(now, 3).getTime()
  },
  // {
  //   id: '3',
  //   author: {
  //     avatar: '/assets/deal-icon/icon3.png',
  //     name: 'Alice Wonder'
  //   },
  //   headline: 'Bitcoin Adoption Continues to Grow as Major Retailer Accepts BTC Payments',
  //   createdAt: subHours(now, 5).getTime()
  // },
  // Add more news items as needed
];

// React component for displaying crypto news
export const OverviewNews = () => (
  <Card 
    sx={{
      p: 2
    }}
  >
  <Link color="text.primary" href='/dashboard/cryptonews'>
    <CardHeader sx={{px:2, py:2}}
      title="Crypto News"
    />
    </Link>
    <Stack spacing={1}>
      {cryptoNews.map((news) => {
        const ago = formatDistanceToNowStrict(news.createdAt);

        return (
          <Card key={news.id}>
            <CardHeader
              avatar={<Avatar src={news.author.avatar} />}
              disableTypography
              subheader={(
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  {ago}
                  {' '}
                  ago
                </Typography>
              )}
              title={(
                <Link
                  color="text.primary"
                  variant="subtitle2"
                >
                  {news.author.name}
                </Link>
              )}
            />
            <Box
              sx={{
                pb: 2,
                px: 3
              }}
            >
              <Typography
                color="text.secondary"
                variant="body1"
              >
                {news.headline}
              </Typography>
            </Box>
          </Card>
        );
      })}
    </Stack>
  </Card>
);
