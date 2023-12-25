import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { format, subHours } from 'date-fns';
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Link,
  Stack,
  Typography
} from '@mui/material';
import { newsApi } from '../../../api/news';
import { BreadcrumbsSeparator } from '../../../components/breadcrumbs-separator';
import { useMounted } from '../../../hooks/use-mounted';
import { usePageView } from '../../../hooks/use-page-view';
import { Layout as DashboardLayout } from '../../../layouts/dashboard';
import { paths } from '../../../paths';
import { PostComment } from '../../../sections/dashboard/blog/post-comment';
import { PostCommentAdd } from '../../../sections/dashboard/blog/post-comment-add';
import { PostNewsletter } from '../../../sections/dashboard/blog/post-newsletter';
import { PostContent } from '../../../sections/dashboard/blog/post-content';
import { useRouter } from 'next/router';

const useComments = () => {
  return [
    {
      id: 'd0ab3d02ef737fa6b007e35d',
      authorAvatar: '/assets/avatars/avatar-alcides-antonio.png',
      authorName: 'Alcides Antonio',
      authorRole: 'Product Designer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      createdAt: subHours(new Date(), 2).getTime(),
      isLiked: true,
      likes: 12
    },
    {
      id: '3ac1e17289e38a84108efdf3',
      authorAvatar: '/assets/avatars/avatar-jie-yan-song.png',
      authorName: 'Jie Yan Song',
      authorRole: 'Web Developer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      createdAt: subHours(new Date(), 8).getTime(),
      isLiked: false,
      likes: 8
    }
  ];
};

const useNews = () => {
  const isMounted = useMounted();
  const router = useRouter();
  const { newsId } = router.query; 
  console.log(newsId)

  const [news, setNews] = useState(null);

  const getNews = useCallback(async () => {
    try {
      if(newsId == undefined) {
        throw new Error('No news ID provided');
      }
      const response = await newsApi.getNewsArticle(newsId);

      if (isMounted()) {
        setNews(response);
        console.log(news);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
      getNews();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  return news;
};

const Page = () => {
  const news = useNews();
  const comments = useComments();

  usePageView();

  if (!news) {
    return null;
  }

  const publishedAt = format(news.publishedAt, 'MMMM d, yyyy');
// const publishedAt = format(new Date(news.publishedAt), 'MMMM d, yyyy');

  return (
    <>
      <Head>
        <title>
          News: News Details | Rock34x 
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
          <Stack spacing={1}>
            <Typography variant="h3">
              News
            </Typography>
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
              <Typography
                color="text.secondary"
                variant="subtitle2"
              >
                Details
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
            <Typography variant="subtitle1">
              Hello, Admin
            </Typography>
            <Button
              component={NextLink}
              href={paths.dashboard.news.newsCreate}
              variant="contained"
            >
              Edit news
            </Button>
          </Card>
          <Stack spacing={3}>
            <div>
              <Chip label={news.category} />
            </div>
            <Typography variant="h3">
              {news.title}
            </Typography>
            <Typography
              color="text.secondary"
              variant="subtitle1"
            >
              {news.shortDescription}
            </Typography>
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
              sx={{ mt: 3 }}
            >
             
              <div>
                <Typography variant="subtitle2">
                  By
                  {' '}
                  {news.author.name}
                  {' '}
                  •
                  {' '}
                  {/*{publishedAt}*/}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  {news.readTime} read
                </Typography>
              </div>
            </Stack>
          </Stack>
          <Box
            sx={{
              backgroundImage: `url(${news.cover})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              borderRadius: 1,
              height: 380,
              mt: 3
            }}
          />
          {news.content && (
            <Container sx={{ py: 3 }}>
              <PostContent content={news.content} />
            </Container>
          )}
          <Divider sx={{ my: 3 }} />
          <Stack spacing={2}>
            {comments.map((comment) => (
              <PostComment
                key={comment.id}
                {...comment} />
            ))}
          </Stack>
          <Divider sx={{ my: 3 }} />
          <PostCommentAdd />
          <Box sx={{ mt: 8 }}>
            <PostNewsletter />
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



