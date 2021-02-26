import useSWR from 'swr';

import fetch from './fetch';

function useSpotlightMenu(idComercial) {
  const { data, error } = useSWR(
    'https://cronosservices.glr.pe/api/menu?site_id=comercial&_id=' + idComercial + '&status=1',
    fetch,
    {
      revalidateOnFocus: false,
    }
  );
  return {
    spotLightMenu: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useSpotlightMenu;
