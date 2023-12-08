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
      .url('Please enter a valid URL for your LinkedIn profile')
      .required('LinkedIn profile URL is required.'),
    kindofreferrer: yup
      .string('Select kind of Referrer')
      .required('Please choose kind of Referrer'),
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
      .matches(/^(0[1-9]|1[0-2])\/(19|20)\d{2}$/, 'Please enter a valid MM/YYYY format')
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

  const onSubmit = (values) => {
    console.log(values); // Handle form submission logic here
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <>
      <Navbar />
      <Box sx={{ marginX: { xs: '20px', md: '200px' }, marginBottom: '50px' }}>
        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange}>
              <Tab label="Step 1. Personal details" value="1" />
              <Tab label="Step 2. Startup details" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                    Your Name *
                  </Typography>
                  <TextField
                    label="Text Your Name"
                    name={'name'}
                    fullWidth
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
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
                    select
                    label="Choose kind of Referrer"
                    name={'kindofreferrer'}
                    fullWidth
                    value={formik.values.kindofreferrer}
                    onChange={formik.handleChange}
                    error={formik.touched.kindofreferrer && Boolean(formik.errors.kindofreferrer)}
                    helperText={formik.touched.kindofreferrer && formik.errors.kindofreferrer}
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
              </Grid>

              <Grid container spacing={3} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6}>
                  <a size={'large'} href='/'>
                    Go to back
                  </a>
                </Grid>
                <Grid item xs={12} sm={6} textAlign="center">
                  <Button size={'large'} variant={'contained'} type={'submit'}>
                    Next <ArrowRightAltIcon />
                  </Button>
                </Grid>
              </Grid>
            </form>
          </TabPanel>

          <TabPanel value="2">
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                    Name of Startup*
                  </Typography>
                  <TextField
                    label="Text the name of yout Startup"
                    name={'nameofstartup'}
                    fullWidth
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.nameofstartup && Boolean(formik.errors.nameofstartup)
                    }
                    helperText={formik.touched.nameofstartup && formik.errors.nameofstartup}
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
                    value={formik.values.registerednameofstartup}
                    onChange={formik.handleChange}
                    error={formik.touched.registerednameofstartup && Boolean(formik.errors.registerednameofstartup)}
                    helperText={formik.touched.registerednameofstartup && formik.errors.registerednameofstartup}
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
                    value={formik.values.websiteurl}
                    onChange={formik.handleChange}
                    error={formik.touched.websiteurl && Boolean(formik.errors.websiteurl)}
                    helperText={formik.touched.websiteurl && formik.errors.websiteurl}
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
                    value={formik.values.sectorofstartup}
                    onChange={formik.handleChange}
                    error={formik.touched.sectorofstartup && Boolean(formik.errors.sectorofstartup)}
                    helperText={formik.touched.sectorofstartup && formik.errors.sectorofstartup}
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
                    value={formik.values.stageofstartup}
                    onChange={formik.handleChange}
                    error={formik.touched.stageofstartup && Boolean(formik.errors.stageofstartup)}
                    helperText={formik.touched.stageofstartup && formik.errors.stageofstartup}
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
                    value={formik.values.monthandyearofincorporation}
                    onChange={formik.handleChange}
                    error={formik.touched.monthandyearofincorporation && Boolean(formik.errors.monthandyearofincorporation)}
                    helperText={formik.touched.monthandyearofincorporation && formik.errors.monthandyearofincorporation}
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
                    value={formik.values.companytype}
                    onChange={formik.handleChange}
                    error={formik.touched.companytype && Boolean(formik.errors.companytype)}
                    helperText={formik.touched.companytype && formik.errors.companytype}
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
                    value={formik.values.cityofoperation}
                    onChange={formik.handleChange}
                    error={formik.touched.cityofoperation && Boolean(formik.errors.cityofoperation)}
                    helperText={formik.touched.cityofoperation && formik.errors.cityofoperation}
                  />
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
                        formik.setFieldValue('pleaseshareyourpitchdeck', event.currentTarget.files[0])
                      }
                    />
                    <Button
                      variant="contained"
                      component="span"
                    >
                      Upload(PDF only)
                    </Button>
                    <Typography variant={'subtitle2'} sx={{ margin: 1 }}>
                    {formik.values.pleaseshareyourpitchdeck ? formik.values.pleaseshareyourpitchdeck.name : 'No file selected'}
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
                    value={formik.values.characterstotell}
                    onChange={formik.handleChange}
                    error={formik.touched.characterstotell && Boolean(formik.errors.characterstotell)}
                    helperText={formik.touched.characterstotell && formik.errors.characterstotell}
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
                <Grid item xs={12} sm={6} textAlign="center">
                  <Button size={'large'} variant={'contained'} type={'submit'}>
                    Next <ArrowRightAltIcon />
                  </Button>
                </Grid>
              </Grid>
            </form>
          </TabPanel>
        </TabContext>
      </Box>
      <Footer2 />
    </>
  );
};

export default Form;


