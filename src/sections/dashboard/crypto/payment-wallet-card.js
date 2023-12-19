import PropTypes from "prop-types";
import { Box, Stack, Typography } from "@mui/material";
import numeral from "numeral";

// const walletBg = {
//   Mastercard: '/assets/wallets/logo-mastercard-2.png',
//   VISA: '/assets/wallets/wallet-visa.png'
// };

const walletGradient = {
  Mastercard: "linear-gradient(180deg, #ff0000 0%, #8b0000 100%)", // Red to Dark Red gradient
  VISA: "linear-gradient(180deg, #ff0000 0%, #8b0000 100%)", // Red to Dark Red gradient
};

const walletIcon = {
  Mastercard: "/assets/wallets/logo-mastercard-2.png",
  VISA: "/assets/wallets/logo-visa.svg",
};

export const PaymentWalletCard = (props) => {
  const { brand, cardNumber, holderName, expiryDate, id, ...other } = props;
  const { chartSeries,labels } = props;
  const totalAmount = chartSeries.reduce((acc, item) => (acc += item), 0);
  const formattedTotalAmount = numeral(totalAmount).format("$0,0.00");

  return (
    <Box
      sx={{
        // backgroundColor: 'primary.main',
        // backgroundImage: `url("${walletBg[brand]}")`,
        background: walletGradient[brand],
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        py: 6,
        px: 4,
        borderRadius: 8,
        boxShadow: 4,
      }}
      {...other}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          height: "10vh",
        }}
      >
        <img src="/assets/wallets/money.png" />
        <Box
          sx={{
            height: 50,
            "& img": {
              height: "100%",
            },
          }}
        >
          <img alt="" src={walletIcon[brand]} />
        </Box>
      </Box>
      <Box
        sx={{
          mt: 6,
          mb: 3,
        }}
      >
        <Stack spacing={1}>
          <Typography color="text.primary" variant="overline">
            Total balance
          </Typography>
          <Typography variant="h4" color="white">
            {formattedTotalAmount}
          </Typography>
        </Stack>
        {/*    <Typography
          sx={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%)',
            backgroundClip: 'text',
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: '0.1em',
            lineHeight: '32px',
            textFillColor: 'transparent',
          }}
        >
          {formattedTotalAmount}
        </Typography>*/}
      </Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography 
          color="text.primary" 
          variant="overline"
          fontWeight={500}
          >
            Investor Name
          </Typography>
          <Typography
            color="white"
            sx={{
              fontSize: 16,
              fontWeight: 700,
              lineHeight: "24px",
              mt: 1,
              textShadow: "0px 1px 4px rgba(18, 109, 177, 0.58)",
            }}
          >
            {holderName}
          </Typography>
        </div>
        <Box sx={{ ml: 2 }}>
      {/*    <Typography color="white" variant="body2">
            Expiry date
          </Typography>
          <Typography
            color="white"
            sx={{
              fontSize: 16,
              fontWeight: 700,
              lineHeight: "24px",
              mt: 1,
              textShadow: "0px 1px 4px rgba(18, 109, 177, 0.58)",
            }}
          >
            {expiryDate}
        </Typography>*/}

        {chartSeries.map((item, index) => {
            const amount = numeral(item).format('$0,0.00');
            const label = labels && labels[index] !== undefined ? labels[index] : '';

            return (
              <div key={index}>
                <Typography
                  color="black" 
                  variant="overline"
                  fontWeight={500}
                >
                  {label}
                </Typography>
                <Typography
                  color="white"
                  sx={{
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: "24px",
                    mt: 1,
                    textShadow: "0px 1px 4px rgba(18, 109, 177, 0.58)",
                  }}
                >
                  {amount}
                </Typography>
              </div>
            );
          })}
        </Box>
        <Box sx={{ ml: 2 }}>
          <img src="/assets/wallets/sim.png" />
        </Box>
      </Box>
    </Box>
  );
};

PaymentWalletCard.propTypes = {
  id: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
  expiryDate: PropTypes.string.isRequired,
  holderName: PropTypes.string.isRequired,
};
