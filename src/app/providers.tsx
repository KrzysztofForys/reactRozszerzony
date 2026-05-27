import { QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider as ReduxProvider} from "react-redux";
import { store } from "./store";
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000,
            gcTime: 10 * 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false,
        }
    }
})
export function AppProviders({children} : any){
    return(
        <QueryClientProvider client={queryClient}>
            <ReduxProvider store={store}>
                {children}
                <ReactQueryDevtools initialIsOpen={false}/>
            </ReduxProvider>
        </QueryClientProvider>
    )
}