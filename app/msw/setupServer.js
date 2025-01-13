// app/msw/setupServer.js

import { setupServer } from 'msw/node';
import { graphqlHandler } from './graphqlHandler'; // Import GraphQL handler

const server = setupServer(graphqlHandler); // Use GraphQL handler
server.listen(); // Start the mock server
