import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
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
  IconButton,
  SvgIcon,
  List,
  ListItem,
  ListItemText,
  AvatarGroup,
  Tooltip,
  Unstable_Grid2 as Grid,
} from "@mui/material";
// import { Layout as DashboardLayout } from "../../layouts/dashboard";
import { Layout as DashboardLayout } from "../../../layouts/dashboard";
import DotsHorizontalIcon from "@untitled-ui/icons-react/build/esm/DotsHorizontal";
import { Scrollbar } from "../../../components/scrollbar";
import { paths } from "../../../paths";
import { useMounted } from "../../../hooks/use-mounted";
import { useDeals } from "../../../api/deals";
import { dealsApi } from "../../../api/deals";
import { styled } from "@mui/system";

const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(65deg, #000000 30%, #2f2e2e 90%)`, // Change to black gradient
  border: 0,
  borderRadius: 8, // Adjust the border radius for a slightly rounded shape
  boxShadow: `0 3px 5px 2px rgba(255, 255, 255, 0.1)`, // Adjust shadow color
  color: 'white',
  height: 48,
  padding: '0 30px',
}));

const data = [
  {
    id: "3321324edendeh33421",
    avatar: "/assets/deal-icon/icon6.png",
    title:
      "To participate in Auctions, you first need enable wallets for your account.",
    button: "Apply For Wallets",
    button2: "View my participations and purchases",
  },
];


const useEvents = () => {
  const isMounted = useMounted();
  const [activeDeals, setActiveDeals] = useState([]);
  const [pastDeals, setPastDeals] = useState([]);
  // const [selectedEvent, setSelectedEvent] = useState(null);

  const getActiveDeals = useCallback(async () => {
    try {
      const response = await dealsApi.getActiveDeals();
      if (isMounted()) {
        setActiveDeals(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);
  
  const getPastDeals = useCallback(async () => {
    try {
      const response = await dealsApi.getPastDeals();
      if (isMounted()) {
        setPastDeals(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  // const handleUpdateEvent = (updatedEvent) => {
  //   // Call the updateEvent function here with the updated event
  //   // You can use the eventId from selectedEvent to identify the event to update
  //   // Update logic should go here...
  //   calendarApi
  //     .updateEvent({ eventId: selectedEvent.id, update: updatedEvent })
  //     .then((updatedEvent) => {
  //       // Handle successful update
  //       console.log("Event updated:", updatedEvent);
  //       // Clear the selected event
  //       setSelectedEvent(null);
  //     })
  //     .catch((error) => {
  //       // Handle error
  //       console.error("Error updating event:", error);
  //     });
  // };

  useEffect(() => {
    // Call both functions here
    getActiveDeals();
    getPastDeals();
  }, [getActiveDeals, getPastDeals]);

  // Use useEffect to log events whenever it changes
  useEffect(() => {
    console.log("Updated activeDeals:", activeDeals);
    console.log("Updated pastDeals:", pastDeals);
  }, [activeDeals, pastDeals]);

  return { activeDeals, pastDeals };
};


const Page = () => {
  
  const { activeDeals, pastDeals } =
    useEvents();

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
          <Card sx={{ marginY: 2 }}>
            <Divider />
            <Scrollbar>
              <List sx={{ minWidth: 500 }}>
                {data.map((item, index) => {
                  const showDivider = index < data.length - 1;

                  return (
                    <>
                      <ListItem divider={showDivider} key={item.id}>
                        <AvatarGroup sx={{ margin: 2 }}>
                          {data.map((item) => (
                            <Avatar src={item.avatar} />
                          ))}
                        </AvatarGroup>
                        <ListItemText
                          primary={
                            <>
                              <Link
                                color="text.primary"
                                noWrap
                                sx={{ cursor: "pointer" }}
                                variant="subtitle"
                              >
                                {item.title}
                              </Link>
                            </>
                          }
                        />
                      </ListItem>
                      <Link href="/dashboard/kyc">
                        <Button
                          component="a"
                          variant="contained"
                          color="primary"
                          sx={{ textWrap: "nowrap", marginLeft: 4 }}
                        >
                          {item.button}
                        </Button>
                      </Link>
                    </>
                  );
                })}
              </List>
            </Scrollbar>
          </Card>

          <Card sx={{ marginY: 2 }}>
            <CardHeader
              action={
                <GradientButton
                  href={paths.dashboard.deals.dealsCreate}
                  component="a"
                  variant="outlined"
                  sx={{ textWrap: "nowrap", marginLeft: 4 }}
                >
                  Create New Deal
                </GradientButton>
              }
              title="Active Now"
            />
            <Divider />
            <Scrollbar>
              <List sx={{ minWidth: 500 }}>
                {activeDeals.map((task, index) => {
                  const showDivider = index < activeDeals.length - 1;

                  return (
                    <ListItem divider={showDivider} key={task.id}>
                      <AvatarGroup sx={{ margin: 2 }}>
                        {task.members.map((member) => (
                          <Avatar src={member.avatar} />
                        ))}
                      </AvatarGroup>
                      <ListItemText
                        primary={
                          <>
                            <Link
                              href={paths.dashboard.deals.dealsDetails}
                              color="text.primary"
                              noWrap
                              sx={{ cursor: "pointer" }}
                              variant="subtitle"
                            >
                              {task.title}
                            </Link>
                            <Typography variant="subtitle2">
                              {task.desc}
                            </Typography>
                          </>
                        }
                      />

                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ textWrap: "nowrap" }}
                        href={paths.dashboard.deals.dealsDetails}
                      >
                        {task.button}
                      </Button>
                    </ListItem>
                  );
                })}
              </List>
            </Scrollbar>
          </Card>
          <Card>
            <CardHeader
              action={
                <IconButton>
                  <SvgIcon>
                    <DotsHorizontalIcon />
                  </SvgIcon>
                </IconButton>
              }
              title="Past Sales"
            />
            <Divider />
            <Scrollbar>
              <List sx={{ minWidth: 500 }}>
                {pastDeals.map((task, index) => {
                  const showDivider = index < pastDeals.length - 1;

                  return (
                    <ListItem divider={showDivider} key={task.id}>
                      <AvatarGroup max={3} sx={{ margin: 2 }}>
                        {task.members.map((member) => (
                          <Avatar src={member.avatar} />
                        ))}
                      </AvatarGroup>
                      <ListItemText
                        primary={
                          <>
                            <Link
                              href={paths.dashboard.deals.dealsDetails}
                              color="text.primary"
                              noWrap
                              sx={{ cursor: "pointer" }}
                              variant="subtitle"
                            >
                              {task.title}
                            </Link>
                            <Typography variant="subtitle2">
                              {task.desc}
                            </Typography>
                          </>
                        }
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ textWrap: "nowrap" }}
                      >
                        {task.button}
                      </Button>
                    </ListItem>
                  );
                })}
              </List>
            </Scrollbar>
          </Card>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
