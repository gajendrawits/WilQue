import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import HomePage from 'pages/homepage'
import { LoaderProvider } from 'context/loader'
const queryClient = new QueryClient()

const App = () => (
  <LoaderProvider>
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  </LoaderProvider>
)

export default App
