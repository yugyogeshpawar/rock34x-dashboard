import Head from "next/head";
import { addDays, subDays, subHours, subMinutes } from "date-fns";
import PlusIcon from "@untitled-ui/icons-react/build/esm/Plus";
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { usePageView } from "../../hooks/use-page-view";
import { useSettings } from "../../hooks/use-settings";
import { Layout as DashboardLayout } from "../../layouts/dashboard";
import { OverviewBanner } from "../../sections/dashboard/overview/overview-banner";
import {
  OverviewDoneTasks,
  OverviewTotalInvestors,
} from "../../sections/dashboard/overview/overview-total-investors";
import { OverviewEvents } from "../../sections/dashboard/overview/overview-events";
import { OverviewInbox } from "../../sections/dashboard/overview/overview-inbox";
import { OverviewTransactions } from "../../sections/dashboard/overview/overview-transactions";
import { OverviewPendingIssues } from "../../sections/dashboard/overview/overview-pending-issues";
import { OverviewSubscriptionUsage } from "../../sections/dashboard/overview/overview-subscription-usage";
import { OverviewHelp } from "../../sections/dashboard/overview/overview-help";
import { OverviewJobs } from "../../sections/dashboard/overview/overview-jobs";
import {
  OverviewOpenTickets,
  OverviewTotalStartups,
} from "../../sections/dashboard/overview/overview-total-startups";
import { OverviewTips } from "../../sections/dashboard/overview/overview-tips";
import { OverviewCryptoNews } from "../../sections/dashboard/overview/overview-crypto-news";

const now = new Date();

const Page = () => {
  const settings = useSettings();

  usePageView();

  return (
    <>
      <Head>
        <title>Dashboard: Overview | Rock34x</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Container maxWidth={settings.stretch ? false : "xl"}>
          <Grid
            container
            disableEqualOverflow
            spacing={{
              xs: 3,
              lg: 4,
            }}
          >
            <Grid xs={12}>
              <Stack direction="row" justifyContent="space-between" spacing={4}>
                <div>
                  <Typography variant="h4">Overview</Typography>
                </div>
              </Stack>
            </Grid>
            <Grid xs={12} md={4}>
              <OverviewTotalInvestors amount={31} />
            </Grid>
            <Grid xs={12} md={4}>
              <OverviewTotalStartups amount={5} />
            </Grid>
            <Grid xs={12} md={4}>
              <OverviewPendingIssues amount={12} />
            </Grid>
            <Grid xs={12} md={7}>
              {
                /* <OverviewBanner />*/
                <OverviewCryptoNews
                  articles={[
                    {
                      id: "1",
                      name: "Bitcoin",
                      description: "Digital gold",
                      desc: "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
                      category: "Accessories",
                      image: "/assets/covers/crypto-news-1.jpg",
                      sales: 13153,
                    },
                    {
                      id: "2",
                      name: "Ethereum",
                      description: "Smart contracts platform",
                      desc: "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether (ETH), the native cryptocurrency, is created and used to compensate participants who perform computations and validate transactions.",
                      category: "Accessories",
                      image: "/assets/covers/crypto-news-2.png",
                      sales: 10300,
                    },
                    {
                      id: "3",
                      name: "Binance Coin",
                      description:
                        "Cryptocurrency used to pay for transaction fees on the Binance exchange",
                      desc: "Binance Coin (BNB) is a cryptocurrency used to pay for transaction fees on the Binance exchange. It can also be used for various other purposes within the Binance ecosystem.",
                      category: "Accessories",
                      image: "/assets/covers/crypto-news-3.jpg",
                      sales: 5300,
                    },
                    {
                      id: "4",
                      name: "Cardano",
                      description:
                        "Blockchain platform for the development of decentralized applications",
                      desc: "Cardano is a blockchain platform for the development of decentralized applications (DApps). It aims to provide a more secure and scalable infrastructure for the development of smart contracts and DApps.",
                      category: "Accessories",
                      image: "/assets/covers/crypto-news-4.png",
                      sales: 1203,
                    },
                  ]}
                />
              }
            </Grid>
            <Grid xs={12} md={5}>
              {/*   <OverviewTips
                sx={{ height: '100%' }}
                tips={[
                  {
                    title: 'New fresh design.',
                    content: 'Your favorite template has a new trendy look, more customization options, screens & more.'
                  },
                  {
                    title: 'Tip 2.',
                    content: 'Tip content'
                  },
                  {
                    title: 'Tip 3.',
                    content: 'Tip content'
                  }
                ]}
              />*/}
              <OverviewEvents
                events={[
                  {
                    createdAt: addDays(now, 1),
                    id: "5e8882e440f6322fa399eeb8",
                    allDay: false,
                    description: "Inform about new contract",
                    title: "Call Samantha",
                  },
                  {
                    createdAt: addDays(now, 4),
                    id: "5e8882eb5f8ec686220ff131",
                    allDay: false,
                    description: "Discuss about new partnership",
                    title: "Meet with IBM",
                  },
                  {
                    createdAt: addDays(now, 4),
                    id: "5e8882f1f0c9216396e05a9b",
                    allDay: false,
                    description: "Prepare docs",
                    title: "SCRUM Planning",
                  },
                  {
                    createdAt: addDays(now, 7),
                    id: "5e8882f6daf81eccfa40dee2",
                    allDay: true,
                    description: "Meet with team to discuss",
                    title: "Begin SEM",
                  },
                ]}
              />
            </Grid>
            <Grid xs={12} md={7}>
              <OverviewSubscriptionUsage
                chartSeries={[
                  {
                    name: "This year",
                    data: [40, 37, 41, 42, 45, 42, 36, 45, 40, 44, 38, 41],
                  },
                  {
                    name: "Last year",
                    data: [26, 22, 19, 22, 24, 28, 23, 25, 24, 21, 17, 19],
                  },
                ]}
              />
            </Grid>
            <Grid xs={12} md={5}>
              <OverviewInbox
                messages={[
                  {
                    id: "b91cbe81ee3efefba6b915a7",
                    content: "Hello, we spoke earlier on the phone",
                    createdAt: subMinutes(now, 2),
                    senderAvatar: "/assets/avatars/avatar-alcides-antonio.png",
                    senderName: "Alcides Antonio",
                    senderOnline: true,
                  },
                  {
                    id: "de0eb1ac517aae1aa57c0b7e",
                    content: "Is the job still available?",
                    createdAt: subMinutes(now, 56),
                    senderAvatar: "/assets/avatars/avatar-marcus-finn.png",
                    senderName: "Marcus Finn",
                    senderOnline: false,
                  },
                  {
                    id: "38e2b0942c90d0ad724e6f40",
                    content: "What is a screening task? I’d like to",
                    createdAt: subHours(subMinutes(now, 23), 3),
                    senderAvatar: "/assets/avatars/avatar-carson-darrin.png",
                    senderName: "Carson Darrin",
                    senderOnline: true,
                  },
                  {
                    id: "467505f3356f25a69f4c4890",
                    content: "Still waiting for feedback",
                    createdAt: subHours(subMinutes(now, 6), 8),
                    senderAvatar: "/assets/avatars/avatar-fran-perez.png",
                    senderName: "Fran Perez",
                    senderOnline: true,
                  },
                  {
                    id: "7e6af808e801a8361ce4cf8b",
                    content: "Need more information about campaigns",
                    createdAt: subHours(subMinutes(now, 18), 10),
                    senderAvatar: "/assets/avatars/avatar-jie-yan-song.png",
                    senderName: "Jie Yan Song",
                    senderOnline: false,
                  },
                ]}
              />
            </Grid>
            <Grid xs={12} md={7}>
              <OverviewTransactions
                transactions={[
                  {
                    id: "d46800328cd510a668253b45",
                    amount: 25000,
                    createdAt: now.getTime(),
                    currency: "usd",
                    sender: "Rock34x",
                    status: "on_hold",
                    type: "receive",
                  },
                  {
                    id: "b4b19b21656e44b487441c50",
                    amount: 6843,
                    createdAt: subDays(now, 1).getTime(),
                    currency: "usd",
                    sender: "Zimbru",
                    status: "confirmed",
                    type: "send",
                  },
                  {
                    id: "56c09ad91f6d44cb313397db",
                    amount: 91823,
                    createdAt: subDays(now, 1).getTime(),
                    currency: "usd",
                    sender: "Vertical Jelly",
                    status: "failed",
                    type: "send",
                  },
                  {
                    id: "aaeb96c5a131a55d9623f44d",
                    amount: 49550,
                    createdAt: subDays(now, 3).getTime(),
                    currency: "usd",
                    sender: "Rock34x",
                    status: "confirmed",
                    type: "receive",
                  },
                ]}
              />
            </Grid>
            <Grid xs={12} md={5}>
              <OverviewEvents
                events={[
                  {
                    id: "3bfa0bc6cbc99bf747c94d51",
                    createdAt: addDays(now, 1),
                    description: "17:00 to 18:00",
                    title: "Meeting with Partners",
                  },
                  {
                    id: "dd6c8ce8655ac222b01f24f9",
                    createdAt: addDays(now, 4),
                    description: "17:00 to 18:00",
                    title: "Weekly Meeting",
                  },
                  {
                    id: "f274902e2bf226865b3cf947",
                    createdAt: addDays(now, 4),
                    description: "17:00 to 18:00",
                    title: "Weekly Meeting",
                  },
                  {
                    id: "d2a66e24110f52acb0cd0b9f",
                    createdAt: addDays(now, 7),
                    description: "17:00 to 18:00",
                    title: "Weekly Meeting",
                  },
                ]}
              />
            </Grid>
            <Grid xs={6}>
              <OverviewJobs />
            </Grid>
            <Grid xs={6}>
              <OverviewHelp />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
