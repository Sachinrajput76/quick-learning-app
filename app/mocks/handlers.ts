// mocks/handlers.ts
import { graphql } from 'msw';
import { HttpResponse } from './http'; // Example: using HttpResponse for HTTP requests
import { ws } from 'msw'; // WebSocket example

// Define request handlers
export const handlers = [
  // Example GraphQL handler
  graphql.query('GetUsers', (req, res, ctx) => {
    return res(
      ctx.data({
        users: [
          { id: '1', name: 'John Doe', email: 'john@example.com' },
          { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
        ],
      })
    );
  }),

  // Example HTTP handler
  HttpResponse.get('/api/user', (req, res, ctx) => {
    return res(
      ctx.json({ message: 'This is a mock GET response!' })
    );
  }),

  // Example WebSocket handler
  ws.on('message', (req, res, ctx) => {
    return res(
      ctx.json({ message: 'WebSocket message received!' })
    );
  }),
];
