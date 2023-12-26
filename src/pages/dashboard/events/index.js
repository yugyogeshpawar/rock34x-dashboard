import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import ArrowLeftIcon from "@untitled-ui/icons-react/build/esm/ArrowLeft";
import ArrowRightIcon from "@untitled-ui/icons-react/build/esm/ArrowRight";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  Container,
  Divider,
  Link,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { calendarApi } from "../../../api/calendar";
import { useMounted } from "../../../hooks/use-mounted";
import { usePageView } from "../../../hooks/use-page-view";
import { Layout as DashboardLayout } from "../../../layouts/dashboard";
import { paths } from "../../../paths";
// import { PostNewsletter } from "../../../sections/dashboard/blog/post-newsletter";
import { TaskCard } from "../../../sections/dashboard/tasks/task-card";
import { BreadcrumbsSeparator } from "../../../components/breadcrumbs-separator";
import { PostNewsletter } from "../../../sections/dashboard/blog/post-newsletter";
import UpdateEvent from "../../../sections/dashboard/events/update-event";

const useEvents = () => {
  const isMounted = useMounted();
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const getEvents = useCallback(async () => {
    try {
      const response = await calendarApi.getEvents();
      if (isMounted()) {
        setEvents(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  const handleUpdateEvent = (updatedEvent) => {
    // Call the updateEvent function here with the updated event
    // You can use the eventId from selectedEvent to identify the event to update
    // Update logic should go here...
    calendarApi
      .updateEvent({ eventId: selectedEvent.id, update: updatedEvent })
      .then((updatedEvent) => {
        // Handle successful update
        console.log("Event updated:", updatedEvent);
        // Clear the selected event
        setSelectedEvent(null);
      })
      .catch((error) => {
        // Handle error
        console.error("Error updating event:", error);
      });
  };

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  // Use useEffect to log events whenever it changes
  useEffect(() => {
    console.log("Updated events:", events);
  }, [events]);

  return { events, selectedEvent, setSelectedEvent, handleUpdateEvent };
};

const Page = () => {
  const { events, selectedEvent, setSelectedEvent, handleUpdateEvent } =
    useEvents();
  const [isUpdateEventModalOpen, setUpdateEventModalOpen] = useState(false);

  const openUpdateEventModal = () => {
    setUpdateEventModalOpen(true);
  };

  const closeUpdateEventModal = () => {
    setUpdateEventModalOpen(false);
    setSelectedEvent(null);
  };

  usePageView();

  // Use useEffect to log events whenever it changes
  useEffect(() => {
    console.log("Rendered with events:", events);
  }, [events]);

  return (
    <>
      <Head>
        <title>Upcoming Events</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={1}>
            <Typography variant="h3">Upcoming Events</Typography>
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
                Events
              </Link>
              <Typography color="text.secondary" variant="subtitle2">
                List
              </Typography>
            </Breadcrumbs>
          </Stack>
          <Card
            elevation={16}
            sx={{
              alignItems: "center",
              borderRadius: 1,
              display: "flex",
              justifyContent: "space-between",
              mb: 8,
              mt: 6,
              px: 3,
              py: 2,
            }}
          >
            <Typography variant="subtitle1">Hello, Admin</Typography>
            <Button
              component={NextLink}
              href={paths.dashboard.events.eventCreate}
              variant="contained"
            >
              New Event
            </Button>
          </Card>
          <Typography variant="h4">All Upcoming Events</Typography>
          <Typography color="text.secondary" sx={{ mt: 2 }} variant="body1">
            Stay organized and on top of your priorities with the Upcoming Tasks
            feature in our app.
          </Typography>
          <Typography color="text.secondary" variant="body1">
            Get a quick snapshot of your upcoming tasks with a clean and
            intuitive interface. The at-a-glance overview provides a clear
            timeline of your upcoming commitments, making it easy to see what is
            on your plate.
          </Typography>
          <Divider sx={{ my: 4 }} />
          <Grid container spacing={4}>
            {events.map((event) => (
              <Grid key={event.title} xs={12} md={6}>
                <TaskCard
                  title={event.title}
                  description={event.description}
                  start={event.start}
                  end={event.end}
                  allDay={event.allDay}
                  onEdit={() => {
                    setSelectedEvent(event);
                    openUpdateEventModal();
                  }}
                  sx={{ height: "100%" }}
                />
              </Grid>
            ))}
          </Grid>
          {selectedEvent && (
            <UpdateEvent
              event={selectedEvent}
              onUpdate={handleUpdateEvent}
              onCancel={closeUpdateEventModal}
              isOpen={isUpdateEventModalOpen}
            />
          )}
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="center"
            spacing={1}
            sx={{
              mt: 4,
              mb: 8,
            }}
          >
            <Button
              disabled
              startIcon={
                <SvgIcon>
                  <ArrowLeftIcon />
                </SvgIcon>
              }
            >
              Newer
            </Button>
            <Button
              endIcon={
                <SvgIcon>
                  <ArrowRightIcon />
                </SvgIcon>
              }
            >
              Older
            </Button>
          </Stack>
          <Box sx={{ mt: 8 }}>
            <PostNewsletter />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
