import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import ArrowLeftIcon from "@untitled-ui/icons-react/build/esm/ArrowLeft";
import {
  Avatar,
  Box,

  CardHeader,
  Container,
  Divider,
  Link,
  Stack,
  Button,
  Tab,
  Tabs,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { jobsApi } from "../../../api/jobs";
import { useMounted } from "../../../hooks/use-mounted";
import { usePageView } from "../../../hooks/use-page-view";
import { Layout as DashboardLayout } from "../../../layouts/dashboard";
import { paths } from "../../../paths";


const tabs = [
  { label: "Project info", value: "overview" },
  { label: "Activity", value: "activity" },
  { label: "Form info", value: "assets" },
];

const useCompany = () => {
  const isMounted = useMounted();
  const [company, setCompany] = useState(null);

  const getCompany = useCallback(async () => {
    try {
      const response = await jobsApi.getCompany();

      if (isMounted()) {
        setCompany(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(
    () => {
      getCompany();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return company;
};

const Page = () => {
  const company = useCompany();
  const [currentTab, setCurrentTab] = useState("overview");

  usePageView();

  const handleTabsChange = useCallback((event, value) => {
    setCurrentTab(value);
  }, []);

  if (!company) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Dashboard: Company Details | Rock34x</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
        }}
      >
        <Container maxWidth="lg">
          <Grid
            alignItems="center"
            container
            sx={{
              backgroundColor: "neutral.900",
              borderRadius: 1,
              color: "common.white",
              px: 4,
              py: 8,
            }}
          >
            <Grid xs={12} sm={7}>
              <Typography color="text.secondary" >
                Fundraising
              </Typography>
              <Typography color="inherit" variant="h3">
                Universal Project
              </Typography>
              <Box sx={{ display: 'flex', justifyContent:'space-between', marginY:3}}>
              <Box>
              <Typography variant="h6">$0.01</Typography>
              <Typography color="text.secondary">
                Seed Round
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6">$33,200/$100,000</Typography>
              <Typography color="text.secondary">
                Currently raised
              </Typography>
            </Box>
            </Box>
              <Button
                color="primary"
                component={NextLink}
                href={paths.dashboard.contribute}
                size="large"
                sx={{ mt: 3 }}
                variant="contained"
              >
                Contribute
              </Button>
            </Grid>
            <Grid
              sm={5}
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
                justifyContent: "center",
              }}
            >
              <img src="/assets/iconly/iconly-glass-shield.svg" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
