import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import { Box, Button, Card, CardActions, Divider, Stack, SvgIcon, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { paths } from '../../../paths';


export const OverviewTotalInvestors = (props) => {
  const { amount } = props;
  const router = useRouter();

  return (
    <Card>
      <Stack
        alignItems="center"
        direction={{
          xs: 'column',
          sm: 'row'
        }}
        spacing={3}
        sx={{
          px: 4,
          py: 3
        }}
      >
        <div>
          <img
            src="/assets/iconly/iconly-glass-tick.svg"
            width={48}
          />
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            Total Investors
          </Typography>
          <Typography
            color="text.primary"
            variant="h4"
          >
            {amount}
          </Typography>
        </Box>
      </Stack>
      <Divider />
      <CardActions>
      <Button
        color="inherit"
        endIcon={(
          <SvgIcon>
            <ArrowRightIcon />
          </SvgIcon>
        )}
        size="small"
        onClick={() => router.push(paths.dashboard.investors.index)}
      >
        See all investors
      </Button>
    </CardActions>
    </Card>
  );
};

OverviewTotalInvestors.propTypes = {
  amount: PropTypes.number.isRequired
};
