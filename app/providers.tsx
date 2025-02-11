"use client";

import {store} from "@/redux/store";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useState} from "react";
import {Provider} from "react-redux";

export function Providers({children}: {children: React.ReactNode}) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>{children}</Provider>
		</QueryClientProvider>
	);
}
