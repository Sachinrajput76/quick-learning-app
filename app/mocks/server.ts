// mocks/server.ts
import { setupServer } from 'msw/node'; // Use setupServer for Node.js server-side
import { handlers } from './handlers'; // Import the request handlers

// Set up the mock server with the handlers
export const server = setupServer(...handlers);
