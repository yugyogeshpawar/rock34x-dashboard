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
  IconButton,
  SvgIcon,
  List,
  ListItem,
  ListItemText,
  AvatarGroup,
  Tooltip,
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
import { CompanySummary } from "../../sections/dashboard/deals/deals-info";
import { getInitials } from "../../utils/get-initials";



import { addDays, addHours, differenceInDays, isAfter } from 'date-fns';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import { Scrollbar } from '../../components/scrollbar';

const now = new Date();

const tasks = [
  {
    id: '5eff24b501ba5281ddb5378c',
    members: [
      {
        avatar: '/assets/avatars/avatar-marcus-finn.png',
        name: 'Marcus Finn'
      }
    ],
    title: 'Update the API for the project',
    button: 'Sold Out'
  },
  {
    id: '5eff24bb5bb3bd1beeddde78',
    members: [
      {
        avatar: '/assets/avatars/avatar-penjani-inyene.png',
        name: 'Penjani Inyene'
      }
    ],
    title: 'Redesign the landing page',
    button: 'Sold Out'
  },
  {
    id: '5eff24c019175119993fc1ff',
    members: [
      {
        avatar: '/assets/avatars/avatar-miron-vitold.png',
        name: 'Miron Vitold'
      }
    ],
    title: 'Solve the bug for the showState',
    button: 'Sold Out'
  },
];

const tasks2 = [
  {
    id: '5eff24c52ce9fdadffa11959',
    
    members: [
      {
        avatar: '/assets/avatars/avatar-marcus-finn.png',
        name: 'Marcus Finn'
      }
    ],
    title: 'Release v1.0 Beta',
    button: 'Sold Out'
  },
  {
    id: '5eff24ca3ffab939b667258b',
    
    members: [
      {
        avatar: '/assets/avatars/avatar-jie-yan-song.png',
        name: 'Jie Yan Song'
      }
    ],
    title: 'GDPR Compliance',
    button: 'Sold Out'
  },
  {
    id: '5eff24cf8740fc9faca4e463',
    
    members: [
      {
        avatar: '/assets/avatars/avatar-penjani-inyene.png',
        name: 'Penjani Inyene'
      }
    ],
    title: 'Redesign Landing Page',
    button: 'Sold Out'
  }
]



const Page = () => {
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
 
        <Card sx={{marginY:2}}>
        <CardHeader
          action={(
            <IconButton>
              <SvgIcon>
                <DotsHorizontalIcon />
              </SvgIcon>
            </IconButton>
          )}
          title="Active Now"
        />
        <Divider />
        <Scrollbar>
          <List sx={{ minWidth: 400 }}>
            {tasks.map((task, index) => {
              const showDivider = index < tasks.length - 1;

              return (
                <ListItem
                  divider={showDivider}
                  key={task.id}
                >
                  <AvatarGroup max={3} sx={{margin:2}}>
                    {task.members.map((member) => (
                        <Avatar src={member.avatar} />
                    ))}
                  </AvatarGroup>
                  <ListItemText
                    primary={(
                      <Link
                        color="text.primary"
                        noWrap
                        sx={{ cursor: 'pointer' }}
                        variant="subtitle2"
                      >
                        {task.title}
                      </Link>
                    )}
                  />
                    <Button variant="contained" color="primary">
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
          action={(
            <IconButton>
              <SvgIcon>
                <DotsHorizontalIcon />
              </SvgIcon>
            </IconButton>
          )}
          title="Past Sales"
        />
        <Divider />
        <Scrollbar>
          <List sx={{ minWidth: 400 }}>
            {tasks2.map((task, index) => {
              const showDivider = index < tasks.length - 1;

              return (
                <ListItem
                  divider={showDivider}
                  key={task.id}
                >
                  <AvatarGroup max={3} sx={{margin:2}}>
                    {task.members.map((member) => (
                        <Avatar src={member.avatar} />
                    ))}
                  </AvatarGroup>
                  <ListItemText
                    primary={(
                      <Link
                        color="text.primary"
                        noWrap
                        sx={{ cursor: 'pointer' }}
                        variant="subtitle2"
                      >
                        {task.title}
                      </Link>
                    )}
                  />
                    <Button variant="contained" color="primary">
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
