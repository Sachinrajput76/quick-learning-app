// app/msw/graphqlHandler.js

import { graphql } from 'msw';

// Define a GraphQL request handler
const graphqlHandler = graphql.query('GetUser', (req, res, ctx) => {
  return res(ctx.data({ user: { name: 'John Doe' } }));
});

export { graphqlHandler };
