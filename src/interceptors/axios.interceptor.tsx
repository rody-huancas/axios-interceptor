import axios, { AxiosRequestConfig } from "axios";
import { getValidatorError } from "../utilities/get-validation-error";
import { SnackbarUtilities } from "../utilities/snackbar-manager";

export const AxiosInterceptor = () => {
  const updateHeader = (request: AxiosRequestConfig) => {
    const token = "12212121212";
    const newHeaders = {
      Authorization: token,
      "Content-Type": "application/json",
    };
    request.headers = newHeaders;
    return request;
  };

  axios.interceptors.request.use((request) => {
    if (request.url?.includes("assets")) return request;
    return updateHeader(request);
  });

  axios.interceptors.response.use(
    (response) => {
      console.log("response", response);
      return response;
    },
    (error) => {
      SnackbarUtilities.error(getValidatorError(error.code));
      return Promise.reject(error);
    }
  );
};
