import { deepCopy } from '../../utils/deep-copy';
import { activeDeals , pastDeals } from './data';
import { useState, useEffect } from 'react';


class DealsApi {
  getActiveDeals(request) {
    return Promise.resolve(deepCopy(activeDeals));
  }
  getPastDeals(request){
    return Promise.resolve(deepCopy(pastDeals));
  }

  createDeal(request) {
    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        const clonedDeals = deepCopy(activeDeals);

        // Create the new task
        const activeDeal = {
          id: createResourceId(),
          members: request.members,
          title: request.title,
          desc: request.desc,
          button: request.button
        };

        // Add the new task to tasks
        clonedDeals.push(activeDeal);

        resolve(deepCopy(activeDeal));
      } catch (err) {
        console.error('[Deals Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  updateTask(request) {
    const { taskId, update } = request;

    return new Promise((resolve, reject) => {
      try {
        // Make a deep copy
        const clonedTasks = deepCopy(tasks);

        // Find the task that will be updated
        const task = clonedTasks.find((task) => task.id === taskId);

        if (!task) {
          reject(new Error('Task not found'));
          return;
        }

        // Update the task
        Object.assign(task, update);

        resolve(deepCopy(task));
      } catch (err) {
        console.error('[Deals Api]: ', err);
        reject(new Error('Internal server error'));
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
          reject(new Error('Task not found'));
          return;
        }

        clonedTasks = clonedTasks.filter((task) => task.id !== taskId);

        resolve(true);
      } catch (err) {
        console.error('[Deals Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }
}

export const dealsApi = new DealsApi();


export const useDeals = () => {
  const [activeDeals, setActiveDeals] = useState([]);
  const [pastDeals, setPastDeals] = useState([]);

  useEffect(() => {
    dealsApi.getActiveDeals().then((response) =>  setActiveDeals(response));
    dealsApi.getPastDeals().then((response) =>  setPastDeals(response));
  }, []);

  return {activeDeals,pastDeals};
};