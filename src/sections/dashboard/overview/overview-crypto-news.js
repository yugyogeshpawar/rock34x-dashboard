import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Image01Icon from '@untitled-ui/icons-react/build/esm/Image01';
import RefreshCcw01Icon from '@untitled-ui/icons-react/build/esm/RefreshCcw01';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography
} from '@mui/material';
import { formatDistanceStrict } from 'date-fns';
import { customLocale } from '../../../utils/date-locale';
import { useRouter } from 'next/router';
import { paths } from '../../../paths';
import { MoreMenu } from '../../../components/more-menu';
import { Scrollbar } from '../../../components/scrollbar';
import { useState } from 'react';

export const OverviewCryptoNews = (props) => {
  const { articles } = props;
  const router = useRouter();

  const [expandedIds, setExpandedIds] = useState([]);

  const handleToggleExpansion = (productId) => {
    setExpandedIds((prevIds) => {
      if (prevIds.includes(productId)) {
        // If already expanded, remove from the list
        return prevIds.filter((id) => id !== productId);
      } else {
        // If not expanded, add to the list
        return [...prevIds, productId];
      }
    });
  };
  

  
  { /* <Card>
      <CardHeader
        title="Crypto News"
        action={(
          <IconButton color="inherit">
            <SvgIcon fontSize="small">
              <RefreshCcw01Icon />
            </SvgIcon>
          </IconButton>
        )}
      />
      <List disablePadding>
        {articles.map((article) => {
          const ago = formatDistanceStrict(article.createdAt, new Date(), {
            addSuffix: true,
            locale: customLocale
          });

          return (
            <ListItem
              key={article.id}
              sx={{
                '&:hover': {
                  backgroundColor: 'action.hover',
                  cursor: 'pointer'
                }
              }}
            >
              <ListItemAvatar>
                <Avatar src={article.authorAvatar} />
              </ListItemAvatar>
              <ListItemText
                primary={(
                  <Typography
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                    variant="subtitle2"
                  >
                    {article.authorName}
                  </Typography>
                )}
                secondary={(
                  <Typography
                    color="text.secondary"
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                    variant="body2"
                  >
                    {article.content}
                  </Typography>
                )}
                sx={{ pr: 2 }}
              />
              <Typography
                color="text.secondary"
                sx={{ whiteSpace: 'nowrap' }}
                variant="caption"
              >
                {ago}
              </Typography>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <CardActions>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon>
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          onClick={() => router.push(paths.dashboard.news.index)}
        >
          Read more
        </Button>
      </CardActions>
          </Card>*/}
        
          return (
          <Card>
          <CardHeader
            action={<MoreMenu />}
            title="Crypto News"
          />
          <Scrollbar>
            <Table sx={{ minWidth: 300 }}>
              <TableBody>
                {articles.map((article, index) => {
                  // const sales = numeral(article.sales).format('0,0');
                  const isExpanded = expandedIds.includes(article.id);
                  const truncatedDesc = isExpanded ? article.desc : article.desc.substr(0, 150);
    
    
                  return (
                    <TableRow
                      hover
                      key={article.id}
                    >
                      <TableCell>
                        <Stack
                          alignItems="center"
                          direction="row"
                          spacing={2}
                        >
                          {article.image
                            ? (
                              <Box
                                sx={{
                                  alignItems: 'center',
                                  backgroundColor: 'neutral.50',
                                  backgroundImage: `url(${article.image})`,
                                  backgroundPosition: 'center',
                                  backgroundSize: 'cover',
                                  borderRadius: 1,
                                  display: 'flex',
                                  height: isExpanded ? 140 : 120,
                                  // maxHeight: 200,
                                  justifyContent: 'center',
                                  overflow: 'hidden',
                                  width: 200,
                                  minWidth:200,
                                }}
                              />
                            )
                            : (
                              <Box
                                sx={{
                                  alignItems: 'center',
                                  backgroundColor: (theme) => theme.palette.mode === 'dark'
                                    ? 'neutral.700'
                                    : 'neutral.50',
                                  borderRadius: 1,
                                  display: 'flex',
                                  height: 80,
                                  justifyContent: 'center',
                                  width: 80,
                                  minWidth:80
                                }}
                              >
                                <SvgIcon>
                                  <Image01Icon />
                                </SvgIcon>
                              </Box>
                            )}
                          <div>
                            <Typography variant="subtitle2">
                              {article.name}
                            </Typography>
                            <Typography
                              color="text.secondary"
                              variant="body2"
                            >
                            {truncatedDesc}
                              {article.desc.length > 150 && (
                                <Button
                                  color="primary"
                                  size="small"
                                  onClick={() => handleToggleExpansion(article.id)}
                                  sx={{ m: 0, p: 0,px:1 }}
                                >
                                  {isExpanded ? 'Read Less' : 'Read More'}
                                </Button>
                              )}
                            </Typography>
                          </div>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Scrollbar>
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button
              color="inherit"
              endIcon={(
                <SvgIcon>
                  <ArrowRightIcon />
                </SvgIcon>
              )}
              size="small"
              onClick={() => router.push(paths.dashboard.news.index)}
            >
              See All
            </Button>
          </CardActions>
        </Card>
  );
};

OverviewCryptoNews.propTypes = {
  articles: PropTypes.array.isRequired
};
