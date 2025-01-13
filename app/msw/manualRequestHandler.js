// app/msw/manualRequestHandler.js

import { rest } from 'msw';

// Define a manual request handler
const customHandler = rest.get('/api/custom', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ data: 'custom data' }));
});

// You can manually register this handler with your worker or server
export { customHandler };
