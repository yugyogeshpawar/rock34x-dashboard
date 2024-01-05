import { deepCopy } from "../../utils/deep-copy";
import { activeDeals, pastDeals, addActiveDeal, updateActiveDeal } from "./data";
import { useState, useEffect, useCallback } from "react";
import { createResourceId } from "../../utils/create-resource-id";

class DealsApi {
  getActiveDeals(request) {
    const activeDeals2 = deepCopy(activeDeals);
    console.log(activeDeals2);
    return Promise.resolve(activeDeals2);
  }
  getPastDeals(request) {
    return Promise.resolve(deepCopy(pastDeals));
  }

  // createDeal(request) {
  //   return new Promise((resolve, reject) => {
  //     try {
  //       // Make a deep copy
  //       const clonedDeals = deepCopy(activeDeals);

  //       // Create the new task
  //       const activeDeal = {
  //         id: createResourceId(),
  //         members: request.members,
  //         title: request.title,
  //         desc: request.desc,
  //         button: request.button,
  //       };

  //       console.log("[Deals Api]: Deal successfully created:", activeDeal);
  //       // Add the new task to tasks
  //       clonedDeals.push(activeDeal);
  //       // activeDeals2.push(activeDeal);

  //       // Log statement to indicate successful creation and method call

  //       resolve(deepCopy(activeDeal));
  //     } catch (err) {
  //       console.error("[Deals Api]: ", err);
  //       reject(new Error("Internal server error"));
  //     }
  //   });
  // }

  createDeal(request) {
    const { members, title, desc, button } = request;
  
    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        const clonedDeals = deepCopy(activeDeals);
  
        // Create the new deal
        const activeDeal = {
          id: createResourceId(),
          members,
          title,
          desc,
          button,
        };
  
             // Add the new deal using the exported function
             addActiveDeal(activeDeal);
  
        console.log("[Deals Api]: Deal successfully created:", activeDeal);
  
        resolve(deepCopy(activeDeal));
      } catch (err) {
        console.error("[Deals Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }
  

  updateDeal(request) {
    const { dealId, update } = request;

    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        const clonedTasks = deepCopy(activeDeals);

        // Find the task that will be updated
        const deal = clonedTasks.find((deal) => deal.id === dealId);

        if (!deal) {
          reject(new Error("deal not found"));
          return;
        }

        // Update the task
        Object.assign(deal, update);

         // Update the deal in data.js
      updateActiveDeal(deal);

        resolve(deepCopy(deal));
      } catch (err) {
        console.error("[Deals Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }

  deleteTask(request) {
    const { taskId } = request;

    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        let clonedTasks = deepCopy(tasks);

        // Find the task that will be removed
        const task = clonedTasks.find((task) => task.id === taskId);

        if (!task) {
          reject(new Error("Task not found"));
          return;
        }

        clonedTasks = clonedTasks.filter((task) => task.id !== taskId);

        resolve(true);
      } catch (err) {
        console.error("[Deals Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }

  getDealById(dealId) {
    return new Promise((resolve, reject) => {
      try {
        const deal = [...activeDeals, ...pastDeals].find((deal) => deal.id === dealId);

        if (!deal) {
          reject(new Error("Deal not found"));
          return;
        }

        resolve(deepCopy(deal));
      } catch (err) {
        console.error("[Deals Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }
}

export const dealsApi = new DealsApi();

// export const useDeals = () => {
//   const [activeDeals, setActiveDeals] = useState([]);
//   const [pastDeals, setPastDeals] = useState([]);

//   useEffect(() => {
//     dealsApi.getActiveDeals().then((response) => setActiveDeals(response));
//     dealsApi.getPastDeals().then((response) => setPastDeals(response));
//   }, []);

//   return { activeDeals, pastDeals };
// };


export const useDeals = () => {
  const [activeDeals, setActiveDeals] = useState([]);
  const [pastDeals, setPastDeals] = useState([]);

  useEffect(() => {
    dealsApi.getActiveDeals().then((response) => setActiveDeals(response));
    dealsApi.getPastDeals().then((response) => setPastDeals(response));
  }, []);

  const getDealById = useCallback(async (dealId) => {
    try {
      const dealDetails = await dealsApi.getDealById(dealId);
      return dealDetails;
    } catch (error) {
      console.error("Error fetching deal details:", error);
      throw error; // rethrow the error to handle it elsewhere if needed
    }
  }, []);

  return { activeDeals, pastDeals, getDealById };
};

