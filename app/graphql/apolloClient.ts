// app/graphql/apolloClient.ts
import { ApolloClient, InMemoryCache, ApolloLink, Observable } from '@apollo/client';
import { teachersData } from '@/mocks/teachersMock';

// Interface for Country and Teacher types
interface Country {
  code: string;
  name: string;
  capital: string;
}

// Toggle between mock data and actual API data
const useMockData = true; // Set this to true for mock data and false for actual API data

// Create a mock link for the Apollo Client
const mockLink = new ApolloLink((operation, forward) => {
  if (useMockData) {
    // Mocked response for countries
    if (operation.operationName === 'GetCountries') {
      return new Observable((observer) => {
        observer.next({
          data: {
            countries: [
              { code: 'US', name: 'United States', capital: 'Washington D.C.' },
              { code: 'CA', name: 'Canada', capital: 'Ottawa' },
              { code: 'GB', name: 'United Kingdom', capital: 'London' },
            ] as Country[],
          },
        });
        observer.complete();
      });
    }

    // Mocked response for teachers
    if (operation.operationName === 'GetTeachers') {
      return new Observable((observer) => {
        observer.next({
          data: {
            teachers: teachersData.data.teachers, // Ensure it matches the query
          }
        });
        observer.complete();
      });
    }
  }

  // Forward the operation to the next link in the chain if mock data is not used
  if (forward) {
    return forward(operation); // Pass the operation to the next link (real API)
  }

  return new Observable((observer) => {
    observer.error(new Error('Forward function is not defined.'));
  });
});

// Create Apollo Client instance
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/', // Actual API URL
  cache: new InMemoryCache(),
  link: ApolloLink.from([mockLink]), // uncomment it for mock response
});

export { client };
