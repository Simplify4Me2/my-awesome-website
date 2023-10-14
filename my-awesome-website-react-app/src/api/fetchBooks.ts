import { useFetcher } from "../hooks";
import { Volumes } from "./models";

export function fetchBooks() {
  const { load, state } = useFetcher<Volumes>();

  function fetch(searchTerm: string) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=40`;
    load(url);
  }

  return { fetch, ...state };
}
