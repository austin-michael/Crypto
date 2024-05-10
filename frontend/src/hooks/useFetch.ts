import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [responseJSON, setResponseJSON] = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | unknown | null>(null);

  useEffect(() => {
    // if useFetch unmounts, shouldCancel will prevent any state updates on an unmounted component
    let shouldCancel = false;

    const callFetch = async () => {
      setLoading(true);

      try {
        const response = await fetch(url);
        const newResponseJSON = await response.json();

        if (shouldCancel) return;

        setResponseJSON(newResponseJSON);
        setError(null);
      } catch (newError: unknown) {
        if (shouldCancel) return;

        setError(newError);
        setResponseJSON(null);
      }

      setLoading(false);
    };

    callFetch();

    return () => {
      shouldCancel = true;
    };
  }, [url]);

  return { responseJSON, loading, error };
};

export default useFetch;
