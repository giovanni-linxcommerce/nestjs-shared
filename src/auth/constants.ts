import fetch from 'node-fetch';

/*
  openssl genrsa -out private.pem 2048
  openssl rsa -in private.pem -pubout -out public.pem
*/

let cachedData: Buffer = null;

export const getPublicKey = async () => {
  if (cachedData !== null) {
    console.log('get from cache----');
    return cachedData;
  }

  if (!process.env.APP_PUBLIC_KEY) {
    console.error('APP_PRIVATE_KEY not defined');
    return null;
  }

  console.log('get from src----');
  const response = await fetch(process.env.APP_PUBLIC_KEY);
  const pem = await response.buffer();
  // const pem = readFileSync('./jwtRS256.key.pub');
  cachedData = pem;
  // const iseq = bufferEq(pem, pemE);

  // console.log('iseq====', iseq, pem, pemE);

  return pem;
};

export const jwtSettings = {
  expirationTime: process.env.APP_TOKEN_EXPIRATION || '90d',
};