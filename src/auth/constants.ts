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

  console.log('gigio teste');

  const response = await fetch(process.env.APP_PUBLIC_KEY);
  const pem = await response.buffer();
  cachedData = pem;
  return pem;
};

export const jwtSettings = {
  expirationTime: process.env.APP_TOKEN_EXPIRATION || '90d',
};