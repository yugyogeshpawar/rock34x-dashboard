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

import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Form = () => {
  const [value, setValue] = React.useState('1');
  const [value2, setValue2] = React.useState('male');
  const [value3, setValue3] = React.useState('Yes');

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
      .url('Please enter a valid URL for your LinkedIn profile')
      .required('LinkedIn profile URL is required.'),
    kindofreferrer: yup
      .string('Select kind of Referrer')
      .required('Please choose kind of Referrer'),
  });


  const initialValues = {
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    kindofreferrer: '',
    referrer: '',
  };

  const onSubmitStep1 = (values) => {
    console.log(values); // Handle form submission logic for Step 1 here
    // Move to Step 2
    setValue('2');
  };


  const formikStep1 = useFormik({
    initialValues,
    validationSchema: validationSchemaStep1,
    onSubmit: onSubmitStep1,
  });


  const defaultTheme = createTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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



          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ marginY: {xs:0,md:2} , marginX: {xs:'20px',md:50}}}>
          <Grid item xs={12} sm={4} sx={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Avatar sx={{ m: 1, bgcolor: '#16B364' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Your Name *
            </Typography>
            <TextField
              label="Text Your Name"
              name={'name'}
              fullWidth
              value={formikStep1.values.name}
              onChange={formikStep1.handleChange}
              error={formikStep1.touched.name && Boolean(formikStep1.errors.name)}
              helperText={formikStep1.touched.name && formikStep1.errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2,marginTop: 2 }}>
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container sx={{ marginY:2}}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot email?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>

      <Footer2 />
    </>
  );
};

export default Form;



// <TabPanel value="1" >
// <form onSubmit={formikStep1.handleSubmit}>
//   <Grid container spacing={3}>
//     <Grid item xs={12} sm={6}>
//       <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
//         Your Name *
//       </Typography>
//       <TextField
//         label="Text Your Name"
//         name={'name'}
//         fullWidth
//         value={formikStep1.values.name}
//         onChange={formikStep1.handleChange}
//         error={formikStep1.touched.name && Boolean(formikStep1.errors.name)}
//         helperText={formikStep1.touched.name && formikStep1.errors.name}
//       />
//     </Grid>
//     <Grid item xs={12} sm={6}>
//       <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
//         Email ID*
//       </Typography>
//       <TextField
//         label="Email ID"
//         name={'email'}
//         fullWidth
//         value={formikStep1.values.email}
//         onChange={formikStep1.handleChange}
//         error={formikStep1.touched.email && Boolean(formikStep1.errors.email)}
//         helperText={formikStep1.touched.email && formikStep1.errors.email}
//       />
//     </Grid>
//     <Grid item xs={12} sm={6}>
//       <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
//         Gender*
//       </Typography>
//       <FormControl>
//         <RadioGroup
//           aria-labelledby="demo-controlled-radio-buttons-group"
//           name="controlled-radio-buttons-group"
//           value={value2}
//           onChange={handleChange2}
//         >
//           <div className='flex'>
//             <FormControlLabel value="male"
//               control={<Radio />} label="Male" />
//             <FormControlLabel value="female" control={<Radio />} label="Female" />
//           </div>
//         </RadioGroup>
//       </FormControl>
//     </Grid>
//     <Grid item xs={12} sm={6}>
//       <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
//         Phone number *
//       </Typography>
//       <PhoneInput
//         international
//         defaultCountry="US"
//         value={formikStep1.values.phone}
//         onChange={(value) => formikStep1.setFieldValue('phone', value)}
//         error={formikStep1.touched.phone && Boolean(formikStep1.errors.phone)}
//       />
//       {formikStep1.touched.phone && formikStep1.errors.phone && (
//         <Typography variant="caption" color="error">
//           {formikStep1.errors.phone}
//         </Typography>
//       )}
//     </Grid>
//     <Grid item xs={12} sm={6}>
//       <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
//         Linkedin Profile URL*
//       </Typography>
//       <TextField
//         label="Text Linkedin URL"
//         name={'linkedin'}
//         fullWidth
//         value={formikStep1.values.linkedin}
//         onChange={formikStep1.handleChange}
//         error={formikStep1.touched.linkedin && Boolean(formikStep1.errors.linkedin)}
//         helperText={formikStep1.touched.linkedin && formikStep1.errors.linkedin}
//       />
//     </Grid>
//     <Grid item xs={12} sm={6}>
//       <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
//         Choose kind of Referrer*
//       </Typography>
//       <TextField
//         select
//         label="Choose kind of Referrer"
//         name={'kindofreferrer'}
//         fullWidth
//         value={formikStep1.values.kindofreferrer}
//         onChange={formikStep1.handleChange}
//         error={formikStep1.touched.kindofreferrer && Boolean(formikStep1.errors.kindofreferrer)}
//         helperText={formikStep1.touched.kindofreferrer && formikStep1.errors.kindofreferrer}
//       >
//         <MenuItem value="investors">Investors</MenuItem>
//         <MenuItem value="startups">Startups</MenuItem>
//       </TextField>
//     </Grid>
//     <Grid item xs={12} sm={6}>
//       <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
//         Referrer Name*
//       </Typography>
//       <TextField
//         label="Text Referrer Name"
//         name={'referrer'}
//         fullWidth
//         value={formikStep1.values.referrer}
//         onChange={formikStep1.handleChange}
//         error={formikStep1.touched.referrer && Boolean(formikStep1.errors.referrer)}
//         helperText={formikStep1.touched.referrer && formikStep1.errors.referrer}
//       />
//     </Grid>
//     <Grid item xs={12} sm={6}>
//       <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
//         Are you a single Founder?*
//       </Typography>
//       <FormControl>
//         <RadioGroup
//           aria-labelledby="demo-controlled-radio-buttons-group"
//           name="controlled-radio-buttons-group"
//           value={value3}
//           onChange={handleChange3}
//         >
//           <div className='flex'>
//             <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
//             <FormControlLabel value="No" control={<Radio />} label="No" />
//           </div>
//         </RadioGroup>
//       </FormControl>
//     </Grid>
//   </Grid>

//   <Grid container spacing={3} justifyContent="center" alignItems="center">
//     <Grid item xs={12} sm={6}>
//       <a size={'large'} href='/'>
//         Go to back
//       </a>
//     </Grid>
//     <Grid item xs={12} sm={6} textAlign="start">
//       <Button size={'large'} variant={'contained'} type={'submit'}>
//         Next <ArrowRightAltIcon />
//       </Button>
//     </Grid>
//   </Grid>
// </form>
// </TabPanel>







