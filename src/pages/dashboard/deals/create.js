// Import necessary dependencies
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
import { dealsApi } from '../../../api/deals';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

const Page = () => {
  const [members, setMembers] = useState([{ avatar: "", name: "" }]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [button, setButton] = useState('');

  const router = useRouter();

  usePageView();

  const handleCreateDeal = () => {
    // Create a new deal object with the entered data
    const newDeal = {
      id: createResourceId(),
      members,
      title,
      desc,
      button,
    };

    // Call the createDeal function to add the new deal to the deals
    dealsApi.createDeal(newDeal)
      .then(() => {
        // Redirect to the deals page after successful deal creation
        console.log(newDeal);
        router.push(paths.dashboard.deals.index);
      })
      .catch((error) => {
        console.error('Error creating deal:', error);
        // Handle error appropriately
      });
  };

  const handleAddMember = () => {
    // Add a new member to the members array
    const newMember = {
      avatar: "/assets/deal-icon/default-avatar.png", // Default avatar or provide a way to select an avatar
      name: "",
    };

    setMembers((prevMembers) => [...prevMembers, newMember]);
  };

  const handleRemoveMember = (index) => {
    // Remove a member from the members array based on the index
    setMembers((prevMembers) => [
      ...prevMembers.slice(0, index),
      ...prevMembers.slice(index + 1),
    ]);
  };


  return (
    <>
      <Head>
        <title>Deals: Create Deal | YourAppName</title>
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
            <Typography variant="h3">Create a new deal</Typography>
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
                href={paths.dashboard.deals.index}
                variant="subtitle2"
              >
                Deals
              </Link>
              <Typography color="text.secondary" variant="subtitle2">
                Create Deal
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
                href={paths.dashboard.deals.index}
              >
                Cancel
              </Button>
              <Button onClick={handleCreateDeal} variant="contained">
                Create Deal
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
                    <Typography variant="h6">Deal details</Typography>
                  </Grid>
                  <Grid xs={12} md={8}>
                    <Stack spacing={3}>
                      {/* Render input fields for deal details */}
                      {/* You can customize these fields based on your requirements */}
                      {/* For example, for members, you might want to dynamically add/remove members */}
                      {/* For simplicity, I've assumed a static member in this example */}
                      {/* Modify as needed */}
                      <TextField
                        fullWidth
                        label="Deal title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <TextField
                        fullWidth
                        label="Description"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                      />
                      <TextField
                        fullWidth
                        label="Button"
                        value={button}
                        onChange={(e) => setButton(e.target.value)}
                      />
                      {/* You can add more fields as needed */}
                      {members.map((member, index) => (
                        <Stack key={index} direction="row" alignItems="center" spacing={2}>
                        <TextField
                          fullWidth
                          label={`Member Name`}
                          value={member.name}
                          onChange={(e) => {
                            const updatedMembers = [...members];
                            updatedMembers[index].name = e.target.value;
                            setMembers(updatedMembers);
                          }}
                        />
                        <Box>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const updatedMembers = [...members];
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onload = (readerEvent) => {
                                  updatedMembers[index].avatar = readerEvent.target.result;
                                  setMembers(updatedMembers);
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                            style={{ width: '250px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                          />
                        </Box>
                        <IconButton onClick={() => handleRemoveMember(index)}>
                          Remove
                        </IconButton>
                      </Stack>
                      
                      ))}
                      <Button variant="outlined" onClick={handleAddMember}>
                        Add Member
                      </Button>
                      {/* You can add more fields as needed */}
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
