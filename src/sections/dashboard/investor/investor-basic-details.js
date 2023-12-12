import PropTypes from 'prop-types';
import { Box, Button, Card,Container, Stack, Typography, SvgIcon, CardActions, CardHeader } from '@mui/material';
import Upload01Icon from '@untitled-ui/icons-react/build/esm/Upload01';
import Download01Icon from '@untitled-ui/icons-react/build/esm/Download01';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import { InvestorListSearch } from '../../../sections/dashboard/investor/investor-list-search';
import { InvestorListTable } from '../../../sections/dashboard/investor/investor-list-table';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useMounted } from '../../../hooks/use-mounted';
import { usePageView } from '../../../hooks/use-page-view';
import { Scrollbar } from '../../../components/scrollbar';
import NextLink from 'next/link';
import { paths } from '../../../paths';


import {
  Avatar,
  Checkbox,
  IconButton,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';


import { PropertyList } from '../../../components/property-list';
import { PropertyListItem } from '../../../components/property-list-item';
import Head from 'next/head';
import { investorApi } from '../../../api/investors';
import { investors } from '../../../api/investors/data';




const useSelectionModel = (investors) => {
  const customerIds = useMemo(() => {
    return investors.map((customer) => investors.id);
  }, [investors]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setSelected([]);
  }, [customerIds]);

  const selectOne = useCallback((customerId) => {
    setSelected((prevState) => [...prevState, customerId]);
  }, []);

  const deselectOne = useCallback((customerId) => {
    setSelected((prevState) => {
      return prevState.filter((id) => id !== customerId);
    });
  }, []);

  const selectAll = useCallback(() => {
    setSelected([...customerIds]);
  }, [customerIds]);

  const deselectAll = useCallback(() => {
    setSelected([]);
  }, []);

  return {
    deselectAll,
    deselectOne,
    selectAll,
    selectOne,
    selected
  };
};


const useSearch = () => {
  const [search, setSearch] = useState({
    filters: {
      query: undefined,
      hasAcceptedMarketing: undefined,
      isProspect: undefined,
      isReturning: undefined
    },
    page: 0,
    rowsPerPage: 5,
    sortBy: 'updatedAt',
    sortDir: 'desc'
  });

  return {
    search,
    updateSearch: setSearch
  };
};

const useCustomers = (search) => {
  const isMounted = useMounted();
  const [state, setState] = useState({
    customers: [],
    customersCount: 0
  });

  const getCustomers = useCallback(async () => {
    try {
      const response = await investorApi.getCustomers(search);

      if (isMounted()) {
        setState({
          customers: response.data,
          customersCount: response.count
        });
      }
    } catch (err) {
      console.error(err);
    }
  }, [search, isMounted]);

  useEffect(() => {
      getCustomers();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [search]);

  return state;
};

export const InvestorBasicDetails = (props) => {

  const {
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage
  } = props;

  const { address1, address2, country, email, isVerified, phone, state, ...other } = props;
  const { search, updateSearch } = useSearch();
  const { customers, customersCount } = useCustomers(search);

  const { selected } = useSelectionModel(customers);

  usePageView();


  const handlePageChange = useCallback((event, page) => {
    updateSearch((prevState) => ({
      ...prevState,
      page
    }));
  }, [updateSearch]);

  const handleRowsPerPageChange = useCallback((event) => {
    updateSearch((prevState) => ({
      ...prevState,
      rowsPerPage: parseInt(event.target.value, 10)
    }));
  }, [updateSearch]);

  return (
  <Box>
    <Container maxWidth="xl">
          <Scrollbar>
            <Table sx={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    Image
                  </TableCell>
                  <TableCell>
                    Deal
                  </TableCell>
                  <TableCell>
                    Allocation
                  </TableCell>
                  <TableCell>
                    Tokens received
                  </TableCell>
                  <TableCell>
                    Receiving EVM
                  </TableCell>
                  <TableCell>
                    Contributed
                  </TableCell>
                  <TableCell>
                    Refunded
                  </TableCell>
                  <TableCell>
                    OTC
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {investors.map((investor) => {
                  const isSelected = selected.includes(investor.id);
    
                  const deal = investor.deal;
                  const allocation = investor.allocation;
                  const tokensReceived = investor.tokensReceived;
                  const receivingEVM = investor.receivingEVM;
                  const contributed = investor.contributed;
                  const refunded = investor.refunded;
                  const otc = investor.otc;
                  
    
                  return (
                    <TableRow
                      hover
                      key={investor.id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isSelected}
                          onChange={(event) => {
                            const { checked } = event.target;
    
                            if (checked) {
                              selectOne(investor.id);
                            } else {
                              deselectOne(investor.id);
                            }
                          }}
                          value={isSelected}
                        />
                      </TableCell>
    
    
                      <TableCell>
                        <Stack
                          alignItems="center"
                          direction="row"
                          spacing={1}
                        >
                          <Avatar
                            src={investor.avatar}
                            sx={{
                              height: 42,
                              width: 42,
                              marginRight: 1
                            }}
                          >
                          </Avatar>
                          <Link
                            color="inherit"
                            component={NextLink}
                            href={paths.dashboard.investors.details}
                            variant="subtitle2"
                          >
                            {deal}
                          </Link>
                        </Stack>
                      </TableCell>
                      <TableCell><Stack
                        alignItems="center"
                        direction="row"
                        spacing={1}
                      >
                        <Avatar
                          src={investor.avatar}
                          sx={{
                            height: 42,
                            width: 42,
                            marginRight: 1
                          }}
                        >
                        </Avatar>
                        {allocation}
                      </Stack></TableCell>
                      <TableCell>{tokensReceived}</TableCell>
                      <TableCell>{receivingEVM}</TableCell>
                      <TableCell>{contributed}</TableCell>
                      <TableCell>{refunded}</TableCell>
                      <TableCell>{otc}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Scrollbar>
          <TablePagination
            component="div"
            count={customersCount}
            onPageChange={onPageChange}
            onRowsPerPageChange={onRowsPerPageChange}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
    </Container>
  </Box>
  );
};


InvestorListTable.propTypes = {
  customers: PropTypes.array.isRequired,
  customersCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};
