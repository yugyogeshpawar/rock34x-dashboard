import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const Form = () => {
  const [value, setValue] = React.useState('1');
  const [value2, setValue2] = React.useState('male');
  const [value3, setValue3] = React.useState('Yes');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  const validationSchema = yup.object({
    firstName: yup
      .string('Enter your first name')
      .trim()
      .min(2, 'Please enter a valid name')
      .max(50, 'Please enter a valid name')
      .required('Please specify your first name'),
    email: yup
      .string('Enter your email')
      .trim()
      .email('Please enter a valid email address')
      .required('Email is required.'),
    phone: yup
      .string()
      .trim()
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
        'Please enter a valid phone number.',
      )
  });


  const initialValues = {
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    kindofreferrer: '',
    referrer: '',
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });



  return (
    <Box sx={{ width: '100%', margin: '10px', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Step 1. Personal details" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div>
            <Box sx={{ marginX: { sm: 0, md: '50px' }, marginY: { sm: 0, md: '20px' } }}>
              <form
                onSubmit={formik.handleSubmit}>
                <Box
                  component={Grid}
                  marginBottom={{ xs: 10, sm: 0 }}
                  container
                  spacing={4}
                >
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Your Name *
                    </Typography>
                    <TextField
                      label="Text Your Name"
                      name={'Name'}
                      fullWidth
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.name && Boolean(formik.errors.name)
                      }
                      helperText={formik.touched.name && formik.errors.name}
                    />
                  </Grid>
                  <Grid item
                    xs={12}
                    sm={6}>
                    <Typography variant={'subtitle2'}
                      sx={{ marginBottom: 2 }}>
                      Email ID*
                    </Typography>
                    <TextField
                      label="Email ID"

                      name={'email'}
                      fullWidth
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Gender*
                    </Typography>
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value2}
                        onChange={handleChange2}
                      >
                        <div className='flex'>
                          <FormControlLabel value="male" control={<Radio />} label="Male" />
                          <FormControlLabel value="female" control={<Radio />} label="Female" />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Phone number *
                    </Typography>
                    <TextField
                      label="Text Phone number"

                      name={'phone'}
                      fullWidth
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      error={formik.touched.phone && Boolean(formik.errors.phone)}
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Linkedin Profile URL*
                    </Typography>
                    <TextField
                      label="Text Linkedin URL"

                      name={'linkedin'}
                      fullWidth
                      value={formik.values.linkedin}
                      onChange={formik.handleChange}
                      error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
                      helperText={formik.touched.linkedin && formik.errors.linkedin}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Choose kind of Referrer*
                    </Typography>
                    <TextField
                      label="Choose kind of Referrer"

                      name={'kindofreferrer'}
                      fullWidth
                      value={formik.values.kindofreferrer}
                      onChange={formik.handleChange}
                      error={formik.touched.kindofreferrer && Boolean(formik.errors.kindofreferrer)}
                      helperText={formik.touched.kindofreferrer && formik.errors.kindofreferrer}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Referrer Name*
                    </Typography>
                    <TextField
                      label="Text Referrer Name"

                      name={'referrer'}
                      fullWidth
                      value={formik.values.referrer}
                      onChange={formik.handleChange}
                      error={formik.touched.referrer && Boolean(formik.errors.referrer)}
                      helperText={formik.touched.referrer && formik.errors.referrer}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Are you a single Founder?*
                    </Typography>
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value3}
                        onChange={handleChange3}
                      >
                        <div className='flex'>
                          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                          <FormControlLabel value="No" control={<Radio />} label="No" />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={7}
                    justifyContent={'center'}
                    alignItems={'start'}
                    flexDirection={'column'}
                  >
                    <a size={'large'} href='/'>
                      Go to back
                    </a>
                    <Grid
                      item
                      container
                      xs={12}
                      justifyContent={'center'}
                      alignItems={'end'}
                      flexDirection={'column'}
                      marginRight={{ sm: 10, md: '70px' }}
                    >
                      <Button size={'large'} variant={'contained'} type={'submit'}>
                        Next
                        <ArrowRightAltIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </Box>
          </div>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}


export default Form;





