// // dealsUpdate.js

import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { useRouter } from "next/router";
import { useDeals } from "../../../api/deals";
import { paths } from "../../../paths";
import { dealsApi } from "../../../api/deals";
import { Layout as DashboardLayout } from "../../../layouts/dashboard";

const DealsUpdatePage = () => {
  const router = useRouter();
  const { dealId } = router.query;
  const { getDealById } = useDeals();
  const [updatedDeal, setUpdatedDeal] = useState({});

  // Fetch the existing deal details when the component mounts
  useEffect(() => {
    const fetchDealDetails = async () => {
      try {
        const dealDetails = await getDealById(dealId);
        console.log(dealId);
        setUpdatedDeal(dealDetails);
      } catch (error) {
        console.error("Error fetching deal details:", error);
      }
    };

    fetchDealDetails();
  }, [dealId, getDealById]);

  const handleUpdate = async () => {
    try {
      await dealsApi.updateDeal({ dealId, update: updatedDeal });
      // Redirect to the deals details page after updating
      router.push(`${paths.dashboard.deals.dealsDetails}/${dealId}`);
    } catch (error) {
      console.error("Error updating deal:", error);
    }
  };

  return (
    <DashboardLayout>
    <Container maxWidth="lg">
      <Typography variant="h5" 
      sx={{ marginBottom: 3 }}>
        Update Deal
      </Typography>
      <Box>
        <TextField
          label="Title"
          value={updatedDeal.title}
          onChange={(e) => setUpdatedDeal({ ...updatedDeal, title: e.target.value })}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Description"
          value={updatedDeal.desc}
          onChange={(e) => setUpdatedDeal({ ...updatedDeal, desc: e.target.value })}
          fullWidth
          multiline
          rows={4}
          sx={{ marginBottom: 2 }}
        />
        {/* Add more text fields for other deal properties as needed */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdate}
        >
          Update Deal
        </Button>
      </Box>
    </Container>
    </DashboardLayout>
  );
};

export default DealsUpdatePage;




// dealsUpdate.js

// import { useEffect, useState } from "react";
// import {
//   Button,
//   TextField,
//   Container,
//   Typography,
//   Box,
//   Stack,
//   IconButton,
//   SvgIcon,
//   Breadcrumbs,
// } from "@mui/material";
// import { useRouter } from "next/router";
// import { useDeals } from "../../../api/deals";
// import { paths } from "../../../paths";
// import { dealsApi } from "../../../api/deals";
// import { Layout as DashboardLayout } from "../../../layouts/dashboard";
// import { BreadcrumbsSeparator } from "../../../components/breadcrumbs-separator";
// import { usePageView } from "../../../hooks/use-page-view";
// import { createResourceId } from '../../../utils/create-resource-id';

// const DealsUpdatePage = () => {
//   const router = useRouter();
//   const { dealId } = router.query;
//   const { getDealById } = useDeals();
//   const [members, setMembers] = useState([{ avatar: "", name: "" }]);
//   const [title, setTitle] = useState('');
//   const [desc, setDesc] = useState('');
//   const [button, setButton] = useState('');

//   usePageView();

//   // Fetch the existing deal details when the component mounts
//   useEffect(() => {
//     const fetchDealDetails = async () => {
//       try {
//         const dealDetails = await getDealById(dealId);
//         setTitle(dealDetails.title);
//         setDesc(dealDetails.desc);
//         setButton(dealDetails.button);
//         setMembers(dealDetails.members);
//       } catch (error) {
//         console.error("Error fetching deal details:", error);
//       }
//     };

//     fetchDealDetails();
//   }, [dealId, getDealById]);

//   const handleUpdateDeal = () => {
//     // Update the deal object with the entered data
//     const updatedDeal = {
//       id: dealId,
//       members,
//       title,
//       desc,
//       button,
//     };

//     // Call the updateDeal function to update the existing deal
//     dealsApi.updateDeal(updatedDeal)
//       .then(() => {
//         // Redirect to the deals page after successful deal update
//         router.push(`${paths.dashboard.deals.dealsDetails}/${dealId}`);
//       })
//       .catch((error) => {
//         console.error('Error updating deal:', error);
//         // Handle error appropriately
//       });
//   };



//   return (
//     <DashboardLayout>
//     <Container maxWidth="lg">
//     <Typography variant="h5" sx={{ marginBottom: 3 }}>
//       Update Deal
//     </Typography>
//     <Box>
//       <TextField
//         label="Title"
//         value={updatedDeal.title}
//         onChange={(e) => setUpdatedDeal({ ...updatedDeal, title: e.target.value })}
//         fullWidth
//         sx={{ marginBottom: 2 }}
//       />
//       <TextField
//         label="Description"
//         value={updatedDeal.desc}
//         onChange={(e) => setUpdatedDeal({ ...updatedDeal, desc: e.target.value })}
//         fullWidth
//         multiline
//         rows={4}
//         sx={{ marginBottom: 2 }}
//       />
//       {/* Add more text fields for other deal properties as needed */}
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleUpdate}
//       >
//         Update Deal
//       </Button>
//     </Box>
//   </Container>

//     </DashboardLayout>
//   );
// };

// export default DealsUpdatePage;

