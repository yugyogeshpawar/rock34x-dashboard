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
import { useDeals } from "../../../api/deals";
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

{
  /*const tasks = [
  {
    id: "5eff24b501ba5281ddb5378c",
    members: [
      {
        avatar: "/assets/deal-icon/icon.png",
        name: "Marcus Finn",
      },
    ],
    title: "bitsCrunch Community Sale - Sold Out!",
    desc: "The final community sale of the year is here,and the waiting room is open!Sale starts December 14,2023 at 17:00 UTC and has one public option.",
    button: "Sold Out",
  },
];

const tasks2 = [
  {
    id: "5eff24c52ce9fdadffa11959",

    members: [
      {
        avatar: "/assets/deal-icon/icon2.png",
        name: "Marcus Finn",
      },
    ],
    title: "Chainflip Community Sale Has Ended",
    desc: "The efficient cross-chain swapping protocol. Not available in US,CN,CA, and other jurisdictions.Sale has ended.",
    button: "Sold Out",
  },
  {
    id: "5eff24ca3ffab939b667258b",

    members: [
      {
        avatar: "/assets/deal-icon/icon3.png",
        name: "Jie Yan Song",
      },
    ],
    title: "The Archway Community Sale is Sold Out",
    desc: "The Value Capture Chain for the Cosmos.US,CA,CN,KR, and other jurisdictions excluded",
    button: "Sold Out",
  },
  {
    id: "5eff24cf8740fc9faca4e463",

    members: [
      {
        avatar: "/assets/deal-icon/icon4.png",
        name: "Penjani Inyene",
      },
    ],
    title: "The Neon Community Sale is Sold Out",
    desc: "An Ethereum Virtual Machine on Solana. US,CA,CN,KR, and other jurisdictions excluded",
    button: "Sold Out",
  },
  {
    id: "5eff24cf8740fc9faca4e463",

    members: [
      {
        avatar: "/assets/deal-icon/icon5.png",
        name: "Penjani Inyene",
      },
    ],
    title: "The CyberConnect Community Sale is Sold Out",
    desc: "Web3s Earliest and Biggest Decentralized Social Network.US,CA,CN,KR, and other jurisdictions excluded",
    button: "Sold Out",
  },
];*/
}

const Page = () => {
  const { activeDeals, pastDeals } = useDeals(); // Use the useDeals hook to fetch tasks data
  // console.log(tasks);

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
