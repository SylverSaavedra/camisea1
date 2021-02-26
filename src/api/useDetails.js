import useSWR from 'swr';

import fetch from './fetch';

function useDetails(slug) {
  const { data, error } = useSWR(
    'https://cronosservices.glr.pe/api/content/article/detail?site_id=larepublica&slug=' +
      slug +
      '&status=1&no-cache=1&no-api-cache=1',
    fetch,
    {
      revalidateOnFocus: false,
    }
  );

  return {
    spotLightDetails: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useDetails;
