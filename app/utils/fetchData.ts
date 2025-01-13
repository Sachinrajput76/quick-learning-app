export async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Replace with your API
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in fetchData:', error);
      throw error; // Re-throw the error to be handled by the caller
    }
  }
  