import { useCallback, useState } from "react";

export default function useFetch(defaultOptions = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const run = useCallback(
    async (url, options = {}) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          ...defaultOptions,
          ...options,
          headers: {
            "Content-Type": "application/json",
            ...defaultOptions.headers,
            ...options.headers,
          },
        });

        const result = await response.json();

        if (!response.ok)
          throw new Error(result.message || "Something went wrong");

        setData(result);
        return result;
      } catch (err) {
        setError(err);
        throw err; // rethrow for custom handling
      } finally {
        setIsLoading(false);
      }
    },
    [defaultOptions]
  );

  return { run, data, error, isLoading };
}
