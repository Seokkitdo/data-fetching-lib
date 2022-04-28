import Example from './reactQuery/Example';
import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
import QuickStart from './reactQuery/QuickStart';
import Pagination from './reactQuery/Pagination';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
    <QueryClientProvider client={queryClient}>
      {/* <Example /> */}
      {/* <QuickStart /> */}
      {/* <ReactQueryDevtools /> */}
      <Pagination />
    </QueryClientProvider>
    </>
  );
}

export default App;
