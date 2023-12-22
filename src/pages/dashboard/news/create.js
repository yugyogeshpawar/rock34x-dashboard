// import { useCallback, useState } from 'react';
// import Head from 'next/head';
// import NextLink from 'next/link';
// import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
// import {
//   Box,
//   Breadcrumbs,
//   Button,
//   Card,
//   CardContent,
//   Container,
//   IconButton,
//   Link,
//   Stack,
//   SvgIcon,
//   TextField,
//   Typography,
//   Unstable_Grid2 as Grid
// } from '@mui/material';
// import { BreadcrumbsSeparator } from '../../../components/breadcrumbs-separator';
// import { FileDropzone } from '../../../components/file-dropzone';
// import { QuillEditor } from '../../../components/quill-editor';
// import { usePageView } from '../../../hooks/use-page-view';
// import { Layout as DashboardLayout } from '../../../layouts/dashboard';
// import { paths } from '../../../paths';
// import { fileToBase64 } from '../../../utils/file-to-base64';

// import { useRouter } from 'next/router';

// const initialCover = '/assets/covers/abstract-1-4x3-large.png';

// const Page = () => {
//   const [cover, setCover] = useState(initialCover);

//   const router = useRouter();

//   usePageView();

//   const handleCoverDrop = useCallback(async ([file]) => {
//     const data = await fileToBase64(file);
//     setCover(data);
//   }, []);

//   const handleCoverRemove = useCallback(() => {
//     setCover(null);
//   }, []);


//   const handlePublish = () => {
//     // Create a new article object with the entered data
//     const newArticle = {
//       id: '98290', // You may want to generate a unique ID
//       author: {
//         avatar: '/assets/avatars/your-avatar.png',
//         name: 'Your Name'
//       },
//       category: 'Your Category',
//       cover,
//       publishedAt: new Date().getTime(),
//       readTime: 'X min', // Set the read time
//       shortDescription,
//       title,
//       content,
//       seoTitle,
//       seoDescription
//     };

//     // Update the cryptoNews array with the new article
//     cryptoNews.push(newArticle);

//     // Now, you can save the updated cryptoNews array wherever you prefer.
//     // For example, you can use a server, a database, or local storage.

//     // For now, let's just log the updated cryptoNews array to the console.
//     console.log('Updated cryptoNews:', cryptoNews);


//     // Redirect to post details page after successful publish
//     router.push(paths.dashboard.blog.postDetails);
//   };

//   return (
//     <>
//       <Head>
//         <title>
//           News: Create | Rock34x 
//         </title>
//       </Head>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           py: 4
//         }}
//       >
//         <Container maxWidth="xl">
//           <Stack spacing={1}>
//             <Typography variant="h3">
//               Create a new article
//             </Typography>
//             <Breadcrumbs separator={<BreadcrumbsSeparator />}>
//               <Link
//                 color="text.primary"
//                 component={NextLink}
//                 href={paths.dashboard.index}
//                 variant="subtitle2"
//               >
//                 Dashboard
//               </Link>
//               <Link
//                 color="text.primary"
//                 component={NextLink}
//                 href={paths.dashboard.news.index}
//                 variant="subtitle2"
//               >
//                 News
//               </Link>
//               <Typography
//                 color="text.secondary"
//                 variant="subtitle2"
//               >
//                 Create
//               </Typography>
//             </Breadcrumbs>
//           </Stack>
//           <Card
//             elevation={16}
//             sx={{
//               alignItems: 'center',
//               borderRadius: 1,
//               display: 'flex',
//               justifyContent: 'space-between',
//               mb: 8,
//               mt: 6,
//               px: 3,
//               py: 2
//             }}
//           >
//             <Typography variant="subtitle1">
//               Hello, Admin
//             </Typography>
//             <Stack
//               alignItems="center"
//               direction="row"
//               spacing={2}
//             >
//               <Button
//                 color="inherit"
//                 component={NextLink}
//                 href={paths.dashboard.news.index}
//               >
//                 Cancel
//               </Button>
//               <Button onClick={handlePublish} variant="contained">
//               Publish changes
//             </Button>
//               <IconButton>
//                 <SvgIcon>
//                   <DotsHorizontalIcon />
//                 </SvgIcon>
//               </IconButton>
//             </Stack>
//           </Card>
//           <Stack spacing={3}>
//             <Card>
//               <CardContent>
//                 <Grid
//                   container
//                   spacing={3}
//                 >
//                   <Grid
//                     xs={12}
//                     md={4}
//                   >
//                     <Typography variant="h6">
//                       Basic details
//                     </Typography>
//                   </Grid>
//                   <Grid
//                     xs={12}
//                     md={8}
//                   >
//                     <Stack spacing={3}>
//                       <TextField
//                         fullWidth
//                         label="News title"
//                         name="title"
//                       />
//                       <TextField
//                         fullWidth
//                         label="Short description"
//                       />
//                     </Stack>
//                   </Grid>
//                 </Grid>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent>
//                 <Grid
//                   container
//                   spacing={3}
//                 >
//                   <Grid
//                     xs={12}
//                     md={4}
//                   >
//                     <Typography variant="h6">
//                       News cover
//                     </Typography>
//                   </Grid>
//                   <Grid
//                     xs={12}
//                     md={8}
//                   >
//                     <Stack spacing={3}>
//                       {cover
//                         ? (
//                           <Box
//                             sx={{
//                               backgroundImage: `url(${cover})`,
//                               backgroundPosition: 'center',
//                               backgroundSize: 'cover',
//                               borderRadius: 1,
//                               height: 230,
//                               mt: 3
//                             }}
//                           />
//                         )
//                         : (
//                           <Box
//                             sx={{
//                               alignItems: 'center',
//                               display: 'flex',
//                               flexDirection: 'column',
//                               justifyContent: 'center',
//                               border: 1,
//                               borderRadius: 1,
//                               borderStyle: 'dashed',
//                               borderColor: 'divider',
//                               height: 230,
//                               mt: 3,
//                               p: 3
//                             }}
//                           >
//                             <Typography
//                               align="center"
//                               color="text.secondary"
//                               variant="h6"
//                             >
//                               Select a cover image
//                             </Typography>
//                             <Typography
//                               align="center"
//                               color="text.secondary"
//                               sx={{ mt: 1 }}
//                               variant="subtitle1"
//                             >
//                               Image used for the news post cover and also for Open Graph meta
//                             </Typography>
//                           </Box>
//                         )}
//                       <div>
//                         <Button
//                           color="inherit"
//                           disabled={!cover}
//                           onClick={handleCoverRemove}
//                         >
//                           Remove photo
//                         </Button>
//                       </div>
//                       <FileDropzone
//                         accept={{ 'image/*': [] }}
//                         maxFiles={1}
//                         onDrop={handleCoverDrop}
//                         caption="(SVG, JPG, PNG, or gif maximum 900x400)"
//                       />
//                     </Stack>
//                   </Grid>
//                 </Grid>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent>
//                 <Grid
//                   container
//                   spacing={3}
//                 >
//                   <Grid
//                     xs={12}
//                     md={4}
//                   >
//                     <Typography variant="h6">
//                       Content
//                     </Typography>
//                   </Grid>
//                   <Grid
//                     xs={12}
//                     md={8}
//                   >
//                     <QuillEditor
//                       placeholder="Write something"
//                       sx={{ height: 330 }}
//                     />
//                   </Grid>
//                 </Grid>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent>
//                 <Grid
//                   container
//                   spacing={3}
//                 >
//                   <Grid
//                     xs={12}
//                     md={4}
//                   >
//                     <Typography variant="h6">
//                       Meta
//                     </Typography>
//                   </Grid>
//                   <Grid
//                     xs={12}
//                     lg={8}
//                   >
//                     <Stack spacing={3}>
//                       <TextField
//                         fullWidth
//                         label="SEO title"
//                         name="title"
//                       />
//                       <TextField
//                         fullWidth
//                         label="SEO description"
//                       />
//                     </Stack>
//                   </Grid>
//                 </Grid>
//               </CardContent>
//             </Card>
//           </Stack>
//           <Box
//             sx={{
//               display: {
//                 sm: 'none'
//               },
//               mt: 2
//             }}
//           >
//             <Button
//               component={NextLink}
//               href={paths.dashboard.news.newsDetails}
//               variant="contained"
//             >
//               Publish changes
//             </Button>
//           </Box>
//         </Container>
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




import { useCallback, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
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
import { FileDropzone } from '../../../components/file-dropzone';
import { QuillEditor } from '../../../components/quill-editor';
import { usePageView } from '../../../hooks/use-page-view';
import { Layout as DashboardLayout } from '../../../layouts/dashboard';
import { paths } from '../../../paths';
import { fileToBase64 } from '../../../utils/file-to-base64';
import { cryptoNews } from '../../../api/news/data';

import { useRouter } from 'next/router';

import { parseISO } from 'date-fns';

const initialCover = '/assets/covers/abstract-1-4x3-large.png';

const Page = () => {
  const [cover, setCover] = useState(initialCover);
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [publishDate, setPublishDate] = useState(new Date()); // Set a default date
  const [readTime, setReadTime] = useState('');


  const router = useRouter();

  usePageView();

  const handleCoverDrop = useCallback(async ([file]) => {
    const data = await fileToBase64(file);
    setCover(data);
  }, []);

  const handleCoverRemove = useCallback(() => {
    setCover(initialCover);
  }, []);

  const handlePublish = () => {
    // Create a new article object with the entered data
    const newArticle = {
      id: String(Date.now()), // Generate a unique ID
      author: {
        avatar: '/assets/avatars/your-avatar.png',
        name: 'Your Name'
      },
      category: 'Your Category',
      cover,
    //   publishedAt: publishDate.toISOString(), 
      publishedAt: Date.now(), 
      readTime,
      shortDescription,
      title,
      content,
      seoTitle,
      seoDescription
    };

    // Update the cryptoNews array with the new article
    cryptoNews.push(newArticle);

    // Now, you can save the updated cryptoNews array wherever you prefer.
    // For example, you can use a server, a database, or local storage.

    // For now, let's just log the updated cryptoNews array to the console.
    console.log('Updated cryptoNews:', cryptoNews);

    // Redirect to post details page after successful publish
    router.push(paths.dashboard.news.index);
  };

  return (
    <>
      <Head>
        <title>News: Create | Rock34x</title>
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
            <Typography variant="h3">Create a new article</Typography>
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
                href={paths.dashboard.news.index}
                variant="subtitle2"
              >
                News
              </Link>
              <Typography color="text.secondary" variant="subtitle2">
                Create
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
                href={paths.dashboard.news.index}
              >
                Cancel
              </Button>
              <Button onClick={handlePublish} variant="contained">
                Publish changes
              </Button>
              <IconButton>
                <SvgIcon>
                  <DotsHorizontalIcon />
                </SvgIcon>
              </IconButton>
            </Stack>
          </Card>
          <Stack spacing={3}>
            <Card>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid xs={12} md={4}>
                    <Typography variant="h6">Basic details</Typography>
                  </Grid>
                  <Grid xs={12} md={8}>
                    <Stack spacing={3}>
                      <TextField
                        fullWidth
                        label="News title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <TextField
                        fullWidth
                        label="Short description"
                        value={shortDescription}
                        onChange={(e) => setShortDescription(e.target.value)}
                      />
                      <TextField
                      fullWidth
                      label="Read Time"
                      value={readTime}
                      onChange={(e) => setReadTime(e.target.value)}
                    />
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid xs={12} md={4}>
                    <Typography variant="h6">News cover</Typography>
                  </Grid>
                  <Grid xs={12} md={8}>
                    <Stack spacing={3}>
                      {cover ? (
                        <Box
                          sx={{
                            backgroundImage: `url(${cover})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            borderRadius: 1,
                            height: 230,
                            mt: 3
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            border: 1,
                            borderRadius: 1,
                            borderStyle: 'dashed',
                            borderColor: 'divider',
                            height: 230,
                            mt: 3,
                            p: 3
                          }}
                        >
                          <Typography
                            align="center"
                            color="text.secondary"
                            variant="h6"
                          >
                            Select a cover image
                          </Typography>
                          <Typography
                            align="center"
                            color="text.secondary"
                            sx={{ mt: 1 }}
                            variant="subtitle1"
                          >
                            Image used for the news post cover and also for Open Graph meta
                          </Typography>
                        </Box>
                      )}
                      <div>
                        <Button
                          color="inherit"
                          disabled={!cover}
                          onClick={handleCoverRemove}
                        >
                          Remove photo
                        </Button>
                      </div>
                      <FileDropzone
                        accept={{ 'image/*': [] }}
                        maxFiles={1}
                        onDrop={handleCoverDrop}
                        caption="(SVG, JPG, PNG, or gif maximum 900x400)"
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid xs={12} md={4}>
                    <Typography variant="h6">Content</Typography>
                  </Grid>
                  <Grid xs={12} md={8}>
                    <QuillEditor
                      placeholder="Write something"
                      sx={{ height: 330 }}
                      value={content}
                      onChange={(value) => setContent(value)}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid xs={12} md={4}>
                    <Typography variant="h6">Meta</Typography>
                  </Grid>
                  <Grid xs={12} lg={8}>
                    <Stack spacing={3}>
                      <TextField
                        fullWidth
                        label="SEO title"
                        name="seoTitle"
                        value={seoTitle}
                        onChange={(e) => setSeoTitle(e.target.value)}
                      />
                      <TextField
                        fullWidth
                        label="SEO description"
                        value={seoDescription}
                        onChange={(e) => setSeoDescription(e.target.value)}
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Stack>
          <Box
            sx={{
              display: {
                sm: 'none'
              },
              mt: 2
            }}
          >
            <Button
              component={NextLink}
              href={paths.dashboard.news.newsDetails}
              variant="contained"
            >
              Publish changes
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
