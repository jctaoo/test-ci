import { VercelRequest, VercelResponse } from '@vercel/node';

export default (request: VercelRequest, response: VercelResponse) => {
  const { name = "anonymous" } = request.query;
  response.status(200).send(`Hello ${name}`);
}