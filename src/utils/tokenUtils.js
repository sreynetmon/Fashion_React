import { AES, enc } from "crypto-js";
import secureLocalStorage from "react-secure-storage";


// Encryption key - in production, this should be in environment variables
const ENCRYPTION_KEY = import.meta.env.VITE_ENCRYPTION_KEY;

/**
 * Encrypts a token using AES encryption
 * @param {string} token - The token to encrypt
 * @returns {string} - The encrypted token
 */
export const encryptToken = (token) => {
  try {
    return AES.encrypt(token, ENCRYPTION_KEY).toString();
  } catch (error) {
    console.error("Error encrypting token:", error);
    return null;
  }
};

/**
 * Decrypts a token using AES decryption
 * @param {string} encryptedToken - The encrypted token to decrypt
 * @returns {string|null} - The decrypted token or null if failed
 */
export const decryptToken = (encryptedToken) => {
  try {
    const bytes = AES.decrypt(encryptedToken, ENCRYPTION_KEY);
    return bytes.toString(enc.Utf8);
  } catch (error) {
    console.error("Error decrypting token:", error);
    return null;
  }
};

/**
 * Stores an encrypted access token
 * @param {string} token - The access token to store
 */
export const storeAccessToken = (token) => {
  if (token) {
    const encryptedToken = encryptToken(token);
    secureLocalStorage.setItem("car_access_token", encryptedToken);
  }
};

/**
 * Stores an encrypted refresh token
 * @param {string} token - The refresh token to store
 */
export const storeRefreshToken = (token) => {
  if (token) {
    const encryptedToken = encryptToken(token);
    sessionStorage.setItem("car_refresh_token", encryptedToken);
  }
};

/**
 * Gets and decrypts the access token
 * @returns {string|null} - The decrypted access token or null
 */
export const getDecryptedAccessToken = () => {
  const encryptedToken = secureLocalStorage.getItem("car_access_token");
  console.log("The encryptedToken: ", encryptedToken)
  if (encryptedToken) {
    return decryptToken(encryptedToken);
  }
  return null;
};

/**
 * Gets and decrypts the refresh token
 * @returns {string|null} - The decrypted refresh token or null
 */
export const getDecryptedRefreshToken = () => {
  const encryptedToken = sessionStorage.getItem("car_refresh_token");
  if (encryptedToken) {
    return decryptToken(encryptedToken);
  }
  return null;
};

/**
 * Removes all stored tokens
 */
export const clearTokens = () => {
  secureLocalStorage.removeItem("car_access_token");
  sessionStorage.removeItem("car_refresh_token");
};

/**
 * Checks if user is authenticated by verifying access token exists
 * @returns {boolean} - True if authenticated, false otherwise
 */
export const isAuthenticated = () => {
  const token = getDecryptedAccessToken();
  return token !== null && token !== "";
};

/**
 * Creates Authorization header for API requests
 * @returns {object|null} - Authorization header object or null
 */
export const getAuthHeader = () => {
  const token = getDecryptedAccessToken();
  if (token) {
    return {
      Authorization: `Bearer ${token}`
    };
  }
  return null;
};
