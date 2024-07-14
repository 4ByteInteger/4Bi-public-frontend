import { ApiStatus } from "./network.types";
import axios from "axios";

export interface IApiStatusViews {
  isLoading: boolean;
  isError: boolean;
  isInit: boolean;
  isSuccess: boolean;
  isPending: boolean;
}

export const getApiStatus = (apiStatus: ApiStatus): IApiStatusViews => {
  return {
    isSuccess: apiStatus === "success",
    isError: apiStatus === "error",
    isLoading: apiStatus === "pending" || apiStatus === "init",
    isPending: apiStatus === "pending",
    isInit: apiStatus === "init",
  };
};

export type RequestMethod = "POST" | "GET" | "PUT" | "DELETE";

export const RequestMethods: Record<string, RequestMethod> = {
  POST: "POST",
  GET: "GET",
  DELETE: "DELETE",
  PUT: "PUT",
};

export interface IHttpConfig {
  url: string;
  data?: any;
  method: RequestMethod;
}

interface IRequestResponse {
  data?: any;
  message?: string;
  statusCode?: number;
  success: boolean;
}

export async function request(httpConfig: IHttpConfig): IRequestResponse {
  return new Promise((resolve) => {
    try {
      axios(httpConfig)
        .then((response) => {
          resolve({
            data: response.data,
            success: true,
            statusCode: response.status,
          });
        })
        .catch((axiosError) => {
          const serverResponse = axiosError.response?.data;

          resolve({
            data: serverResponse?.errorMessage ?? "Something went wrong",
            success: false,
            statusCode:
              serverResponse?.statusCode ?? axiosError?.response?.status,
            // If Custom Status code is not available from BE then need to use the status code from the axiosError object.
          });
        });
    } catch (error) {
      resolve({
        data: error.message ?? "Something went wrong",
        success: false,
      });
    }
  });
}
