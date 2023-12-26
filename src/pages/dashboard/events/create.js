import { useCallback, useState } from 'react';
import Head from 'next/head';
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  Link,
  Stack,
  SvgIcon,
  TextField,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { BreadcrumbsSeparator } from '../../../components/breadcrumbs-separator';
import { usePageView } from '../../../hooks/use-page-view';
import { Layout as DashboardLayout } from '../../../layouts/dashboard';
import { paths } from '../../../paths';
import { createResourceId } from '../../../utils/create-resource-id';
import { deepCopy } from '../../../utils/deep-copy';
import { data } from '../../../api/calendar/data';
import { setHours, setMinutes, addDays } from 'date-fns';
import { calendarApi } from "../../../api/calendar";
import { useRouter } from 'next/router';


import NextLink from 'next/link';

const Page = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(addDays(new Date(), 2));
  const [allDay, setAllDay] = useState(false);

  const router = useRouter();


  usePageView();

  const handleCreateTask = () => {
    // Create a new task object with the entered data
    const newTask = {
      id: createResourceId(),
      allDay,
      description,
      end: end.getTime(),
      start: start.getTime(),
      title,
    };

    // Call the createEvent function to add the new task to the calendar
    calendarApi.createEvent(newTask)
      .then(() => {
        // Redirect to the calendar page after successful task creation
        router.push(paths.dashboard.events.index);
      })
      .catch((error) => {
        console.error('Error creating task:', error);
        // Handle error appropriately
      });
  };

  return (
    <>
      <Head>
        <title>Calendar: Create Task | YourAppName</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={1}>
            <Typography variant="h3">Create a new task</Typography>
            <Breadcrumbs separator={<BreadcrumbsSeparator />}>
              <Link
                color="text.primary"
                component={NextLink}
                href={paths.dashboard.index}
                variant="subtitle2"
              >
                Dashboard
              </Link>
              <Link
                color="text.primary"
                component={NextLink}
                href={paths.dashboard.events.index}
                variant="subtitle2"
              >
                Calendar
              </Link>
              <Typography color="text.secondary" variant="subtitle2">
                Create Task
              </Typography>
            </Breadcrumbs>
          </Stack>
          <Card
            elevation={16}
            sx={{
              alignItems: 'center',
              borderRadius: 1,
              display: 'flex',
              justifyContent: 'space-between',
              mb: 8,
              mt: 6,
              px: 3,
              py: 2
            }}
          >
            <Typography variant="subtitle1">Hello, Admin</Typography>
            <Stack alignItems="center" direction="row" spacing={2}>
              <Button
                color="inherit"
                component={NextLink}
                href={paths.dashboard.events.index}
              >
                Cancel
              </Button>
              <Button onClick={handleCreateTask} variant="contained">
                Create Task
              </Button>
              <IconButton>
                <SvgIcon>
                  {/* Your DotsHorizontalIcon component */}
                </SvgIcon>
              </IconButton>
            </Stack>
          </Card>
          <Stack spacing={3}>
            <Card>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid xs={12} md={4}>
                    <Typography variant="h6">Task details</Typography>
                  </Grid>
                  <Grid xs={12} md={8}>
                    <Stack spacing={3}>
                      <TextField
                        fullWidth
                        label="Task title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <TextField
                        fullWidth
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <TextField
                        fullWidth
                        label="Start Date and Time"
                        type="datetime-local"
                        value={start.toISOString().slice(0, 16)}
                        onChange={(e) => setStart(new Date(e.target.value))}
                      />
                      <TextField
                        fullWidth
                        label="End Date and Time"
                        type="datetime-local"
                        value={end.toISOString().slice(0, 16)}
                        onChange={(e) => setEnd(new Date(e.target.value))}
                      />
                      <TextField
                        label="All Day"
                        type="checkbox"
                        checked={allDay}
                        onChange={(e) => setAllDay(e.target.checked)}
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
