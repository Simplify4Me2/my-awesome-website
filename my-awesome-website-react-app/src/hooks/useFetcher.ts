import { useReducer, useRef } from "react";

interface State<T> {
  data?: T;
  error?: Error;
}

type Cache<T> = { [url: string]: T };

// discriminated union type
type Action<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error };

export function useFetcher<T = unknown>(
  options?: RequestInit
): { load: (url?: string) => Promise<void>, state: State<T>} {
  const cache = useRef<Cache<T>>({});

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
  };

  // Keep state logic separated
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return { ...initialState };
      case "fetched":
        return { ...initialState, data: action.payload };
      case "error":
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const load = async (url?: string) => {
    if (!url) return;

    cancelRequest.current = false;

    dispatch({ type: "loading" });

    // If a cache exists for this url, return it
    if (cache.current[url]) {
      dispatch({ type: "fetched", payload: cache.current[url] });
      return;
    }

    // const requestOptions: RequestInit = {};
    // const access_token = await AsyncStorage.getItem('access_token');
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // headers.append("Authorization", "Bearer " + access_token);
    // requestOptions.headers = headers;
    // requestOptions.method = "POST"
    // requestOptions.body = JSON.stringify(params);

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = (await response.json()) as T;
      cache.current[url] = data;
      if (cancelRequest.current) return;

      dispatch({ type: "fetched", payload: data });
    } catch (error) {
      console.log(error);
      if (cancelRequest.current) return;

      dispatch({ type: "error", payload: error as Error });
    }
  };

  return {load, state};
}
