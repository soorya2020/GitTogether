//FOR PROD
// export const BASE_URL = "/api";

//FOR DEV
export const BASE_URL =
  location.hostname === "localhost" ? "http://localhost:3000" : "/api";
