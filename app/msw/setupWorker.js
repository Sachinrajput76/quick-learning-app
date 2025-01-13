// app/msw/setupWorker.js

import { setupWorker } from 'msw';
import { graphqlHandler } from './graphqlHandler'; // Import GraphQL handler

const worker = setupWorker(graphqlHandler); // Use GraphQL handler
worker.start();
