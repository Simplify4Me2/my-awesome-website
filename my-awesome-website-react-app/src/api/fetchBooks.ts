import { useFetcher } from "react-router-dom";
import { useFetch } from "../hooks";

export function fetchBooks(searchTerm: string) {
    const fetcher = useFetcher();

    return fetcher.load('');
}