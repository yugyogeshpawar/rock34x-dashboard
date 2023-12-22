// // Import necessary modules
// import { formatDistanceToNowStrict, subHours } from 'date-fns';
// import { Avatar, Box, Card, CardHeader, Link, Stack, Typography } from '@mui/material';

// // Get the current date
// const now = new Date();

// // Sample crypto news data
// const cryptoNews = [
//   {
//     id: '1',
//     author: {
//       avatar: '/assets/deal-icon/icon.png',
//       name: 'Jane Doe'
//     },
//     headline: 'Major Blockchain Conference Scheduled for Next Month',
//     createdAt: subHours(now, 1).getTime()
//   },
//   {
//     id: '2',
//     author: {
//       avatar: '/assets/deal-icon/icon2.png',
//       name: 'John Smith'
//     },
//     headline: 'New Decentralized Finance (DeFi) Protocol Launches on Ethereum',
//     createdAt: subHours(now, 3).getTime()
//   },
//   // {
//   //   id: '3',
//   //   author: {
//   //     avatar: '/assets/deal-icon/icon3.png',
//   //     name: 'Alice Wonder'
//   //   },
//   //   headline: 'Bitcoin Adoption Continues to Grow as Major Retailer Accepts BTC Payments',
//   //   createdAt: subHours(now, 5).getTime()
//   // },
//   // Add more news items as needed
// ];

// // React component for displaying crypto news
// export const OverviewNews = () => (
//   <Card 
//     sx={{
//       p: 2
//     }}
//   >
//   <Link color="text.primary" href='/dashboard/cryptonews'>
//     <CardHeader sx={{px:2, py:2}}
//       title="Crypto News"
//     />
//     </Link>
//     <Stack spacing={1}>
//       {cryptoNews.map((news) => {
//         const ago = formatDistanceToNowStrict(news.createdAt);

//         return (
//           <Card key={news.id}>
//             <CardHeader
//               avatar={<Avatar src={news.author.avatar} />}
//               disableTypography
//               subheader={(
//                 <Typography
//                   color="text.secondary"
//                   variant="body2"
//                 >
//                   {ago}
//                   {' '}
//                   ago
//                 </Typography>
//               )}
//               title={(
//                 <Link
//                   color="text.primary"
//                   variant="subtitle2"
//                 >
//                   {news.author.name}
//                 </Link>
//               )}
//             />
//             <Box
//               sx={{
//                 pb: 2,
//                 px: 3
//               }}
//             >
//               <Typography
//                 color="text.secondary"
//                 variant="body1"
//               >
//                 {news.headline}
//               </Typography>
//             </Box>
//           </Card>
//         );
//       })}
//     </Stack>
//   </Card>
// );


// import PropTypes from 'prop-types';
import React, {useState} from 'react';
import numeral from 'numeral';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Image01Icon from '@untitled-ui/icons-react/build/esm/Image01';
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
import { MoreMenu } from '../../../components/more-menu';
import { Scrollbar } from '../../../components/scrollbar';

export const OverviewNews = () => {

 // const { products } = props;

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
 

  const products = [
    {
      id: '1',
      name: 'Bitcoin',
      description: 'Digital gold',
      desc: 'Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.',
      category: 'Accessories',
      image: '/assets/covers/crypto-news-1.jpg',
      sales: 13153
    },
    {
      id: '2',
      name: 'Ethereum',
      description: 'Smart contracts platform',
      desc: 'Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether (ETH), the native cryptocurrency, is created and used to compensate participants who perform computations and validate transactions.',
      category: 'Accessories',
      image: '/assets/covers/crypto-news-2.png',
      sales: 10300
    },
    {
      id: '3',
      name: 'Binance Coin',
      description: 'Cryptocurrency used to pay for transaction fees on the Binance exchange',
      desc: 'Binance Coin (BNB) is a cryptocurrency used to pay for transaction fees on the Binance exchange. It can also be used for various other purposes within the Binance ecosystem.',
      category: 'Accessories',
      image: '/assets/covers/crypto-news-3.jpg',
      sales: 5300
    },
    {
      id: '4',
      name: 'Cardano',
      description: 'Blockchain platform for the development of decentralized applications',
      desc: 'Cardano is a blockchain platform for the development of decentralized applications (DApps). It aims to provide a more secure and scalable infrastructure for the development of smart contracts and DApps.',
      category: 'Accessories',
      image: '/assets/covers/crypto-news-4.png',
      sales: 1203
    },
    // {
    //   id: '5',
    //   name: 'Solana',
    //   description: 'High-performance blockchain supporting decentralized applications and crypto projects',
    //   desc: 'Solana is a high-performance blockchain supporting decentralized applications and crypto projects. It aims to provide fast and low-cost transactions, making it suitable for a wide range of applications.',
    //   category: 'Accessories',
    //   image: '/assets/products/product-5.png',
    //   sales: 254
    // }
  ]

  return (
    <Card>
      <CardHeader
        action={<MoreMenu />}
        title="Crypto News"
      />
      <Scrollbar>
        <Table sx={{ minWidth: 300 }}>
          <TableBody>
            {products.map((product, index) => {
              // const sales = numeral(product.sales).format('0,0');
              const isExpanded = expandedIds.includes(product.id);
              const truncatedDesc = isExpanded ? product.desc : product.desc.substr(0, 150);


              return (
                <TableRow
                  hover
                  key={product.id}
                >
                  <TableCell>
                    <Stack
                      alignItems="center"
                      direction="row"
                      spacing={2}
                    >
                      {product.image
                        ? (
                          <Box
                            sx={{
                              alignItems: 'center',
                              backgroundColor: 'neutral.50',
                              backgroundImage: `url(${product.image})`,
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
                          {product.name}
                        </Typography>
                        <Typography
                          color="text.secondary"
                          variant="body2"
                        >
                        {truncatedDesc}
                          {product.desc.length > 150 && (
                            <Button
                              color="primary"
                              size="small"
                              onClick={() => handleToggleExpansion(product.id)}
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
        >
          See All
        </Button>
      </CardActions>
    </Card>
  );
};

// EcommerceProducts.propTypes = {
//   products: PropTypes.array.isRequired
// };
