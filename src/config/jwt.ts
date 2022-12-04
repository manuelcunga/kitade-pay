import base64Url from 'base64url';
import crypto from 'crypto';

const header = {
  alg: 'HS256',
  typ: 'JWT',
};

const payload = {
  username: process.env.PAYLOAD_USER,
  name: process.env.PAYLOAD_NAME,
  exp: new Date().getTime(), //timestamp
};

const key = process.env.JWT_KEY;

const headerEncoded = base64Url.encode(JSON.stringify(header));
const payloadEncoded = base64Url.encode(JSON.stringify(payload));

const signature = crypto
  .createHmac('sha256', key)
  .update(`${headerEncoded}.${payloadEncoded}`)
  .digest('hex');

console.log(
  `${headerEncoded}.${payloadEncoded}.${base64Url.encode(signature)}`,
);
