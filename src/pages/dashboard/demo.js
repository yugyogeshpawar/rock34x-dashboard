import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import ArrowLeftIcon from "@untitled-ui/icons-react/build/esm/ArrowLeft";
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
  Tab,
  Tabs,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { jobsApi } from "../../api/deals";
import { useMounted } from "../../hooks/use-mounted";
import { usePageView } from "../../hooks/use-page-view";
import { Layout as DashboardLayout } from "../../layouts/dashboard";
import { paths } from "../../paths";
import { CompanyActivity } from "../../sections/dashboard/deals/company-activity";
import { CompanyAssets } from "../../sections/dashboard/deals/company-assets";
import { ProjectInfo } from "../../sections/dashboard/deals/project-info";
import { CompanySummary } from "../../sections/dashboard/deals/company-summary";
import { getInitials } from "../../utils/get-initials";

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
          py: 4,
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
              <Typography color="inherit" variant="h3">
                Universal Project
              </Typography>
              <Typography color="neutral.500" sx={{ mt: 2 }} variant="body1">
                Post your job today for free. Promotions start at $99.
              </Typography>
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
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid xs={12} lg={8}>
              <Card>
                <CardHeader
                  disableTypography
                  title={
                    <Stack alignItems="flex-start" direction="row" spacing={2}>
                      <Avatar src={company.logo} variant="rounded">
                        {getInitials(company.name)}
                      </Avatar>
                      <Stack spacing={1}>
                        <Typography variant="h6">{company.name}</Typography>
                        <Typography variant="body2">
                          {company.shortDescription}
                        </Typography>
                      </Stack>
                    </Stack>
                  }
                />
                <Divider />
                <Tabs
                  indicatorColor="primary"
                  onChange={handleTabsChange}
                  scrollButtons="auto"
                  sx={{ px: 3 }}
                  textColor="primary"
                  value={currentTab}
                  variant="scrollable"
                >
                  {tabs.map((tab) => (
                    <Tab key={tab.value} label={tab.label} value={tab.value} />
                  ))}
                </Tabs>
                <Divider />
                <CardContent>
                  {currentTab === "overview" && (
                    <ProjectInfo company={company} />
                  )}
                  {currentTab === "activity" && (
                    <CompanyActivity activities={company.activities || []} />
                  )}
                  {currentTab === "assets" && (
                    <CompanyAssets assets={company.assets || []} />
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} lg={4}>
              <CompanySummary company={company} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
