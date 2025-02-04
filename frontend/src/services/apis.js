const BASE_URL = "http://localhost:3000/api/v1"

// AUTH ENDPOINTS
export const endpoints = {
  SIGNUP_API: BASE_URL + "/users/register",
  LOGIN_API: BASE_URL + "/users/login",
  SENDOTP_API: BASE_URL + "/users/sendotp",
  // RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  // RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}