import {useQuery} from "@tanstack/react-query";

const getFetch = async ({url}: {url: string}) => {
	const response = await fetch(`https://fakestoreapi.in/api/${url}`);
	if (!response.ok) throw new Error("Failed to fetch");
	return response.json();
};

export function useGetFetch({key, url}: {key: string; url: string}) {
	return useQuery({queryKey: [key], queryFn: () => getFetch({url})});
}
