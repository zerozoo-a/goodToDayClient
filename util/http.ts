export const http = (query: string) => (requestInit?: RequestInit) =>
  fetch(`http://localhost:5050/${query}`, requestInit);
