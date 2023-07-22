import { useState } from 'react';

export const useFetchHook = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const doFetch = url => {
    setLoading(true);

    fetch(url)
      .then(response => response.json())
      .then(response => {
        setData(response);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  };

  return { data, loading, error, doFetch };
};