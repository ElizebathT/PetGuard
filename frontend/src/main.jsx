
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()



createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <Provider store={store}>
    <App />
    </Provider>
    </QueryClientProvider>
)
