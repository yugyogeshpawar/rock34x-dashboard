import { formatDistanceToNowStrict, subHours } from 'date-fns';
import { Avatar, Box, Card, CardHeader, Link, Rating, Stack, Typography } from '@mui/material';

const now = new Date();

const reviews = [
  {
    id: '5f0366cd843161f193ebadd4',
    author: {
      avatar: '/assets/avatars/avatar-marcus-finn.png',
      name: 'Marcus Finn'
    },
    comment: 'Great company, providing an awesome & easy to use product.',
    createdAt: subHours(now, 2).getTime(),
    value: 5
  },
];

export const OverviewNews = () => (
  <Card
    sx={{
      p: 3
    }}
  >
  <Typography variant='h6' sx={{mx:1,my:2}}>
  Crypto News
  </Typography>
    <Stack spacing={3}>
      {reviews.map((review) => {
        const ago = formatDistanceToNowStrict(review.createdAt);

        return (
          <Card key={review.id}>
            <CardHeader
              avatar={<Avatar src={review.author.avatar} />}
              disableTypography
              subheader={(
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexWrap: 'wrap',
                    mt: 1
                  }}
                >
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      mr: 1
                    }}
                  >
                    <Rating
                      readOnly
                      value={5}
                    />
                    <Typography
                      sx={{ ml: 1 }}
                      variant="subtitle2"
                    >
                      {review.value}
                    </Typography>
                  </Box>
                  <Typography
                    color="text.secondary"
                    variant="body2"
                  >
                    | For
                    {' '}
                    <Link
                      color="text.primary"
                      variant="subtitle2"
                    >
                      Low Budget
                    </Link>
                    {' '}
                    |
                    {' '}
                    {ago}
                    {' '}
                    ago
                  </Typography>
                </Box>
              )}
              title={(
                <Link
                  color="text.primary"
                  variant="subtitle2"
                >
                  {review.author.name}
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
                {review.comment}
              </Typography>
            </Box>
          </Card>
        );
      })}
    </Stack>
  </Card>
);
