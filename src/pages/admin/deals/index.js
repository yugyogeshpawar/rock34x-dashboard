import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import numeral from "numeral";
import { subDays, subHours } from "date-fns";
import ArrowRightIcon from "@untitled-ui/icons-react/build/esm/ArrowRight";
import Edit02Icon from "@untitled-ui/icons-react/build/esm/Edit02";
import SearchMdIcon from "@untitled-ui/icons-react/build/esm/SearchMd";
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Typography,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  Stack,
  SvgIcon,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Tabs,
  TextField,
} from "@mui/material";
import { Scrollbar } from "../../../components/scrollbar";
import { jobsApi } from "../../../api/jobs";
import { useMounted } from "../../../hooks/use-mounted";
import { usePageView } from "../../../hooks/use-page-view";
import { Layout as DashboardLayout } from "../../../layouts/dashboard";
import { paths } from "../../../paths";
const now = new Date();

const customers = [
  {
    id: "5e887ac47eed253091be10cb",
    avatar: "/assets/avatars/avatar-carson-darrin.png",
    city: "Cleveland",
    country: "USA",
    currency: "$",
    email: "carson.darrin@rock34x.io",
    hasAcceptedMarketing: true,
    isProspect: false,
    isReturning: true,
    name: "Carson Darrin",
    state: "Ohio",
    totalSpent: 300.0,
    totalOrders: 3,
    updatedAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: "5e887b209c28ac3dd97f6db5",
    avatar: "/assets/avatars/avatar-fran-perez.png",
    city: "Atlanta",
    country: "USA",
    currency: "$",
    email: "fran.perez@rock34x.io",
    hasAcceptedMarketing: true,
    isProspect: true,
    isReturning: false,
    name: "Fran Perez",
    state: "Georgia",
    totalSpent: 0.0,
    totalOrders: 0,
    updatedAt: subDays(subHours(now, 1), 2).getTime(),
  },
  {
    id: "5e887b7602bdbc4dbb234b27",
    avatar: "/assets/avatars/avatar-jie-yan-song.png",
    city: "North Canton",
    country: "USA",
    currency: "$",
    email: "jie.yan.song@rock34x.io",
    hasAcceptedMarketing: false,
    isProspect: false,
    isReturning: false,
    name: "Jie Yan Song",
    state: "Ohio",
    totalSpent: 5600.0,
    totalOrders: 6,
    updatedAt: subDays(subHours(now, 4), 2).getTime(),
  },
  {
    id: "5e86809283e28b96d2d38537",
    avatar: "/assets/avatars/avatar-anika-visser.png",
    city: "Madrid",
    country: "Spain",
    currency: "$",
    email: "anika.visser@rock34x.io",
    hasAcceptedMarketing: true,
    isProspect: false,
    isReturning: true,
    name: "Anika Visser",
    state: "Madrid",
    totalSpent: 500.0,
    totalOrders: 1,
    updatedAt: subDays(subHours(now, 11), 2).getTime(),
  },
  {
    id: "5e86805e2bafd54f66cc95c3",
    avatar: "/assets/avatars/avatar-miron-vitold.png",
    city: "San Diego",
    country: "USA",
    currency: "$",
    email: "miron.vitold@rock34x.io",
    hasAcceptedMarketing: true,
    isProspect: true,
    isReturning: false,
    name: "Miron Vitold",
    totalSpent: 0.0,
    totalOrders: 0,
    state: "California",
    updatedAt: subDays(subHours(now, 7), 3).getTime(),
  },
];

const tabs = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Accepts Marketing",
    value: "hasAcceptedMarketing",
  },
  {
    label: "Prospect",
    value: "isProspect",
  },
  {
    label: "Returning",
    value: "isReturning",
  },
];

const sortOptions = [
  {
    label: "Last update (newest)",
    value: "updatedAt|desc",
  },
  {
    label: "Last update (oldest)",
    value: "updatedAt|asc",
  },
  {
    label: "Total orders (highest)",
    value: "orders|desc",
  },
  {
    label: "Total orders (lowest)",
    value: "orders|asc",
  },
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
              <Typography color="text.secondary">Fundraising</Typography>
              <Typography color="inherit" variant="h3">
                Universal Project
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginY: 3,
                }}
              >
                <Box>
                  <Typography variant="h6">$0.01</Typography>
                  <Typography color="text.secondary">Seed Round</Typography>
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
        <Container maxWidth="lg">
          <Card>
            <Tabs
              indicatorColor="primary"
              scrollButtons="auto"
              textColor="primary"
              value="all"
              sx={{ px: 3 }}
              variant="scrollable"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </Tabs>
            <Divider />
            <Stack
              alignItems="center"
              direction="row"
              flexWrap="wrap"
              gap={2}
              sx={{ p: 3 }}
            >
              <OutlinedInput
                placeholder="Search customers"
                startAdornment={
                  <InputAdornment position="start">
                    <SvgIcon>
                      <SearchMdIcon />
                    </SvgIcon>
                  </InputAdornment>
                }
                sx={{ flexGrow: 1 }}
              />
              <TextField
                label="Sort By"
                name="sort"
                select
                SelectProps={{ native: true }}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Stack>
            <Scrollbar>
              <Table sx={{ minWidth: 700 }}>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Orders</TableCell>
                    <TableCell>Spent</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customers.map((customer) => {
                    const location = `${customer.city}, ${customer.state}, ${customer.country}`;
                    const totalSpent = numeral(customer.totalSpent).format(
                      `${customer.currency}0,0.00`
                    );

                    return (
                      <TableRow hover key={customer.id}>
                        <TableCell padding="checkbox">
                          <Checkbox />
                        </TableCell>
                        <TableCell>
                          <Stack
                            alignItems="center"
                            direction="row"
                            spacing={1}
                          >
                            <Avatar
                              src={customer.avatar}
                              sx={{
                                height: 42,
                                width: 42,
                              }}
                            />
                            <div>
                              <Link color="inherit" variant="subtitle2">
                                {customer.name}
                              </Link>
                              <Typography
                                color="text.secondary"
                                variant="body2"
                              >
                                {customer.email}
                              </Typography>
                            </div>
                          </Stack>
                        </TableCell>
                        <TableCell>{location}</TableCell>
                        <TableCell>{customer.totalOrders}</TableCell>
                        <TableCell>{totalSpent}</TableCell>
                        <TableCell align="right">
                          <IconButton>
                            <SvgIcon>
                              <Edit02Icon />
                            </SvgIcon>
                          </IconButton>
                          <IconButton>
                            <SvgIcon>
                              <ArrowRightIcon />
                            </SvgIcon>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Scrollbar>
            <TablePagination
              component="div"
              count={customers.length}
              onPageChange={() => {}}
              onRowsPerPageChange={() => {}}
              page={0}
              rowsPerPage={5}
              rowsPerPageOptions={[5, 10, 25]}
            />
          </Card>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
