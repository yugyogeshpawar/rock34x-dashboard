// // // dealsUpdate.js

// import { useEffect, useState } from "react";
// import {
//   Button,
//   TextField,
//   Container,
//   Typography,
//   Box,
// } from "@mui/material";
// import { useRouter } from "next/router";
// import { useDeals } from "../../../../api/deals";
// import { paths } from "../../../../paths";
// import { dealsApi } from "../../../../api/deals";
// import { Layout as DashboardLayout } from "../../../../layouts/dashboard";

// const DealsUpdatePage = () => {
//   const router = useRouter();
//   const { dealId } = router.query;
//   console.log(dealId);
//   const { getDealById } = useDeals();
//   const [updatedDeal, setUpdatedDeal] = useState({});

//   // Fetch the existing deal details when the component mounts
//   useEffect(() => {
//     const fetchDealDetails = async () => {
//       try {
//         const dealDetails = await getDealById(dealId);
//         console.log(dealId);
//         setUpdatedDeal(dealDetails);
//       } catch (error) {
//         console.error("Error fetching deal details:", error);
//       }
//     };

//     fetchDealDetails();
//   }, [dealId, getDealById]);

//   const handleUpdate = async () => {
//     try {
//       await dealsApi.updateDeal({ dealId, update: updatedDeal });
//       // Redirect to the deals details page after updating
//       router.push(paths.dashboard.deals.index);
//     } catch (error) {
//       console.error("Error updating deal:", error);
//     }
//   };

//   return (
//     <DashboardLayout>
//     <Container maxWidth="lg">
//       <Typography variant="h5" 
//       sx={{ marginBottom: 3 }}>
//         Update Deal
//       </Typography>
//       <Box>
//         <TextField
//           label="Title"
//           value={updatedDeal.title}
//           onChange={(e) => setUpdatedDeal({ ...updatedDeal, title: e.target.value })}
//           fullWidth
//           sx={{ marginBottom: 2 }}
//         />
//         <TextField
//           label="Description"
//           value={updatedDeal.desc}
//           onChange={(e) => setUpdatedDeal({ ...updatedDeal, desc: e.target.value })}
//           fullWidth
//           multiline
//           rows={4}
//           sx={{ marginBottom: 2 }}
//         />
//         {/* Add more text fields for other deal properties as needed */}
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleUpdate}
//         >
//           Update Deal
//         </Button>
//       </Box>
//     </Container>
//     </DashboardLayout>
//   );
// };

// export default DealsUpdatePage;



import React, { useEffect, useState } from "react";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import { useRouter } from "next/router";
import { useDeals } from "../../../../api/deals";
import { paths } from "../../../../paths";
import { dealsApi } from "../../../../api/deals";
import { Layout as DashboardLayout } from "../../../../layouts/dashboard";

const DealsUpdatePage = () => {
  const router = useRouter();
  const { dealId } = router.query;
  const { getDealById } = useDeals();
  const [updatedDeal, setUpdatedDeal] = useState({});

  useEffect(() => {
    const fetchDealDetails = async () => {
      try {
        const dealDetails = await getDealById(dealId);
        setUpdatedDeal(dealDetails);
      } catch (error) {
        console.error("Error fetching deal details:", error);
      }
    };

    if (dealId) {
      fetchDealDetails();
    }
  }, [dealId, getDealById]);

  const handleUpdate = async () => {
    try {
      await dealsApi.updateDeal({ dealId, update: updatedDeal });
      // Redirect to the deals details page after updating
      router.push(paths.dashboard.deals.index);
    } catch (error) {
      console.error("Error updating deal:", error);
    }
  };

  const handleCancel = () => {
    // Redirect to the deals index page
    router.push(paths.dashboard.deals.index);
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
            value={updatedDeal.title || ""}
            onChange={(e) =>
              setUpdatedDeal((prev) => ({ ...prev, title: e.target.value }))
            }
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Description"
            value={updatedDeal.desc || ""}
            onChange={(e) =>
              setUpdatedDeal((prev) => ({ ...prev, desc: e.target.value }))
            }
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
            sx={{ marginRight: 2 }}
          >
            Update Deal
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Box>
      </Container>
    </DashboardLayout>
  );
};

export default DealsUpdatePage;
