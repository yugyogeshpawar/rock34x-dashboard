// import Head from 'next/head';
// import { Box, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// import { usePageView } from '../../../hooks/use-page-view';
// import { Layout as DashboardLayout } from '../../../layouts/dashboard';
// import { JobCreateForm } from '../../../sections/dashboard/jobs/job-create-form';

// const Page = () => {
//   usePageView();

//   return (
//     <>
//       <Head>
//         <title>
//           Dashboard: Job Create | Rock34x 
//         </title>
//       </Head>
//       <Box
//         component="main"
//         sx={{
//           display: 'flex',
//           flexGrow: 1
//         }}
//       >
//         <Grid
//           container
//           sx={{ flexGrow: 1 }}
//         >
//           <Grid
//             xs={12}
//             sm={4}
//             sx={{
//               backgroundImage: 'url(/assets/people-talking.png)',
//               backgroundPosition: 'center',
//               backgroundRepeat: 'no-repeat',
//               backgroundSize: 'cover',
//               display: {
//                 xs: 'none',
//                 md: 'block'
//               }
//             }}
//           />
//           <Grid
//             xs={12}
//             md={8}
//             sx={{
//               p: {
//                 xs: 4,
//                 sm: 6,
//                 md: 8
//               }
//             }}
//           >
//             <Stack
//               maxWidth="sm"
//               spacing={3}
//             >
//               <Typography variant="h4">
//                 Create Job Ad
//               </Typography>
//               <JobCreateForm />
//             </Stack>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };

// Page.getLayout = (page) => (
//   <DashboardLayout>
//     {page}
//   </DashboardLayout>
// );

// export default Page;



import Head from 'next/head';
import { Box, Stack, Typography, Unstable_Grid2 as Grid, TextField, Button, Input } from '@mui/material';
import { usePageView } from '../../../hooks/use-page-view';
import { Layout as DashboardLayout } from '../../../layouts/dashboard';
import { dealsApi } from '../../../api/deals'; // Import your deals API module
import { useState } from 'react';

const CreateDealPage = () => {
  usePageView();

  const [formData, setFormData] = useState({
    members: [{ avatar: "", name: "" }],
    title: "",
    desc: "",
    button: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleMemberInputChange = (index, field) => (event) => {
    const newMembers = [...formData.members];
    newMembers[index][field] = event.target.value;

    setFormData({
      ...formData,
      members: newMembers,
    });
  };

  const handleAddMember = () => {
    setFormData({
      ...formData,
      members: [...formData.members, { avatar: "", name: "" }],
    });
  };

  const handleRemoveMember = (index) => () => {
    const newMembers = [...formData.members];
    newMembers.splice(index, 1);

    setFormData({
      ...formData,
      members: newMembers,
    });
  };

  const handleImageUpload = (index) => (event) => {
    const file = event.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newMembers = [...formData.members];
        newMembers[index].avatar = e.target.result;
  
        setFormData({
          ...formData,
          members: newMembers,
        });
      };
  
      reader.readAsDataURL(file);
    }
  };
  

  const handleCreateDeal = async () => {
    try {
      const createdDeal = await dealsApi.createDeal({
        members: formData.members,
        title: formData.title,
        desc: formData.desc,
        button: formData.button,
      }); 
  
      // Update state or perform any other actions with the createdDeal data
      console.log('Deal created:', createdDeal);
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error creating deal:', error.message);
    }
  };

  return (
    <>
      <Head>
        <title>
          Dashboard: Create Deal | Rock34x
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexGrow: 1
        }}
      >
        <Grid
          container
          sx={{ flexGrow: 1 }}
        >
          {/* Background Image Grid */}
          <Grid
            xs={12}
            sm={4}
            sx={{
              backgroundImage: 'url(/assets/people-talking.png)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              display: {
                xs: 'none',
                md: 'block'
              }
            }}
          />
          {/* Form Grid */}
          <Grid
  xs={12}
  md={8}
  sx={{
    p: {
      xs: 4,
      sm: 6,
      md: 8
    }
  }}
>
  <Box
    sx={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '20px',
      backgroundColor: 'white'
    }}
  >
    <Typography variant="h4" sx={{ marginBottom: 3 }}>
      Create New Deal
    </Typography>
    <form onSubmit={(e) => { e.preventDefault(); handleCreateDeal(); }}>
      {/* Input fields for members */}
      {formData.members.map((member, index) => (
        <Box key={index} marginBottom={2}>
        <TextField
        label={`Member ${index + 1} Avatar`}
        fullWidth
      />
      <Input
        accept="image/*"
        id={`avatar-upload-${index}`}
        type="file"
        onChange={handleImageUpload(index)}
      />
          <TextField
            label={` Name`}
            value={member.name}
            onChange={handleMemberInputChange(index, 'name')}
          />
          <Button variant="outlined" onClick={handleRemoveMember(index)} sx={{ marginLeft: 2 }}>
            Remove Member
          </Button>
        </Box>
      ))}
      <Button variant="outlined" onClick={handleAddMember} sx={{ marginBottom: 2 }}>
        Add Member
      </Button>

      {/* Input fields for other deal details */}
      <TextField
        label="Deal Title"
        value={formData.title}
        onChange={handleInputChange('title')}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Deal Description"
        value={formData.desc}
        onChange={handleInputChange('desc')}
        multiline
        fullWidth
        rows={4}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Button Text"
        value={formData.button}
        onChange={handleInputChange('button')}
        fullWidth
        sx={{ marginBottom: 2 }}
      />

      {/* Submit button */}
      <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
        Create Deal
      </Button>
    </form>
  </Box>
</Grid>
        </Grid>
      </Box>
    </>
  );
};

CreateDealPage.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default CreateDealPage;

