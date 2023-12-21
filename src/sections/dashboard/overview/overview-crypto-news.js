import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import RefreshCcw01Icon from '@untitled-ui/icons-react/build/esm/RefreshCcw01';
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  SvgIcon,
  Typography
} from '@mui/material';
import { formatDistanceStrict } from 'date-fns';
import { customLocale } from '../../../utils/date-locale';
import { useRouter } from 'next/router';
import { paths } from '../../../paths';

export const OverviewCryptoNews = (props) => {
  const { articles } = props;
  
  const router = useRouter();

  return (
    <Card>
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
    </Card>
  );
};

OverviewCryptoNews.propTypes = {
  articles: PropTypes.array.isRequired
};
