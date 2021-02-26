import useSWR from 'swr';

import fetch from './fetch';

function useSpotlight(idComercial) {
  const { data, error } = useSWR(
    'https://cronosservices.glr.pe/api/spotlight?site_id=comercial&_id=' +
      idComercial +
      '&no-api-cache=1&no-cache=1&status=1',
    fetch,
    {
      revalidateOnFocus: false,
    }
  );
  return {
    spotLight: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useSpotlight;
