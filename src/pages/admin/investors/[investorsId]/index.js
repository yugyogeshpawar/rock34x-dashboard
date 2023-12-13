import { useCallback, useEffect, useState } from 'react';
import NextLink from 'next/link';
import Head from 'next/head';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import {
  Avatar,
  Box,
  Button,
  Chip,
  Card,
  Container,
  Divider,
  Link,
  Stack,
  SvgIcon,
  Tab,
  Tabs,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
// import { customersApi } from '../../../../api/customers';
import { investorApi } from '../../../../api/investors';
import { useMounted } from '../../../../hooks/use-mounted';
import { usePageView } from '../../../../hooks/use-page-view';
import { Layout as DashboardLayout } from '../../../../layouts/dashboard';
import { paths } from '../../../../paths';
import { InvestorBasicDetails } from '../../../../sections/dashboard/investor/investor-basic-details';
import { InvestorDataManagement } from '../../../../sections/dashboard/investor/investor-data-management';
import { InvestorEmailsSummary } from '../../../../sections/dashboard/investor/investor-emails-summary';
import { InvestorInvoices } from '../../../../sections/dashboard/investor/investor-invoices';
import { InvestorPayment } from '../../../../sections/dashboard/investor/investor-payment';
import { InvestorLogs } from '../../../../sections/dashboard/investor/investor-logs';
import { getInitials } from '../../../../utils/get-initials';

const tabs = [
  { label: 'Details', value: 'details' },
  { label: 'Invoices', value: 'invoices' }
];



const useCustomer = () => {
  const isMounted = useMounted();
  const [customer, setCustomer] = useState(null);

  const getCustomer = useCallback(async () => {
    try {
      const response = await investorApi.getCustomer();

      if (isMounted()) {
        setCustomer(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
    getCustomer();
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  return customer;
};

const useInvoices = () => {
  const isMounted = useMounted();
  const [invoices, setInvoices] = useState([]);

  const getInvoices = useCallback(async () => {
    try {
      const response = await investorApi.getInvoices();

      if (isMounted()) {
        setInvoices(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
    getInvoices();
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  return invoices;
};

const useLogs = () => {
  const isMounted = useMounted();
  const [logs, setLogs] = useState([]);

  const getLogs = useCallback(async () => {
    try {
      const response = await investorApi.getLogs();

      if (isMounted()) {
        setLogs(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
    getLogs();
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  return logs;
};

const Page = () => {
  const [currentTab, setCurrentTab] = useState('details');
  const customer = useCustomer();
  const invoices = useInvoices();

  usePageView();

  const handleTabsChange = useCallback((event, value) => {
    setCurrentTab(value);
  }, []);

  if (!customer) {
    return null;
  }

  return (
    <>
      <Head>
        <title>
          Dashboard: Investor Details | Rock34x
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={4}>
            <Stack spacing={4}>
              <div>
                <Link
                  color="text.primary"
                  component={NextLink}
                  href={paths.dashboard.investors.index}
                  sx={{
                    alignItems: 'center',
                    display: 'inline-flex'
                  }}
                  underline="hover"
                >
                  <SvgIcon sx={{ mr: 1 }}>
                    <ArrowLeftIcon />
                  </SvgIcon>
                  <Typography variant="subtitle2">
                    Investors
                  </Typography>
                </Link>
              </div>
              <Card
              sx={{
                display:'flex',
                alignItems:'flex-start',
                justifyContent:'space-between',
                spacing:4,
                p:4
              }}
              >
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <Avatar
                    src={customer.avatar}
                    sx={{
                      height: 70,
                      width: 70
                    }}
                  >
                    {getInitials(customer.name)}
                  </Avatar>
                  <Stack spacing={1}>
                    <Typography variant="h4">
                      {customer.email}
                    </Typography>
                    <Stack
                      alignItems="center"
                      direction="row"
                      spacing={1}
                    >
                      <Avatar
                        src={customer.avatar}
                        sx={{
                          height: 20,
                          width: 20
                        }}
                      >
                      </Avatar>
                      <Typography variant="subtitle2">
                        {customer.telegram}
                      </Typography>
                    </Stack>
                    <Stack
                      alignItems="center"
                      direction="row"
                      spacing={1}
                    >
                      <Avatar
                        src={customer.avatar}
                        sx={{
                          height: 20,
                          width: 20
                        }}
                      >
                      </Avatar>
                      <Typography variant="subtitle2">
                        {customer.discord}
                      </Typography>
                    </Stack>
                    <Stack
                      alignItems="center"
                      direction="row"
                      spacing={1}
                    >
                      <Typography variant="subtitle2">
                        KYC: {customer.kyc}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                <Typography variant="subtitle2">
                Account wallets
                <Typography variant="subtitle2">
                Used to sign in
              </Typography>
              {customer.accountEvm}
              </Typography>
                
                </Stack>
              </Card>
              <Stack>
              <Stack
              alignItems="center"
              direction="row"
              spacing={1}
            >
              <Typography variant="subtitle2">
                Deals : {customer.deals}
              </Typography>
              <Typography variant="subtitle2">
                OTC trades : {customer.otcTraders}
              </Typography>
            </Stack>
              <Stack
              alignItems="center"
              direction="row"
              spacing={1}
            >
              <Typography variant="subtitle2">
                Invested : {customer.invested}
              </Typography>
              <Typography variant="subtitle2">
                Average investment : {customer.average}
              </Typography>
            </Stack>
            </Stack>
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
                    <Tab
                      key={tab.value}
                      label={tab.label}
                      value={tab.value}
                    />
                  ))}
                </Tabs>
                <Divider />
              </div>
            </Stack>
            {currentTab === 'details' && (
              <div>
                <Grid
                  container
                  spacing={4}
                >
                  <Grid
                    xs={12}
                    lg={12}
                  >
                    <InvestorBasicDetails
                    />
                  </Grid>






                </Grid>
              </div>
            )}
            {currentTab === 'invoices' && <InvestorInvoices invoices={invoices} />}

          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;



<Grid
xs={12}
lg={8}
>
<Stack spacing={4}>
  <InvestorPayment />
  <InvestorEmailsSummary />
  <InvestorDataManagement />
</Stack>
</Grid>