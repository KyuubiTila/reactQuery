import { AllRoutes } from './routes/AllRoutes';
import { Header } from './wrappers/Header';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <AllRoutes />
      </div>
    </QueryClientProvider>
  );
}

export default App;
