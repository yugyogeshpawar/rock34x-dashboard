import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import PlusIcon from "@untitled-ui/icons-react/build/esm/Plus";
import {
  Box,
  Button,
  Container,
  Stack,
  Tab,
  Divider,
  Tabs,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { usePageView } from "../../hooks/use-page-view";
import NextLink from "next/link";
import { paths } from "../../paths";
import { useSettings } from "../../hooks/use-settings";
import { customersApi } from "../../api/customers";
import { useMounted } from "../../hooks/use-mounted";
import { Layout as DashboardLayout } from "../../layouts/dashboard";
import { AnalyticsStats } from "../../sections/dashboard/analytics/analytics-stats";
import { AnalyticsMostVisited } from "../../sections/dashboard/analytics/analytics-most-visited";
import { AnalyticsSocialSources } from "../../sections/dashboard/analytics/analytics-social-sources";
import { AnalyticsTrafficSources } from "../../sections/dashboard/analytics/analytics-traffic-sources";
import { AnalyticsVisitsByCountry } from "../../sections/dashboard/analytics/analytics-visits-by-country";
import { CustomerBasicDetails } from "../../sections/dashboard/demo/customer-basic-details";
import { CustomerPayment } from "../../sections/dashboard/customer/customer-payment";
import { CustomerDataManagement } from "../../sections/dashboard/customer/customer-data-management";
import { CustomerEmailsSummary } from "../../sections/dashboard/customer/customer-emails-summary";
import { CustomerInvoices } from "../../sections/dashboard/customer/customer-invoices";
import { CustomerLogs } from "../../sections/dashboard/customer/customer-logs";
import ArrowRightIcon from "@untitled-ui/icons-react/build/esm/ArrowRight";

const tabs = [
  { label: "Details", value: "details" },
  { label: "Invoices", value: "invoices" },
  { label: "Logs", value: "logs" },
];

const useCustomer = () => {
  const isMounted = useMounted();
  const [customer, setCustomer] = useState(null);

  const getCustomer = useCallback(async () => {
    try {
      const response = await customersApi.getCustomer();
      console.log(response);

      if (isMounted()) {
        setCustomer(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(
    () => {
      getCustomer();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return customer;
};

const useInvoices = () => {
  const isMounted = useMounted();
  const [invoices, setInvoices] = useState([]);

  const getInvoices = useCallback(async () => {
    try {
      const response = await customersApi.getInvoices();

      if (isMounted()) {
        setInvoices(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(
    () => {
      getInvoices();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return invoices;
};

const useLogs = () => {
  const isMounted = useMounted();
  const [logs, setLogs] = useState([]);

  const getLogs = useCallback(async () => {
    try {
      const response = await customersApi.getLogs();

      if (isMounted()) {
        setLogs(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(
    () => {
      getLogs();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return logs;
};

const Page = () => {
  const customer = useCustomer();
  const settings = useSettings();
  const invoices = useInvoices();
  const logs = useLogs();
  const [currentTab, setCurrentTab] = useState("details");

  usePageView();

  const handleTabsChange = useCallback((event, value) => {
    setCurrentTab(value);
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard: Demo | Rock34x</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 3,
        }}
      >
        <Container maxWidth={settings.stretch ? false : "xl"}>
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
                href={paths.dashboard.jobs.create}
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
          <div>
            <Tabs
              indicatorColor="primary"
              onChange={handleTabsChange}
              scrollButtons="auto"
              sx={{ mt: 3 }}
              textColor="primary"
              value={currentTab}
              variant="scrollable"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </Tabs>
            <Divider />
          </div>
          {currentTab === "details" && (
            <div>
              <Grid container spacing={4}>
                <Grid xs={12} lg={4}>
                  <CustomerBasicDetails
                  // address1={customer.address1}
                  // address2={customer.address2}
                  // country={customer.country}
                  // email={customer.email}
                  // isVerified={!!customer.isVerified}
                  // phone={customer.phone}
                  // state={customer.state}
                  />
                </Grid>
                <Grid xs={12} lg={8}>
                  <Stack spacing={4}>
                    <CustomerPayment />
                    <CustomerEmailsSummary />
                    <CustomerDataManagement />
                  </Stack>
                </Grid>
              </Grid>
            </div>
          )}
          {currentTab === "invoices" && (
            <CustomerInvoices invoices={invoices} />
          )}
          {currentTab === "logs" && <CustomerLogs logs={logs} />}
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
