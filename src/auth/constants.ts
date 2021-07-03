import fetch from 'node-fetch';

let cachedData: Buffer = null;

export const getPublicKey = async () => {
  if (cachedData !== null) {
    return cachedData;
  }

  if (!process.env.APP_PUBLIC_KEY) {
    console.error('APP_PRIVATE_KEY env is not defined');
    return null;
  }

  const response = await fetch(process.env.APP_PUBLIC_KEY);
  const pem = await response.buffer();
  cachedData = pem;
  return pem;
};

export const jwtSettings = {
  expirationTime: process.env.APP_TOKEN_EXPIRATION || '90d',
};

const directoryTenantID = process.env.APP_AZURE_DIRECTORY_TENANT;
export const oauthSettings = {
  audience: process.env.APP_AUDIENCE || 'http://localhost:3000',
  issuer: `https://sts.windows.net/${directoryTenantID}/`,
  jwksUri: `https://login.microsoftonline.com/${directoryTenantID}/discovery/v2.0/keys`,
  jwksRequestsPerMinute: process.env.APP_JWKS_PER_MINUTE || '10'
};