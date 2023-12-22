// import PropTypes from 'prop-types';
import React from 'react';
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

export const OverviewBest = () => {
  // const { products } = props;

  const products = [
    {
      id: '1',
      name: 'Bitcoin',
      desc: 'Bitcoin is a decentralized digital currency',
      // desc: 'Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.',
      category: 'Accessories',
      image: '/assets/deal-icon/icon.png',
      sales: 13153
    },
    {
      id: '2',
      name: 'Ethereum',
      desc: 'Ethereum is a decentralized, open-source blockchain with smart contract functionality',
      // desc: 'Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether (ETH), the native cryptocurrency, is created and used to compensate participants who perform computations and validate transactions.',
      category: 'Accessories',
      image: '/assets/deal-icon/icon2.png',
      sales: 10300
    },
    {
      id: '3',
      name: 'Binance Coin',
      desc: 'Cryptocurrency used to pay for transaction fees on the Binance exchange',
      // desc: 'Binance Coin (BNB) is a cryptocurrency used to pay for transaction fees on the Binance exchange. It can also be used for various other purposes within the Binance ecosystem.',
      category: 'Accessories',
      image: '/assets/deal-icon/icon3.png',
      sales: 5300
    },
    {
      id: '4',
      name: 'Cardano',
      desc: 'Blockchain platform for the development of decentralized applications',
      // desc: 'Cardano is a blockchain platform for the development of decentralized applications (DApps). It aims to provide a more secure and scalable infrastructure for the development of smart contracts and DApps.',
      category: 'Accessories',
      image: '/assets/deal-icon/icon4.png',
      sales: 1203
    },
    {
      id: '5',
      name: 'Solana',
      desc: 'High-performance blockchain supporting decentralized applications and crypto projects',
      // desc: 'Solana is a high-performance blockchain supporting decentralized applications and crypto projects. It aims to provide fast and low-cost transactions, making it suitable for a wide range of applications.',
      category: 'Accessories',
      image: '/assets/deal-icon/icon5.png',
      sales: 254
    }
  ]

  return (
    <Card>
      <CardHeader
        action={<MoreMenu />}
        title="Best Buy"
      />
      <Scrollbar>
        <Table sx={{ minWidth: 300 }}>
          <TableBody>
            {products.map((product, index) => {
              // const sales = numeral(product.sales).format('0,0');

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
                              height: 80,
                              justifyContent: 'center',
                              overflow: 'hidden',
                              width: 80,
                              minWidth:80
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
                          in {product.desc}
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
