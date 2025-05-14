import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryCLient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryCLient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
};


export default App;
