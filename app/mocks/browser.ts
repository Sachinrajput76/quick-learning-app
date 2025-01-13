import { setupServer } from 'msw/node';
import { handlers } from './handlers';

const server = setupServer(...handlers); // Provide handlers for HTTP, GraphQL, WebSocket
server.listen(); // Start the mock server
