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
import { newsApi } from '../../../api/news';
import { useMounted } from '../../../hooks/use-mounted';
import { usePageView } from '../../../hooks/use-page-view';
import { Layout as DashboardLayout } from '../../../layouts/dashboard';
import { paths } from '../../../paths';
import { PostNewsletter } from '../../../sections/dashboard/blog/post-newsletter';
import { PostCard } from '../../../sections/dashboard/blog/post-card';
import { BreadcrumbsSeparator } from '../../../components/breadcrumbs-separator';

const useNews = () => {
  const isMounted = useMounted();
  const [news, setNews] = useState([]);

  const getNews = useCallback(async () => {
    try {
      const response = await newsApi.getNews();

      if (isMounted()) {
        setNews(response);
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

  usePageView();

  return (
    <>
      <Head>
        <title>
          News: News List | Rock34x 
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
                List
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
              New Article
            </Button>
          </Card>
          <Typography variant="h4">
            Recent Articles
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ mt: 2 }}
            variant="body1"
          >
            Discover the latest news, tips and user research insights from Acme.
          </Typography>
          <Typography
            color="text.secondary"
            variant="body1"
          >
            You will learn about web infrastructure, design systems and devops APIs best
            practices.
          </Typography>
          <Divider sx={{ my: 4 }} />
          <Grid
            container
            spacing={4}
          >
            {news.map((newsArticle) => (
              <Grid
                key={newsArticle.title}
                xs={12}
                md={6}
              >
                <PostCard
                  authorAvatar={newsArticle.author.avatar}
                  authorName={newsArticle.author.name}
                  category={newsArticle.category}
                  cover={newsArticle.cover}
                  publishedAt={newsArticle.publishedAt}
                  readTime={newsArticle.readTime}
                  shortDescription={newsArticle.shortDescription}
                  title={newsArticle.title}
                  newsId={newsArticle.title}
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
              Older news
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

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
