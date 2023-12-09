
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import BasicModal from "./modal";



export const JobCreateForm = () => {

  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "neutral.800" : "neutral.100",
        p: 3,
      }}
    >
      <Container maxWidth="lg">
        <Card>
          <CardHeader
            subheader={<Typography variant="h4">Universal Project</Typography>}
            sx={{ pb: 0 }}
            title={
              <Typography color="text.secondary" 
              variant="overline">
                Fundraising
              </Typography>
            }
          />
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <Typography variant="h6">$0.01</Typography>
              <Typography color="text.secondary"
               variant="overline">
                Seed Round
              </Typography>
            </div>
            <div>
              <Typography variant="h6">$33,200/$50,000</Typography>
              <Typography color="text.secondary" 
              variant="overline">
                Raised in pool Main Investors
              </Typography>
            </div>
          </CardContent>
        </Card>

        <Card sx={{ marginY: 2 }}>
          <CardHeader
            subheader={
              <Typography
                variant="h4"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Invest
                <Typography
                  variant="h6"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  0x8855..87a4
                  <BasicModal />
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="h6">
                Main Investors
                <Typography sx={{ display: "flex" }}>
                  <Typography variant="h6" 
                  sx={{ marginRight: 2 }}>
                    Min $100.00
                  </Typography>
                  <Typography variant="h6"
                   sx={{ marginRight: 2 }}>
                    Max $10,000.00
                  </Typography>
                  <Typography variant="h6" 
                  sx={{ marginRight: 2 }}>
                    Fee 10.00%
                  </Typography>
                </Typography>
              </Typography>
            </Typography>

            <Typography
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginY: 3,
              }}
            >
              <Typography variant="h6">Raised in pool</Typography>
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center" }}
              >
                $33,200.00/$50,000.00
              </Typography>
            </Typography>

            <Typography
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6">Amount</Typography>
                <Typography variant="h4">$ 0</Typography>
              </Typography>
              <Typography>
                <BasicModal />
                <Typography sx={{ display: "flex", marginX: 2 }}>
                  <Typography variant="h6">Max(t22)</Typography>
                  <Typography variant="h6">Bal 122.60</Typography>
                </Typography>
              </Typography>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};
