import { useEffect, useState } from "react";

const useFetch = (url: string, init: RequestInit) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadData().finally(() => setLoading(false));
  }, []);

  const loadData = async () => {
    const response = await fetch(url, init);
    const responseJSON = JSON.parse(await response.json());
    if (response.ok) setData(responseJSON);
    else setError(responseJSON);
  };

  return {
    data,
    loading,
    error,
  };
};

export { useFetch };
