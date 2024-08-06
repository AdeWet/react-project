import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BrowsePage from "./components/browse/BrowsePage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowsePage />
    </QueryClientProvider>
  );
}

export default App;
