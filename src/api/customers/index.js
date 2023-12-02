import { applyPagination } from "../../utils/apply-pagination";
import { applySort } from "../../utils/apply-sort";
import { deepCopy } from "../../utils/deep-copy";
import { customer, emails, invoices, logs } from "./data";
import axios from "axios";

const STORAGE_KEY = "accessToken";

class CustomersApi {
  async getCustomers(request = {}) {
    const { filters, page, rowsPerPage, sortBy, sortDir } = request;

    try {
      const accessToken = globalThis.localStorage.getItem(STORAGE_KEY);
      if (!accessToken) {
        throw new Error("Access token not found");
      }
      const { data: startupData } = await axios.get("/api/admin/startups", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(startupData);

      let data = deepCopy(startupData);
      let count = data.length;

      if (typeof filters !== "undefined") {
        data = data.filter((customer) => {
          if (typeof filters.query !== "undefined" && filters.query !== "") {
            let queryMatched = false;
            const properties = ["email", "name"];

            properties.forEach((property) => {
              if (
                customer[property]
                  .toLowerCase()
                  .includes(filters.query.toLowerCase())
              ) {
                queryMatched = true;
              }
            });

            if (!queryMatched) {
              return false;
            }
          }

          if (typeof filters.hasAcceptedMarketing !== "undefined") {
            if (
              customer.hasAcceptedMarketing !== filters.hasAcceptedMarketing
            ) {
              return false;
            }
          }

          if (typeof filters.isProspect !== "undefined") {
            if (customer.isProspect !== filters.isProspect) {
              return false;
            }
          }

          if (typeof filters.isReturning !== "undefined") {
            if (customer.isReturning !== filters.isReturning) {
              return false;
            }
          }

          return true;
        });
        count = data.length;
      }

      if (typeof sortBy !== "undefined" && typeof sortDir !== "undefined") {
        data = applySort(data, sortBy, sortDir);
      }

      if (typeof page !== "undefined" && typeof rowsPerPage !== "undefined") {
        data = applyPagination(data, page, rowsPerPage);
      }

      return Promise.resolve({
        data,
        count,
      });
    } catch (error) {
      console.error("Error fetching startup data: ", error);
      return Promise.reject(error);
    }
  }

  getCustomer(request) {
    return Promise.resolve(deepCopy(customer));
  }

  getEmails(request) {
    return Promise.resolve(deepCopy(emails));
  }

  getInvoices(request) {
    return Promise.resolve(deepCopy(invoices));
  }

  getLogs(request) {
    return Promise.resolve(deepCopy(logs));
  }
}

export const customersApi = new CustomersApi();
