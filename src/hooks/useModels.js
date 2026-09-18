import { useEffect, useState } from "react";
import { fetchModels } from "../services/modelService";

export function useModels() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetchModels({ version: 1, lang: "da" })
      .then((json) => {
        if (!cancelled) {
          setData(json);
          setLoading(false);
        }
      })
      .catch((requestError) => {
        if (!cancelled) {
          setError(requestError);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, isLoading, error };
}

export default useModels;
