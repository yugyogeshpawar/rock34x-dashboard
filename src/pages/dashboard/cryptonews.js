import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
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
    Unstable_Grid2 as Grid
} from '@mui/material';
import { blogApi } from '../../api/blog';
import { useMounted } from '../../hooks/use-mounted';
import { usePageView } from '../../hooks/use-page-view';
import { Layout as DashboardLayout } from '../../layouts/dashboard';
import { paths } from '../../paths';
import { PostNewsletter } from '../../sections/dashboard/blog/post-newsletter';
import { PostCard } from '../../sections/dashboard/blog/post-card';

const usePosts = () => {
    const isMounted = useMounted();
    const [posts, setPosts] = useState([]);

    const getPosts = useCallback(async () => {
        try {
            const response = await blogApi.getPosts();

            if (isMounted()) {
                setPosts(response);
            }
        } catch (err) {
            console.error(err);
        }
    }, [isMounted]);

    useEffect(() => {
        getPosts();
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []);

    return posts;
};

const Page = () => {
    const posts = usePosts();

    usePageView();

    return (
        <>
            <Head>
                <title>
                    Crypto News | Rock34x
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 4
                }}
            >
                <Container maxWidth="xl">
                    <Stack spacing={1} sx={{ my: 2 }}>
                        <Typography variant="h3">
                            Crypto News
                        </Typography>
                    </Stack>


                    <Box
                        component="section"
                        sx={{
                            flexGrow: 1,
                            py: 4
                        }}
                    >
                        <Typography variant="h5">
                            Recent News
                        </Typography>
                        <Typography
                            color="text.secondary"
                            sx={{ mt: 2 }}
                            variant="body1"
                        >
                            Discover the latest news, tips and user research insights from Admin.
                        </Typography>
                        <Divider sx={{ my: 4 }} />
                        <Grid
                            container
                            spacing={4}
                        >
                            {posts.map((post) => (
                                <Grid
                                    key={post.title}
                                    xs={12}
                                    md={6}
                                >
                                    <PostCard
                                        authorAvatar={post.author.avatar}
                                        authorName={post.author.name}
                                        category={post.category}
                                        cover={post.cover}
                                        publishedAt={post.publishedAt}
                                        readTime={post.readTime}
                                        shortDescription={post.shortDescription}
                                        title={post.title}
                                        sx={{ height: '100%' }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        <Stack
                            alignItems="center"
                            direction="row"
                            justifyContent="center"
                            spacing={1}
                            sx={{
                                mt: 4,
                                mb: 8
                            }}
                        >
                            <Button
                                disabled
                                startIcon={(
                                    <SvgIcon>
                                        <ArrowLeftIcon />
                                    </SvgIcon>
                                )}
                            >
                                Newer
                            </Button>
                            <Button
                                endIcon={(
                                    <SvgIcon>
                                        <ArrowRightIcon />
                                    </SvgIcon>
                                )}
                            >
                                Older posts
                            </Button>
                        </Stack>
                        <Box sx={{ mt: 8 }}>
                            <PostNewsletter />
                        </Box>
                    </Box>
                </Container>
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
