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
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import Footer2 from './Footer';
import Navbar from './Topbar';

import axios from 'axios';


const Form = () => {
  const [value, setValue] = React.useState('1');
  const [value2, setValue2] = React.useState('male');
  const [value3, setValue3] = React.useState('Yes');
  const [step1Completed, setStep1Completed] = React.useState(false);
  const [checkboxValues, setCheckboxValues] = React.useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  });



  const handleChange = (event, newValue) => {
    if (newValue === '2' && !step1Completed) {
      // Prevent moving to Step 2 if Step 1 is not completed
      return;
    }
    setValue(newValue);
  };

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  const handleCheckboxChange = (name) => (event) => {
    setCheckboxValues({ ...checkboxValues, [name]: event.target.checked });
  };

  const validationSchema = yup.object({
    firstName: yup
      .string('Enter your first name')
      .trim()
      .min(2, 'Please enter a valid first name')
      .max(50, 'Please enter a valid first name')
      .required('Please specify your first name'),
    lastName: yup
      .string('Enter your last name')
      .trim()
      .min(2, 'Please enter a valid last name')
      .max(50, 'Please enter a valid last name')
      .required('Please specify your last name'),
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
        'Please enter a valid phone number.'
      )
      .required('Phone number is required.'),
    linkedin: yup
      .string('Enter your LinkedIn profile URL')
      .trim()
      .url('Please enter a valid URL it should start with https://')
      .required('LinkedIn profile URL is required.'),
      country: yup
      .string('Enter your Country of Citizenship')
      .trim()
      .required('Country of Citizenship is required.'),
    city: yup
      .string('Enter your City')
      .trim()
      .required('City is required.'),
    profile: yup
      .string('Select your Profile')
      .required('Please choose your Profile.'),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    linkedin: '',
    city:'',
    profile: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // Make a POST request using Axios
        console.log(values);
        alert('Your Data Added Successfully');
        resetForm();
        // setValue('1');
        // setStep1Completed(false);
        // const response = await axios.post('your-api-endpoint', values);
        // console.log(response.data); // Handle the response from the server

        // Move to the next step if the current step is completed
        if (value === '1') {
          setValue('2');
          setStep1Completed(true);
        } else {
          // Handle submission for the final step (Step 2)
        }
      } catch (error) {
        console.error('Error submitting data:', error);
        // Handle error logic here
      }
    },
  });

  return (
    <>
      <style>
        {`
          .PhoneInputInput {
            height: 56px;
            transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            outline-color: #16B364;
            border-color: #E5E7EB;
            border-radius: 8px;
            border-style: solid;
            border-width: 1px;
          }
        `}
      </style>
      <Navbar />
      <Box sx={{ marginX: { xs: '20px', md: '200px' }, marginBottom: '30px' }}>
        <Typography variant={'h4'} sx={{ margin: 2 }}>
          Sign Up to Investors
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TabContext value={value}>
            <Box sx={{ marginX: { xs: '20px', md: '20px' } }}>
              <TabList onChange={handleChange}>
                <Tab label="Step 1. Personal details" value="1" />
                <Tab label="Step 2. About Experience" value="2" />
              </TabList>
            </Box>

            {value === '1' && (
              <TabPanel value="1" >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      First Name *
                    </Typography>
                    <TextField
                      label="Enter Your First Name"
                      name={'firstName'}
                      fullWidth
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                      helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Last Name *
                    </Typography>
                    <TextField
                      label="Enter Your Last Name"
                      name={'lastName'}
                      fullWidth
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                      helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
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
                          <FormControlLabel value="male"
                            control={<Radio />} label="Male" />
                          <FormControlLabel value="female" control={<Radio />} label="Female" />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Country of Citizenship*
                    </Typography>
                    <TextField
                      label="Enter Your Country Name"
                      name={'country'}
                      fullWidth
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      error={formik.touched.country && Boolean(formik.errors.country)}
                      helperText={formik.touched.country && formik.errors.country}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Linkedin Profile URL*
                    </Typography>
                    <TextField
                      label="Enter Linkedin URL"
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
                      Wich city do you live in?*
                    </Typography>
                    <TextField
                      label="Enter Your City Name"
                      name={'city'}
                      fullWidth
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      error={formik.touched.city && Boolean(formik.errors.city)}
                      helperText={formik.touched.city && formik.errors.city}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Phone number *
                    </Typography>
                    <PhoneInput
                      international
                      defaultCountry="US"
                      value={formik.values.phone}
                      onChange={(value) => formik.setFieldValue('phone', value)}
                      error={formik.touched.phone && Boolean(formik.errors.phone)}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <Typography variant="caption" color="error">
                        {formik.errors.phone}
                      </Typography>
                    )}
                  </Grid>
                </Grid>

                <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ marginY: 1 }}>
                  <Grid item xs={12} sm={6}>
                    <a size={'large'} href='/'>
                      Go to back
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={6} textAlign="start">
                    <Button size={'large'} variant={'contained'} type="button" onClick={() => setValue('2')}>
                      Next <ArrowRightAltIcon />
                    </Button>
                  </Grid>
                </Grid>
              </TabPanel>
            )}






            {value === '2' && (
              <TabPanel value="2">
                <Grid container spacing={4}>

                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Which of these best describes you?*
                    </Typography>
                    <TextField
                      select
                      label="Select Your Profile"
                      name={'profile'}
                      fullWidth
                      value={formik.values.profile}
                      onChange={formik.handleChange}
                      error={formik.touched.profile && Boolean(formik.errors.profile)}
                      helperText={formik.touched.profile && formik.errors.profile}
                    >
                      <MenuItem value="Technology">Technology</MenuItem>
                      <MenuItem value="Healthcare">Healthcare</MenuItem>
                      {/* Add more sectors as needed */}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Do you have assets worth over INR 2 cr apart from your primary resedence?*
                    </Typography>
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value3}
                        onChange={handleChange3}
                      >
                        <div className='flex'>
                          <FormControlLabel value="yes"
                            control={<Radio />} 
                            label="Yes" />
                          <FormControlLabel value="no" 
                          control={<Radio />} 
                          label="No" />
                        </div>
                        <Typography variant='h8'>
                          This information is required as per SEBI gudelines
                        </Typography>
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Help us understand your experience better (multiple options can be selected)*
                    </Typography>
                    <FormControl component="fieldset">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checkboxValues.checkbox1}
                              onChange={handleCheckboxChange('checkbox1')}
                              name="checkbox1"
                            />
                          }
                          label="
                        You have invested in startups before"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checkboxValues.checkbox2}
                              onChange={handleCheckboxChange('checkbox2')}
                              name="checkbox2"
                            />
                          }
                          label="
                          You come from an entrepreneurial family or have been a founder/co-founder of a business venture family
                          "
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checkboxValues.checkbox3}
                              onChange={handleCheckboxChange('checkbox3')}
                              name="checkbox3"
                            />
                          }
                          label="You have at least 10 years of work experience"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checkboxValues.checkbox4}
                              onChange={handleCheckboxChange('checkbox4')}
                              name="checkbox4"
                            />
                          }
                          label="None of the above"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checkboxValues.checkbox5}
                              onChange={handleCheckboxChange('checkbox5')}
                              name="checkbox5"
                            />
                          }
                          label="I certify that all the information provided by me is accurate and I am willing to provide evidence for the same for KYC purposes when requested."
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>


                </Grid>

                <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{marginY:1}}>
                  <Grid item xs={12} sm={6}>
                    <a size={'large'} href='/'>
                      Go to back
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={6} textAlign="start">
                    <Button size={'large'} variant={'contained'} type={'submit'}>
                      Submit and Sign Up <ArrowRightAltIcon />
                    </Button>
                  </Grid>
                </Grid>
              </TabPanel>
            )}
          </TabContext>
        </form>
      </Box>
      <Footer2 />
    </>
  );
};

export default Form;