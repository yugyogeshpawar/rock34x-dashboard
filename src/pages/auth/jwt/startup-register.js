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

  const validationSchemaStep1 = yup.object({
    name: yup
      .string('Enter your name')
      .trim()
      .min(2, 'Please enter a valid name')
      .max(50, 'Please enter a valid name')
      .required('Please specify your name'),
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
      .url('Please enter a valid URL it should be start with https://')
      .required('LinkedIn profile URL is required.'),
    kindofreferrer: yup
      .string('Select kind of Referrer')
      .required('Please choose kind of Referrer'),
  });
  const validationSchemaStep2 = yup.object({
    nameofstartup: yup
      .string('Enter the name of your Startup')
      .trim()
      .required('Name of Startup is required.'),
    registerednameofstartup: yup
      .string('Enter the registered name of your Startup')
      .trim()
      .required('Registered name of Startup is required.'),
    websiteurl: yup
      .string('Enter the Website URL')
      .trim()
      .url('Please enter a valid URL for your Startup website')
      .required('Website URL is required.'),
    sectorofstartup: yup
      .string('Select Sectors')
      .required('Please choose the sector of your Startup'),
    stageofstartup: yup
      .string('Select Stage')
      .required('Please choose the stage of your Startup'),
    monthandyearofincorporation: yup
      .string('Enter Month & Year of Incorporation')
      .trim()
      .matches(
        /^(0[1-9]|1[0-2])\/(19|20)\d{2}$/,
        'Please enter a valid MM/YYYY format'
      )
      .required('Month & Year of Incorporation is required.'),
    companytype: yup
      .string('Select Company Type')
      .required('Please choose the type of your Company'),
      cityofoperation: yup
      .string('Enter City of Operation')
      .trim()
      .required('City of Operation is required.'),    
    pleaseshareyourpitchdeck: yup
      .string('Upload Pitch Deck')
      .trim()
      .required('Please upload your pitch deck.'),
    characterstotell: yup
      .string('Tell us about your Startup in 100 characters')
      .trim()
      .max(100, 'Maximum 100 characters allowed.')
      .required('Please provide a brief description of your Startup.'),
  });

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    kindofreferrer: '',
    referrer: '',
    nameofstartup: '',
    registerednameofstartup: '',
    websiteurl: '',
    sectorofstartup: '',
    stageofstartup: '',
    monthandyearofincorporation: '',
    companytype: '',
    cityofoperation: '',
    pleaseshareyourpitchdeck: '',
    characterstotell: '',
  };

  // const onSubmitStep1 = (values) => {
  //   console.log(values); // Handle form submission logic for Step 1 here
  //   // Move to Step 2
  //   setValue('2');
  //   setStep1Completed(true);
  // };

  // const onSubmitStep2 = (values) => {
  //   console.log(values); // Handle form submission logic for Step 2 here
  // };

  const onSubmitStep1 = async (values) => {
    try {
      // Make a POST request using Axios
      const response = await axios.post('your-api-endpoint-for-step-1', values);
      console.log(response.data); // Handle the response from the server
      // Move to Step 2
      setValue('2');
      setStep1Completed(true);
    } catch (error) {
      console.error('Error submitting Step 1:', error);
      // Handle error logic here
    }
  };

  const onSubmitStep2 = async (values) => {
    try {
      // Make a POST request using Axios
      const response = await axios.post('your-api-endpoint-for-step-2', values);
      console.log(response.data); // Handle the response from the server
    } catch (error) {
      console.error('Error submitting Step 2:', error);
      // Handle error logic here


  const formikStep1 = useFormik({
    initialValues,
    validationSchema: validationSchemaStep1,
    onSubmit: onSubmitStep1,
  });

  const formikStep2 = useFormik({
    initialValues,
    validationSchema: validationSchemaStep2,
    onSubmit: onSubmitStep2,
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
        <TabContext value={value}>
          <Box sx={{ marginX: { xs: '20px', md: '20px' } }}>
            <TabList onChange={handleChange}>
              <Tab label="Step 1. Personal details" value="1" />
              <Tab label="Step 2. Startup details" value="2" />
            </TabList>
          </Box>

          {value === '1' && (
            <TabPanel value="1" >
              <form onSubmit={formikStep1.handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Your Name *
                    </Typography>
                    <TextField
                      label="Enter Your Name"
                      name={'name'}
                      fullWidth
                      value={formikStep1.values.name}
                      onChange={formikStep1.handleChange}
                      error={formikStep1.touched.name && Boolean(formikStep1.errors.name)}
                      helperText={formikStep1.touched.name && formikStep1.errors.name}
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
                      value={formikStep1.values.email}
                      onChange={formikStep1.handleChange}
                      error={formikStep1.touched.email && Boolean(formikStep1.errors.email)}
                      helperText={formikStep1.touched.email && formikStep1.errors.email}
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
                      Phone number *
                    </Typography>
                    <PhoneInput
                      international
                      defaultCountry="US"
                      value={formikStep1.values.phone}
                      onChange={(value) => formikStep1.setFieldValue('phone', value)}
                      error={formikStep1.touched.phone && Boolean(formikStep1.errors.phone)}
                    />
                    {formikStep1.touched.phone && formikStep1.errors.phone && (
                      <Typography variant="caption" color="error">
                        {formikStep1.errors.phone}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Linkedin Profile URL*
                    </Typography>
                    <TextField
                      label="Enter Linkedin URL"
                      name={'linkedin'}
                      fullWidth
                      value={formikStep1.values.linkedin}
                      onChange={formikStep1.handleChange}
                      error={formikStep1.touched.linkedin && Boolean(formikStep1.errors.linkedin)}
                      helperText={formikStep1.touched.linkedin && formikStep1.errors.linkedin}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Choose kind of Referrer*
                    </Typography>
                    <TextField
                      select
                      label="Choose kind of Referrer"
                      name={'kindofreferrer'}
                      fullWidth
                      value={formikStep1.values.kindofreferrer}
                      onChange={formikStep1.handleChange}
                      error={formikStep1.touched.kindofreferrer && Boolean(formikStep1.errors.kindofreferrer)}
                      helperText={formikStep1.touched.kindofreferrer && formikStep1.errors.kindofreferrer}
                    >
                      <MenuItem value="investors">Investors</MenuItem>
                      <MenuItem value="startups">Startups</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Referrer Name*
                    </Typography>
                    <TextField
                      label="Enter Referrer Name"
                      name={'referrer'}
                      fullWidth
                      value={formikStep1.values.referrer}
                      onChange={formikStep1.handleChange}
                      error={formikStep1.touched.referrer && Boolean(formikStep1.errors.referrer)}
                      helperText={formikStep1.touched.referrer && formikStep1.errors.referrer}
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
                </Grid>

                <Grid container spacing={3} justifyContent="center" alignItems="center">
                  <Grid item xs={12} sm={6}>
                    <a size={'large'} href='/'>
                      Go to back
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={6} textAlign="start">
                    <Button size={'large'} variant={'contained'} type={'submit'}>
                      Next <ArrowRightAltIcon />
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </TabPanel>
          )}

          {value === '2' && (
            <TabPanel value="2">
              <form onSubmit={formikStep2.handleSubmit}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Name of Startup*
                    </Typography>
                    <TextField
                      label="Text the name of yout Startup"
                      name={'nameofstartup'}
                      fullWidth
                      value={formikStep2.values.nameofstartup}
                      onChange={formikStep2.handleChange}
                      error={
                        formikStep2.touched.nameofstartup && Boolean(formikStep2.errors.nameofstartup)
                      }
                      helperText={formikStep2.touched.nameofstartup && formikStep2.errors.nameofstartup}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Registered name of Startup*
                    </Typography>
                    <TextField
                      label="Text register name of your Startup"
                      name={'registerednameofstartup'}
                      fullWidth
                      value={formikStep2.values.registerednameofstartup}
                      onChange={formikStep2.handleChange}
                      error={formikStep2.touched.registerednameofstartup && Boolean(formikStep2.errors.registerednameofstartup)}
                      helperText={formikStep2.touched.registerednameofstartup && formikStep2.errors.registerednameofstartup}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Website URL*
                    </Typography>
                    <TextField
                      label="Text Website URL"
                      name={'websiteurl'}
                      fullWidth
                      value={formikStep2.values.websiteurl}
                      onChange={formikStep2.handleChange}
                      error={formikStep2.touched.websiteurl && Boolean(formikStep2.errors.websiteurl)}
                      helperText={formikStep2.touched.websiteurl && formikStep2.errors.websiteurl}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Sector of Startup*
                    </Typography>
                    <TextField
                      select
                      label="Select Sectors"
                      name={'sectorofstartup'}
                      fullWidth
                      value={formikStep2.values.sectorofstartup}
                      onChange={formikStep2.handleChange}
                      error={formikStep2.touched.sectorofstartup && Boolean(formikStep2.errors.sectorofstartup)}
                      helperText={formikStep2.touched.sectorofstartup && formikStep2.errors.sectorofstartup}
                    >
                      <MenuItem value="Technology">Technology</MenuItem>
                      <MenuItem value="Healthcare">Healthcare</MenuItem>
                      {/* Add more sectors as needed */}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Stage of Startup*
                    </Typography>
                    <TextField
                      select
                      label="Select Stage"
                      name={'stageofstartup'}
                      fullWidth
                      value={formikStep2.values.stageofstartup}
                      onChange={formikStep2.handleChange}
                      error={formikStep2.touched.stageofstartup && Boolean(formikStep2.errors.stageofstartup)}
                      helperText={formikStep2.touched.stageofstartup && formikStep2.errors.stageofstartup}
                    >
                      <MenuItem value="Early">Early Stage</MenuItem>
                      <MenuItem value="Growth">Growth Stage</MenuItem>
                      {/* Add more stages as needed */}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Month & year of incorporation*
                    </Typography>
                    <TextField
                      label="MM/YYYY"
                      name={'monthandyearofincorporation'}
                      fullWidth
                      value={formikStep2.values.monthandyearofincorporation}
                      onChange={formikStep2.handleChange}
                      error={formikStep2.touched.monthandyearofincorporation && Boolean(formikStep2.errors.monthandyearofincorporation)}
                      helperText={formikStep2.touched.monthandyearofincorporation && formikStep2.errors.monthandyearofincorporation}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Company Type*
                    </Typography>
                    <TextField
                      select
                      label="Select Company Type"
                      name={'companytype'}
                      fullWidth
                      value={formikStep2.values.companytype}
                      onChange={formikStep2.handleChange}
                      error={formikStep2.touched.companytype && Boolean(formikStep2.errors.companytype)}
                      helperText={formikStep2.touched.companytype && formikStep2.errors.companytype}
                    >
                      <MenuItem value="Type1">Type 1</MenuItem>
                      <MenuItem value="Type2">Type 2</MenuItem>
                      {/* Add more company types as needed */}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                    City of operation*
                  </Typography>
                  <TextField
                    label="Select City"
                    name={'cityofoperation'}
                    fullWidth
                    value={formikStep2.values.cityofoperation}
                    onChange={formikStep2.handleChange}
                    error={formikStep2.touched.cityofoperation && Boolean(formikStep2.errors.cityofoperation)}
                    helperText={formikStep2.touched.cityofoperation && formikStep2.errors.cityofoperation}
                    select  // <-- Add this line to make it a dropdown
                  >
                    <MenuItem value="City1">City 1</MenuItem>
                    <MenuItem value="City2">City 2</MenuItem>
                    {/* Add more cities as needed */}
                  </TextField>
                </Grid>
                
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      Please share your pitch deck*
                    </Typography>
                    <label htmlFor="pleaseshareyourpitchdeck" style={{ display: 'flex' }}>
                      <input
                        accept=".pdf"
                        style={{ display: 'none' }}
                        id="pleaseshareyourpitchdeck"
                        name="pleaseshareyourpitchdeck"
                        type="file"
                        onChange={(event) =>
                          formikStep2.setFieldValue('pleaseshareyourpitchdeck', event.currentTarget.files[0])
                        }
                      />
                      <Button
                        variant="contained"
                        component="span"
                      >
                        Upload(PDF only)
                      </Button>
                      <Typography variant={'subtitle2'} sx={{ margin: 1 }}>
                        {formikStep2.values.pleaseshareyourpitchdeck ? formikStep2.values.pleaseshareyourpitchdeck.name : 'No file selected'}
                      </Typography>
                    </label>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      You can upload a pdf file only (max size 20 MB)
                    </Typography>


                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      100 characters to tell us what you are building*
                    </Typography>
                    <TextField
                      label="Text details here"
                      name={'characterstotell'}
                      fullWidth
                      value={formikStep2.values.characterstotell}
                      onChange={formikStep2.handleChange}
                      error={formikStep2.touched.characterstotell && Boolean(formikStep2.errors.characterstotell)}
                      helperText={formikStep2.touched.characterstotell && formikStep2.errors.characterstotell}
                    />
                    <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                      100 Characters
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={3} justifyContent="center" alignItems="center">
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
              </form>
            </TabPanel>
          )}
        </TabContext>
      </Box>
      <Footer2 />
    </>
  );
};

export default Form;







