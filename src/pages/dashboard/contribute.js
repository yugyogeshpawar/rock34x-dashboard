import Head from 'next/head';
import { Box, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { usePageView } from '../../hooks/use-page-view';
import { Layout as DashboardLayout } from '../../layouts/dashboard';
import { JobCreateForm } from '../../sections/dashboard/contribute/create-contribute';

const Page = () => {
  usePageView();

  return (
    <>
      <Head>
        <title>
          Dashboard: Contribute | Rock34x 
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          background: '#F3F4F6'
        }}
      >
        <Grid
        >
          <Grid
            xs={12}
            md={8}
            sx={{
              p: {
                xs: 1,
                sm: 6,
                md: 8
              }
            }}
          >
            <Stack
              maxWidth="lg"
            >
              <Typography variant="h4">
                Contribute
              </Typography>
              <JobCreateForm />
            </Stack>
          </Grid>
        </Grid>
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
