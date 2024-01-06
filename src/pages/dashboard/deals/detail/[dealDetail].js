import Head from "next/head";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Link,
  Stack,
  Button,
  Typography,
  IconButton,
  SvgIcon,
  List,
  ListItem,
  ListItemText,
  AvatarGroup,
} from "@mui/material";
import { Layout as DashboardLayout } from "../../../../layouts/dashboard";
import DotsHorizontalIcon from "@untitled-ui/icons-react/build/esm/DotsHorizontal";
import { Scrollbar } from "../../../../components/scrollbar";
import { paths } from "../../../../paths";
import { useMounted } from "../../../../hooks/use-mounted";
import { useDeals } from "../../../../api/deals";
import { dealsApi } from "../../../../api/deals";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DealDetailsPage = () => {
  const router = useRouter();
  const { dealDetail } = router.query;
  const { getDealById } = useDeals();
  const [deal, setDeal] = useState({});
  useEffect(() => {
    const fetchDealDetails = async () => {
      try {
        const fetchedDeal = await getDealById(dealDetail);
        setDeal(fetchedDeal);
      } catch (error) {
        console.error("Error fetching deal details:", error);
      }
    };

    if (dealDetail) {
      fetchDealDetails();
    }
  }, [dealDetail, getDealById]);// Assuming getDealById returns a deal based on the deal id


  return (
    <>
      <Head>
        <title>Deal Details | Your App Name</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Card sx={{ marginY: 2 }}>
            <CardHeader
              title={deal.title}
              subheader={`ID: ${dealDetail}`}
              action={
                <IconButton>
                  <SvgIcon>
                    <DotsHorizontalIcon />
                  </SvgIcon>
                </IconButton>
              }
            />
            <Divider />
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              {deal.members && Array.isArray(deal.members) && (
                <AvatarGroup max={3} sx={{ marginRight: 2, marginBottom: 5 }}>
                  {deal.members.map((member) => (
                    <Avatar key={member.name} src={member.avatar} />
                  ))}
                </AvatarGroup>
              )}
              <Stack spacing={2}>
                <Typography variant="body1">{deal.desc}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={paths.dashboard.deals.dealsDetails}
                  sx={{ alignSelf: 'flex-start', mt: 2 }}
                >
                  {deal.button}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};


DealDetailsPage.getLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default DealDetailsPage;
